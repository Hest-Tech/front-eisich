/**
 * Orders Reducer
 */

const ordersReducerDefaultState = {
    completeOrders: [],
    pendingOrders: [],
    impulsePurchase: undefined
};

export default (state = ordersReducerDefaultState, action) => {
    switch (action.type) {
        case 'PLACE_ORDER':
            return {
                ...state,
                pendingOrders: action.payload
            }
        case 'COMPLETE_ORDER':
            const completeOrders = state.completeOrders.concat(action.payload);

            return {
                ...state,
                completeOrders: state.completeOrders.concat(action.payload),
                impulsePurchase: undefined
            }
        case 'IMPULSE_PURCHASE':
            return {
                ...state,
                impulsePurchase: true
            }
        case 'PURCHASE_CART_ITEMS':
            const selectedOrders = state.pendingOrders.filter(order => order.pid !== action.payload.pid);

            return {
                ...state,
                pendingOrders: selectedOrders.concat(action.payload),
                impulsePurchase: undefined
            }
        default:
            return state;
    }
}