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

// add to cart
export const addToCart = product => dispatch => {
    const productList = [];
    const currCart = JSON.parse(localStorage.getItem('cart'));
    const newCart = !!currCart ? currCart.concat(product) : (productList.push(product) && productList);

    axios
        .get(`${url}/${product.pid}`)
        .then(res => {
            const pid = res.data.data;
            // console.log('===========> ', pid);

            if (!!pid) {
                const cartProduct = {
                    ...product,
                    pid: pid.id
                };

                axios
                    .post(`${url}/add/${pid.id}`, cartProduct)
                    .then(res => {
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
        .catch(e => console.log('error here: ', e))
}

// fetch cart
export const fetchCart = () => dispatch => {
    const storedCart = localStorage.getItem('cart');

    if (!storedCart) {
        axios
            .get(url)
            .then(res => {
                const cart = res.data.data;
                localStorage.setItem('cart', JSON.stringify(cart));

                dispatch({
                    type: FETCH_CART,
                    payload: cart
                });
            })
            .catch(e => console.log(e))
    } else {
        const cart = JSON.parse(storedCart);

        dispatch({
            type: FETCH_CART,
            payload: cart
        });
    }

}

// remove item from cart
export const removeFromCart = pid => dispatch => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const newCart = cart.filter(item => item.pid !== pid);

    localStorage.setItem('cart', JSON.stringify(newCart));
    dispatch({
        type: REMOVE_ITEM_FROM_CART,
        payload: newCart
    })
}

// update cart item
export const updateCartItem = (pid, updates) => dispatch => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const newCart = cart.map(item => item.pid === pid ? item = {
        ...item,
        ...updates
    } : item);

    localStorage.setItem('cart', JSON.stringify(newCart));
    dispatch({
        type: UPDATE_CART_ITEM,
        payload: newCart
    })
}