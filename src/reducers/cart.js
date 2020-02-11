/**
 * Cart Reducer
 */


const cartReducerDefaultState = {
    /*This object should contain initial state values*/
    cartList: [],
};

export default (state = cartReducerDefaultState, action) => {
    switch (action.type) {
    	case 'ADD_TO_CART':
    		return {
    			...state,
                cartList: state.cartList.concat(action.payload)
    		}
        default:
            return state;
    }
}