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

const url = "http://localhost:5000/api/v1";

// add to cart
export const addToCart = product => dispatch => {
	const productList = [];
    const currCart = JSON.parse(localStorage.getItem('cart'));
    let newCart;
    // const newCart = !!currCart ? currCart.concat(product) : (productList.push(product) && productList);

    if (!!currCart) {
        newCart = currCart.concat(product);
        
        axios
            .post(`${url}/add-to-cart`, cartItem)
            .then((res) => {
                console.log('res: ',res)
            })
            .catch(e => console.log(e))
    } else {
        productList.push(product);
        newCart = productList;
    }

    localStorage.setItem('cart', JSON.stringify(newCart));
    dispatch({
        type: ADD_TO_CART,
        payload: newCart
    })
    history.push('/cart');    
}

// fetch cart
export const fetchCart = () => dispatch => {
    const cart = JSON.parse(localStorage.getItem('cart'));

    dispatch({
        type: FETCH_CART,
        payload: cart
    });
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