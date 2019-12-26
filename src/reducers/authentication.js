/**
 * Authentication Reducer
 */


const autheticationReducerDefaultState = {
    isAuthenticated: null,
    user: null,
    uid: null
}

export default (state = autheticationReducerDefaultState, action) => {
    switch (action.type) {
        case 'LOAD_USER':
            return {
                ...state,
                uid: action.uid
            };
        case 'REGISTER_SUCCESS':
        case 'LOGIN_SUCCESS':
            return {
                isAuthenticated: true,
                user: action.payload
            };
        case 'USER_LOADED':
            return {};
        case 'LOGOUT_SUCCESS':
            return {
                user: null,
                isAuthenticated: false,
            };
        case 'DELETE_USER':
        case 'UPDATE_USER':
        case 'RESET_PASSWORD':
        default:
            return state;
    }
}