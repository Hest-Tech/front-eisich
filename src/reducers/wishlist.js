/**
 * Wishlist Reducer
 */


const wishReducerDefaultState = {
    wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
};

export default (state = wishReducerDefaultState, action) => {
    switch (action.type) {
    	case 'ADD_TO_WISHLIST':
        case 'FETCH_WISHLIST':
        case 'REMOVE_ITEM_FROM_WISHLIST':
    		return { wishlist: action.payload }
        default:
            return state;
    }
}