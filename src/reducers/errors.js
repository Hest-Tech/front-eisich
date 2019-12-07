/**
 * Error Reducer
 */

const errorsReducerDefaultState = {
    msg: null,
    status: null,
    id: null
}

export default (state = errorsReducerDefaultState, action) => {
    switch (action.type) {
        case 'GET_ERRORS':
            return {
                msg: action.payload.msg,
                status: action.payload.status,
                id: action.payload.id
            };
        case 'CLEAR_ERRORS':
            return {
                msg: null,
                status: null,
                id: null
            };
        default:
            return state;
    }
}