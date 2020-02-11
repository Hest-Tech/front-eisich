/**
 * Products action
 */

import axios from 'axios';

import fire, { database } from '../firebase/firebase';
import {
    LOAD_SUB_CATEGORIES,
    LOAD_MAIN_CATEGORIES,
    LOAD_INNER_CATEGORIES
} from './types';

const url = "http://localhost:5000/api/v1";

// load products
export const loadProductCategories = () => dispatch => {

    axios.get(`${url}/mainCategories`)
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

export const loadProductSubCategories = (name) => dispatch => {

    const storeCategories = JSON.parse(localStorage.getItem('mainCategories'));
    const selectedCategory = storeCategories.find(category => category.name === name);
    const sku = JSON.stringify(selectedCategory.sku.replace(/['"]+/g, ''));

    axios
        .get(`${url}/subCategories/${sku}`)
        .then(response => {
            const subCategories = response.data.data;
            console.log('subCategories: ', subCategories)
            // dispatch({ type: LOAD_SUB_CATEGORIES })
        })
        .catch(error => console.log(error))
}

export const loadProductInnerCategories = () => dispatch => {
    dispatch({ type: LOAD_PRODUCT_INNER_CATEGORIES })
}
