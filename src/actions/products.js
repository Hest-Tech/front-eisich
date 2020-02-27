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
    FETCH_PRODUCT,
    ADD_TO_CART,
    FETCH_CART
} from './types';

const url = "http://localhost:5000/api/v1";

// fetch categories helper
const fetchCategoriesHelper = (
    products,
    name,
    title,
    payload,
    sku,
    dispatch
) => {
    const filteredProducts = products.filter(item => {
        switch(name) {
            case 'MAIN_CATEGORY':
                return item.mainCategory === sku
            case 'SUB_CATEGORY':
                return item.subCategory === sku
            case 'INNER_CATEGORY':
                return item.innerCategory === sku
        }
    });
    const product = filteredProducts[0] || {}
    const fetchUrl = `${url}/${name}/${product.mainCategory}/${product.subCategory}/${product.innerCategory}`;

    axios
        .get(fetchUrl)
        .then(response => {
            const data = response.data.data;
            const newData = !!data.length && data.map(item => ({
                ...item,
                title: name
            }));
            payload['breadCrumbs'] = newData;
            payload['title'] = title
            payload['filteredProducts'] = filteredProducts
            localStorage.setItem('products', JSON.stringify(payload));

            dispatch({
                type: FETCH_PRODUCTS,
                payload
            })
        })
        .catch(error => console.log(error))
}


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

// load product categories
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

// hide product sub categories
export const hideSubCategories = () => dispatch => dispatch({
    type: HIDE_SUB_CATEGORIES
});

// show product sub categories
export const displaySubCategories = () => dispatch => dispatch({
    type: DISPLAY_SUB_CATEGORIES
});

// fetch products
export const fetchProducts = (sku, name, title) => dispatch => {
    console.log('name: ', name)
    console.log('sku: ', sku)
    console.log('title: ', title)
    axios
        .get(`${url}/${name}/products`)
        .then(response => {
            // console.log('response: ', response)
            const products = response.data.data;
            const mainCategory = response.data.baseCategory;
            const subCategory = response.data.subCategory;
            const payload = {};
            let filteredProducts;
            let product;

            switch(name) {
                case 'MAIN_CATEGORY':
                case 'SUB_CATEGORY':
                case 'INNER_CATEGORY':
                    fetchCategoriesHelper(
                        products,
                        name,
                        title,
                        payload,
                        sku,
                        dispatch
                    );
                    break;
            }
        })
        .catch(error => console.log(error))
}

// fetch single product
export const fetchProduct = (pid) => dispatch => {
    axios
        .get(`${url}/product/${pid}`)
        .then(response => {
            const product = response.data.data;
            console.log('product: ', product);

            localStorage.setItem('product', JSON.stringify(product));
            dispatch({
                type: FETCH_PRODUCT,
                payload: product
            })
        })
        .catch(error => console.log(error))
}