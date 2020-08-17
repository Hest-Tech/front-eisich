/**
 * Cart actions
 */

import axios from 'axios';

import {
    ADD_TO_CART,
    FETCH_CART,
    REMOVE_ITEM_FROM_CART,
    UPDATE_CART_ITEM
} from './types';
import { history } from '../routes/AppRouter';
import fire from '../firebase/firebase';


const url = "http://localhost:5000/api/v1/cart";
const rootUrl = "http://localhost:5000/api/v1";

// add to cart

export const addToCart = product => dispatch => {
    fire.auth().onAuthStateChanged(user => {
        const userID = !!user ? user.uid : null

        axios
            .get(`${url}/${product.pid}`)
            .then(res => {
                const pid = res.data.data;

                if (!!pid) {
                    const cartProduct = {
                        ...product,
                        pid: pid.id,
                        sku: product.pid,
                        userID
                    };

                    fire.auth().currentUser.getIdToken(/* forceRefresh */ true).then(idToken => {
                        axios
                            .post(`${url}/add/${pid.id}/${idToken}`, cartProduct)
                            .then(res => {
                                const newCart = res.data.data;
                                localStorage.setItem('cart', JSON.stringify(newCart));

                                dispatch({
                                    type: ADD_TO_CART,
                                    payload: newCart
                                })

                                history.push('/cart');
                            })
                            .catch(e => console.log(e))
                    }).catch(error => {
                        // Handle error
                        console.log('error: ',error)
                    });
                }
            })
            .catch(e => console.log(e))
    });
}

// fetch cart
export const fetchCart = () => dispatch => {
    fire.auth().onAuthStateChanged(user => {
        const userID = !!user ? user.uid : null
        const cart = localStorage.getItem('cart');

        if (!cart) {
            // send token to server
            fire.auth().currentUser.getIdToken(/* forceRefresh */ true).then(idToken => {
                axios
                    .get(`${url}/cart/${idToken}`)
                    .then(res => {
                        const cartData = res.data.data;

                        localStorage.setItem('cart', JSON.stringify(cartData));

                        dispatch({
                            type: FETCH_CART,
                            payload: cartData
                        });
                    })
                    .catch(e => console.log(e))
            }).catch(error => {
                // Handle error
                console.log('error: ',error)
            });
        } else {
            const parsedCart = JSON.parse(cart);
            const userId = parsedCart.userID;

            if (userId === userID) {
                dispatch({
                    type: FETCH_CART,
                    payload: parsedCart
                })
            } else {
                dispatch({
                    type: FETCH_CART,
                    payload: []
                })
                localStorage.removeItem('cart');
            }
        }
    });
}

// clear out cart
export const clearOutCart = () => {
    axios
        .delete(`${url}/clear`)
        .then(res => {
            const status = res.data.status;

            (status === 200) && localStorage.removeItem('cart');
        })
        .catch(e => console.log(e))
}

// remove item from cart
export const removeFromCart = pid => dispatch => {
    fire.auth().onAuthStateChanged(user => {
        const userID = !!user ? user.uid : null

        // send token to server
        fire.auth().currentUser.getIdToken(/* forceRefresh */ true).then(idToken => {
            axios
                .delete(`${url}/delete/${pid}/${idToken}`)
                .then(res => {

                    if (res.status === 200) {
                        const updatedCart = res.data.data;

                        localStorage.setItem('cart', JSON.stringify(updatedCart));
                        dispatch({
                            type: REMOVE_ITEM_FROM_CART,
                            payload: updatedCart
                        })
                    } else if (res.status === 400) {
                        console.log({
                            error: "Error deleting cart",
                            status: 400
                        })
                    }
                })
                .catch(e => console.log(e))
        }).catch(error => {
            // Handle error
            console.log('error: ',error)
        });
    });
}

// update cart item
export const updateCartItem = (pid, updates) => dispatch => {
    fire.auth().onAuthStateChanged(user => {
        const userID = !!user ? user.uid : null;

        fire.auth().currentUser.getIdToken(/* forceRefresh */ true).then(idToken => {
            axios
                .patch(`${url}/update/${pid}/${idToken}`, updates)
                .then(res => {
                    if (res.status === 200) {
                        const updatedCart = res.data.data;

                        localStorage.setItem('cart', JSON.stringify(updatedCart));
                        dispatch({
                            type: UPDATE_CART_ITEM,
                            payload: updatedCart
                        })
                    } else if (res.status === 400) {
                        console.log({
                            error: "Error updating cart",
                            status: 400
                        })
                    }
                })
                .catch(e => console.log(e))
        }).catch(error => {
            // Handle error
            console.log('error: ',error)
        });
    })
}