/**
 * Products Reducer
 */


const productsReducerDefaultState = {
    mainCategories: JSON.parse(localStorage.getItem('mainCategories')) || [],
    subCategories: [],
    productsList: JSON.parse(localStorage.getItem('products')) || [],
    product: JSON.parse(localStorage.getItem('product')) || {},
    displaySubCategories: false
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
                productsList: action.payload
            }
        case 'FETCH_PRODUCT':
            return {
                ...state,
                product: action.payload
            }
        default:
            return state;
    }
}