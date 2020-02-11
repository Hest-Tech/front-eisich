/**
 * Products Reducer
 */


const productsReducerDefaultState = {
    mainCategories: JSON.parse(localStorage.getItem('mainCategories')),
    searchCategory: null,
    products: [],
    displaySubCategories: false
};

export default (state = productsReducerDefaultState, action) => {
    switch (action.type) {
    	case 'LOAD_PRODUCT_CATEGORIES':
    		return {
    			...state,
                mainCategories: action.payload
    		}
        default:
            return state;
    }
}