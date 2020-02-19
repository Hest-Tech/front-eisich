/**
 * Products action
 */

import axios from 'axios';

import fire, { database } from '../firebase/firebase';
import {
    LOAD_SUB_CATEGORIES,
    LOAD_MAIN_CATEGORIES,
    LOAD_INNER_CATEGORIES,
    HIDE_SUB_CATEGORIES,
    DISPLAY_SUB_CATEGORIES,
    FETCH_PRODUCTS,
    FETCH_PRODUCT
} from './types';

const url = "http://localhost:5000/api/v1";

// load products
export const loadProductCategories = () => dispatch => {

    axios
        .get(`${url}/mainCategories`)
        .then(response => {
            const mainCategories = response.data.data;
            const productMainCategories = [];
            
            mainCategories.map(category => {
                productMainCategories.push(category);
            })

            localStorage.setItem('mainCategories', JSON.stringify(productMainCategories));

            return dispatch({
                type: LOAD_MAIN_CATEGORIES,
                payload: productMainCategories
            })
        })
        .catch(error => console.log(error))
}

export const loadProductSubCategories = name => dispatch => {

    axios
        .get(`${url}/subCategories/${name}`)
        .then(response => {
            const subCategories = response.data.data;
            // console.log('subCategories: ', subCategories)
            dispatch({
                type: LOAD_SUB_CATEGORIES,
                payload: subCategories
            });
        })
        .catch(error => console.log(error))
}

export const hideSubCategories = () => dispatch => dispatch({
    type: HIDE_SUB_CATEGORIES
});

export const displaySubCategories = () => dispatch => dispatch({
    type: DISPLAY_SUB_CATEGORIES
});

export const fetchProducts = (sku) => dispatch => {
    axios
        .get(`${url}/products`)
        .then(response => {
            const products = response.data.data;

            const filteredProducts = products.filter(prod => {
                return prod.mainCategory === sku || prod.subCategory === sku || prod.innerCategory === sku;
            })

            localStorage.setItem('products', JSON.stringify(filteredProducts));

            dispatch({
                type: FETCH_PRODUCTS,
                payload: filteredProducts
            })
            console.log(filteredProducts);
        })
        .catch(error => console.log(error))
}

export const fetchProduct = (pid) => dispatch => {
    axios
        .get(`${url}/product/${pid}`)
        .then(response => {
            const product = response.data.data;

            localStorage.setItem('product', JSON.stringify(product));
            dispatch({
                type: FETCH_PRODUCT,
                payload: product
            })
        })
        .catch(error => console.log(error))
}