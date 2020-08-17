/**
 * Cart Reducer
 */

const cart = localStorage.getItem('cart');
const cartItem = !cart ? [] : JSON.parse(cart);

export default (state = cartItem, action) => {
    switch (action.type) {
    	case 'ADD_TO_CART':
        case 'FETCH_CART':
        case 'REMOVE_ITEM_FROM_CART':
        case 'CLEAR_CART':
        case 'UPDATE_CART_ITEM':
            return action.payload
        default:
            return state;
    }
}