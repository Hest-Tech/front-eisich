/**
 * Products action
 */

import axios from 'axios';

import fire, { database } from '../firebase/firebase';
import { blurResults } from './filters';
import { history } from '../routes/AppRouter';
import {
    LOAD_SUB_CATEGORIES,
    LOAD_MAIN_CATEGORIES,
    LOAD_INNER_CATEGORIES,
    HIDE_SUB_CATEGORIES,
    DISPLAY_SUB_CATEGORIES,
    FETCH_ALL_PRODUCTS,
    FETCH_PRODUCTS,
    FETCH_PRODUCT,
    FETCH_CART
} from './types';

const url = "http://localhost:5000/api/v1";


export const setCurrency = (num) => {
    if (isNaN(num) == false) {
        return (num).toLocaleString("en", {
            style: "currency",
            currency: "Ksh",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });
    }
}

const loadRelatedCategoriesHelper = (name, sku, dispatch) => {
    axios
        .get(`${url}/${name}/${sku}`)
        .then(res => {
            const category = res.data.data;
            // console.log('category ==> ',category)

            dispatch({
                type: 'RELATED_CATEGORY',
                payload: category
            })
        })
        .catch(error => console.log(error))
}

const loadCurrentCategory = (name, sku, dispatch) => {
    axios
        .get(`${url}/category/${name}/${sku}`)
        .then(res => {
            const category = res.data.data;
            // console.log('currentCategory: ',category)

            dispatch({
                type: 'CURRENT_CATEGORY',
                payload: category
            })
        })
        .catch(error => console.log(error))
}


// load mainCategories
export const loadProductCategories = () => dispatch => {

    axios
        .get(`${url}/mainCategories`)
        .then(response => {
            const mainCategories = response.data.data;
            const productMainCategories = [];
            // console.log('mainCategories: ',mainCategories)

            mainCategories.map(category => {
                productMainCategories.push(category);
            })

            localStorage.setItem('mainCategories', JSON.stringify(productMainCategories));

            dispatch({
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

// fetch category products
export const fetchProducts = (sku, name, title) => dispatch => {
    fetchAllProducts()

    const payload = {};
    const data = localStorage.getItem('allProducts');
    const products = !!data ? JSON.parse(data) : [];
    console.log('products: ',products)
    console.log('sku: ',sku)
    console.log('name: ',name)

    const filteredProducts = products.filter(item => {
        switch (name) {
            case 'MAIN_CATEGORY':
                return item.mainCategory === sku
            case 'SUB_CATEGORY':
                return item.subCategory === sku
            case 'INNER_CATEGORY':
                const productFound = item.innerCategory === sku;
                return productFound;
        }
    });

    console.log('filteredProducts: ',!!filteredProducts.length)

    if (!!filteredProducts.length) {

        const product = filteredProducts[0];
        const fetchCategoryUrl = `
            ${url}/${name}/${product.mainCategory}/${product.subCategory}/${product.innerCategory}
        `;

        axios
            .get(fetchCategoryUrl)
            .then(response => {
                const data = response.data.data;
                console.log('res data: ',response)
                // const newData = !!data.length && data;
                payload['breadCrumbs'] = data;
                payload['title'] = title
                payload['filteredProducts'] = filteredProducts
                localStorage.setItem('products', JSON.stringify(payload));

                dispatch({
                    type: FETCH_PRODUCTS,
                    payload
                })
            })
            .catch(error => console.log(error))
    } else {
        const payload = {};
        console.log('FILTER')

        axios
            .get(`${url}/breadCrumbs/${name}/${sku}`)
            .then(res => {
                const data = res.data.data;
                console.log('breadCrumbs: ',data)
                payload['breadCrumbs'] = data;
                payload['title'] = title;
                payload['filteredProducts'] = [];
                payload['products'] = [];
                
                dispatch({
                    type: FETCH_PRODUCTS,
                    payload
                })
            })
            .catch(e => console.log(e));
    }
}

// fetch products
export const fetchAllProducts = () => dispatch => {
    axios
        .get(`${url}/products`)
        .then(response => {
            const products = response.data.data;

            dispatch({
                type: FETCH_ALL_PRODUCTS,
                payload: products
            })
            localStorage.setItem('allProducts',JSON.stringify(products));
        
        })
        .catch(error => console.log(error))
}

// fetch single product
export const fetchProduct = (pid) => dispatch => {
    // dispatch({ type: 'FOCUS_RESULTS' })
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

// load related categories
export const loadRelatedCategories = () => dispatch => {
    const selectCategory = localStorage.getItem('selectCategory');
    console.log('selectCategory: ',selectCategory)

    if (!!selectCategory) {
        const category = JSON.parse(selectCategory);
        const sku = category.sku;


        switch(category.name) {
            case 'MAIN_CATEGORY':
                loadCurrentCategory('MAIN_CATEGORY', sku, dispatch);
                loadRelatedCategoriesHelper('MAIN_CATEGORY', sku, dispatch);
                break;
            case 'SUB_CATEGORY':
                loadCurrentCategory('SUB_CATEGORY', sku, dispatch);
                loadRelatedCategoriesHelper('SUB_CATEGORY', sku, dispatch);
                break;
            case 'INNER_CATEGORY':
                loadCurrentCategory('INNER_CATEGORY', sku, dispatch);
                loadRelatedCategoriesHelper('INNER_CATEGORY', sku, dispatch);
                break;
        }
    } else {
        history.push('/');
    }
}
