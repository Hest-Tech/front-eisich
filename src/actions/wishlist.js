/**
 * Wishlist actions
 */

import axios from 'axios';

import {
    ADD_TO_WISHLIST,
    FETCH_WISHLIST,
    REMOVE_ITEM_FROM_WISHLIST
} from './types';
import { history } from '../routes/AppRouter';
import fire from '../firebase/firebase';


const url = "http://localhost:5000/api/v1/wishlist";

// add to wishlist
export const addToWishlist = product => dispatch => {
    fire.auth().onAuthStateChanged(user => {
        const userID = !!user ? user.uid : null
        product['userID'] = userID;

        axios
            .post(`${url}/add/${product.pid}`, product)
            .then(res => {
                const newWishlist = res.data.data;
                localStorage.setItem('wishlist', JSON.stringify(newWishlist));

                dispatch({
                    type: ADD_TO_WISHLIST,
                    payload: newWishlist
                })

                history.push('/customer/wishlist');
            })
            .catch(e => console.log(e))
    })
}

// fetch wishlist
export const fetchWishlist = () => dispatch => {
    fire.auth().onAuthStateChanged(user => {
        const userID = !!user ? user.uid : null
        const wishlist = localStorage.getItem('wishlist');

        if (!wishlist) {
            axios
                .get(`${url}/${userID}`)
                .then(res => {
                    const wishlistData = res.data.data;
                    localStorage.setItem('wishlist', JSON.stringify(wishlistData));

                    dispatch({
                        type: FETCH_WISHLIST,
                        payload: wishlistData
                    });
                })
                .catch(e => console.log(e))
        } else {
            const parsedWishlist = JSON.parse(wishlist);
            const userId = parsedWishlist.userID;

            if (userId === userID) {
                dispatch({
                    type: FETCH_WISHLIST,
                    payload: parsedWishlist
                })
            } else {
                dispatch({
                    type: FETCH_WISHLIST,
                    payload: []
                })
                localStorage.removeItem('wishlist');
            }
        }
    });
}

// remove item from wishlist
export const removeFromWishlist = pid => dispatch => {
    fire.auth().onAuthStateChanged(user => {
        const userID = !!user ? user.uid : null
    
        axios
            .delete(`${url}/delete/${pid}/${userID}`)
            .then(res => {

                if (res.status === 200) {
                    const updatedWishlist = res.data.data;

                    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
                    dispatch({
                        type: REMOVE_ITEM_FROM_WISHLIST,
                        payload: updatedWishlist
                    });
                } else if (res.status === 400) {
                    console.log({
                        error: "Error deleting wishlist",
                        status: 400
                    })
                }
            })
            .catch(e => console.log(e))
    })
}