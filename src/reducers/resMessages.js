/**
 * Error Reducer
 */


const msgReducerDefaultState = {
    msg: null,
    code: null,
    error: null
}

export default (state = msgReducerDefaultState, action) => {
    switch (action.type) {
        case 'GET_MSG':
        case 'SUCCESS_LOGIN':
            return {
                error: null,
                msg: action.payload.msg,
                code: action.payload.code
            };
        case 'LOGIN_FIRST':
        case 'LOGIN_FAIL':
            return {
                msg: null,
                error: action.payload.msg,
                code: action.payload.code
            }
        case 'CLEAR_MSG':
            return {
                error: null,
                msg: null,
                code: null
            };
        default:
            return state;
    }
}