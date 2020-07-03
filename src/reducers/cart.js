/**
 * Cart Reducer
 */

const cartReducerDefaultState = {
    cart: []
};

export default (state = cartReducerDefaultState, action) => {
    switch (action.type) {
    	case 'ADD_TO_CART':
        case 'FETCH_CART':
        case 'REMOVE_ITEM_FROM_CART':
        case 'UPDATE_CART_ITEM':
            return { cart: action.payload }
        default:
            return state;
    }
}