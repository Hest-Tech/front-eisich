/**
 * Wishlist Reducer
 */

const wishlist = localStorage.getItem('wishlist');
const wishReducerDefaultState = {
    wishlist: !!wishlist ? JSON.parse(wishlist) : []
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