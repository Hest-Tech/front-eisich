/**
 * Cart Reducer
 */

const ordersReducerDefaultState = {
    completeOrders: [],
    pendingOrders: []
};

export default (state = ordersReducerDefaultState, action) => {
    switch (action.type) {
        case 'PLACE_ORDER':
            const currentOrders = state.pendingOrders.filter(order => order.pid !== action.payload.pid);
            const pendingOrders = currentOrders.concat(action.payload);

            return {
                ...state,
                pendingOrders
            }
        case 'COMPLETE_ORDER':
            const completeOrders = state.completeOrders.concat(action.payload);

            return {
                ...state,
                completeOrders: state.completeOrders.concat(action.payload)
            }
        default:
            return state;
    }
}