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


const url = "http://localhost:5000/api/v1/cart";
const rootUrl = "http://localhost:5000/api/v1";

// add to cart
export const addToCart = product => dispatch => {
    axios
        .get(`${url}/${product.pid}`)
        .then(res => {
            const pid = res.data.data;

            if (!!pid) {
                const cartProduct = {
                    ...product,
                    pid: pid.id,
                    sku: product.pid
                };

                axios
                    .post(`${url}/add/${pid.id}`, cartProduct)
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
            }
        })
        .catch(e => console.log(e))
}

// fetch cart
export const fetchCart = () => dispatch => {
    const cart = localStorage.getItem('cart');

    if (!cart) {
        axios
            .get(url)
            .then(res => {
                const cartData = res.data.data;
                localStorage.setItem('cart', JSON.stringify(cartData));

                dispatch({
                    type: FETCH_CART,
                    payload: cartData
                });
            })
            .catch(e => console.log(e))
    } else {
        const parsedCart = JSON.parse(cart);

        dispatch({
            type: FETCH_CART,
            payload: parsedCart
        });
    }
}

// remove item from cart
export const removeFromCart = pid => dispatch => {
    axios
        .delete(`${url}/delete/${pid}`)
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
}

// update cart item
export const updateCartItem = (pid, updates) => dispatch => {
    axios
        .patch(`${url}/update/${pid}`, updates)
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
}