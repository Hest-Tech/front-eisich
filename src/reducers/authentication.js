/**
 * Authentication Reducer
 */


const autheticationReducerDefaultState = {
    isAuthenticated: null,
    user: null
}

export default (state = autheticationReducerDefaultState, action) => {
    switch (action.type) {
        case 'LOAD_USER':
            return {
                user: action.payload,
                isAuthenticated: true
            };
        case 'LOGIN_SUCCESS':
            return {
                isAuthenticated: true,
                user: action.payload
            };
        case 'REGISTER_SUCCESS':
        case 'AUTH_ERROR':
        case 'REGISTER_FAIL':
        case 'LOGIN_FAIL':
        case 'LOGOUT_SUCCESS':
            return {
                user: null,
                isAuthenticated: false,
            };
        case 'USER_LOADED':
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            };
        case 'DELETE_USER':
        case 'UPDATE_USER':
        case 'RESET_PASSWORD':
        default:
            return state;
    }
}