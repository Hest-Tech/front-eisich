/**
 * Error Reducer
 */

const msgReducerDefaultState = {
    msg: null
}

export default (state = msgReducerDefaultState, action) => {
    switch (action.type) {
        case 'GET_MSG':
            return { msg: action.msg };
        case 'CLEAR_MSG':
            return { msg: null };
        default:
            return state;
    }
}