/**
 * Wishlist Reducer
 */


const wishReducerDefaultState = {
    /*This object should contain initial state values*/
    wishlist: [],
};

export default (state = wishReducerDefaultState, action) => {
    switch (action.type) {
    	case 'ADD_TO_WISHLIST':
    		return {
    			...state,
                wishlist: state.wishlist.concat(action.payload)
    		}
        default:
            return state;
    }
}