/**
 * Products Reducer
 */


const mainCategories = JSON.parse(localStorage.getItem('mainCategories'));
const products = JSON.parse(localStorage.getItem('products'));
const product = JSON.parse(localStorage.getItem('product'));

const productsReducerDefaultState = {
    mainCategories: mainCategories || [],
    subCategories: [],
    productsList: products ? products.filteredProducts : [],
    productsTitle: products ? products.title : "",
    product: product || {},
    breadCrumbs: products ? products.breadCrumbs : [],
    displaySubCategories: false,
    currentCategory: null,
    relatedCategory: null,
    productFeatures: [],
    products: []
};

export default (state = productsReducerDefaultState, action) => {
    switch (action.type) {
    	case 'LOAD_MAIN_CATEGORIES':
    		return {
    			...state,
                mainCategories: action.payload
    		}
        case 'LOAD_SUB_CATEGORIES':
            return {
                ...state,
                displaySubCategories: true,
                subCategories: action.payload
            }
        case 'DISPLAY_SUB_CATEGORIES':
            return {
                ...state,
                displaySubCategories: true
            }
        case 'HIDE_SUB_CATEGORIES':
            return {
                ...state,
                displaySubCategories: false
            }
        case 'FETCH_PRODUCTS':
            return {
                ...state,
                productsList: action.payload.filteredProducts,
                productsTitle: action.payload.title,
                breadCrumbs: action.payload.breadCrumbs
            }
        case 'FETCH_ALL_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }
        case 'FETCH_PRODUCT':
            return {
                ...state,
                product: action.payload
            }
        case 'CURRENT_CATEGORY':
            return {
                ...state,
                currentCategory: action.payload
            }
        case 'RELATED_CATEGORY':
            return {
                ...state,
                relatedCategory: action.payload
            }
        default:
            return state;
    }
}