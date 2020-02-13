/**
 * Products Reducer
 */


const productsReducerDefaultState = {
    mainCategories: JSON.parse(localStorage.getItem('mainCategories')),
    subCategories: [],
    products: [],
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
                color: '#E9BD4C',
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
                // subCategories: []
            }
        default:
            return state;
    }
}