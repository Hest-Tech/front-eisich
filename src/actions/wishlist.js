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


const url = "http://localhost:5000/api/v1/wishlist";
const cartUrl = "http://localhost:5000/api/v1/cart";

// add to wishlist
export const addToWishlist = product => dispatch => {
    axios
        .get(`${cartUrl}/${product.pid}`)
        .then(res => {
            const pid = res.data.data;

            if (!!pid) {
                const wishlistProduct = {
                    ...product,
                    pid: pid.id
                };

                axios
                    .post(`${url}/add/${pid.id}`, wishlistProduct)
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
            }
        })
        .catch(e => console.log(e))
}

// fetch wishlist
export const fetchWishlist = () => dispatch => {
    const wishlist = localStorage.getItem('cart');

    if (!wishlist) {
        axios
            .get(url)
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

        dispatch({
            type: FETCH_WISHLIST,
            payload: parsedWishlist
        });
    }
}

// remove item from wishlist
export const removeFromWishlist = pid => dispatch => {
    axios
        .delete(`${url}/delete/${pid}`)
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
}