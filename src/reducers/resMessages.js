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
        case 'SUCCESS_LOGIN_MSG':
        case 'SUCCESS_REGISTER_MSG':
        case 'SUCCESS_RESET_PASS_MSG':
            return {
                error: null,
                msg: action.payload.msg,
                code: action.payload.code
            };
        case 'LOGIN_FIRST':
        case 'LOGIN_FAIL':
        case 'REGISTER_FAIL':
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