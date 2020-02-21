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


// add to wishlist
export const addToWishlist = product => dispatch => {
	const productList = [];
    const currWishlist = JSON.parse(localStorage.getItem('wishlist'));
    const newWishlist = !!currWishlist ? currWishlist.concat(product) : productList.push(product) && productList;
console.log("newWishlist: ", newWishlist)
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
    dispatch({
        type: ADD_TO_WISHLIST,
        payload: newWishlist
    })
    history.push('/customer/wishlist');
}

// fetch wishlist
export const fetchWishlist = () => dispatch => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist'));

    dispatch({
        type: FETCH_WISHLIST,
        payload: wishlist
    });
}

// remove item from wishlist
export const removeFromWishlist = pid => dispatch => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist'));
    const newWishlist = wishlist.filter(item => item.pid !== pid);

    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
    dispatch({
        type: REMOVE_ITEM_FROM_WISHLIST,
        payload: newWishlist
    })
}