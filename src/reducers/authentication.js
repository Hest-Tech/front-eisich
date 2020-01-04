/**
 * Authentication Reducer
 */


const autheticationReducerDefaultState = {
    isAuthenticated: null,
    user: null,
    uid: null,
    openAuthPopUp: false,
    closeAuthPopUp: undefined,
    registering: false,
    loggingIn: false,
    resetingPass: false
}

export default (state = autheticationReducerDefaultState, action) => {
    switch (action.type) {
        case 'LOAD_USER':
            return {
                ...state,
                uid: action.uid
            };
        case 'OPEN_AUTH_POPUP':
            return {
                ...state,
                openAuthPopUp: true,
                closeAuthPopUp: false,
                loggingIn: true
            }
        case 'LOGIN_FORM':
            return {
                ...state,
                loggingIn: true,
                registering: false,
                resetingPass: false
            }
        case 'SIGNUP_FORM':
            return {
                ...state,
                registering: true,
                loggingIn: false,
                resetingPass: false,
            }
        case 'RESET_PASS_FORM':
            return {
                ...state,
                registering: false,
                loggingIn: false,
                resetingPass: true
            }
        case 'UNLOAD_USER':
            return {
                isAuthenticated: null,
                user: null,
                uid: null,
                openAuthPopUp: false,
                closeAuthPopUp: undefined,
                registering: false,
                loggingIn: false,
                resetingPass: false
            }
        case 'CLOSE_AUTH_POPUP':
            return {
                ...state,
                closeAuthPopUp: true,
                registering: false,
                loggingIn: false,
                resetingPass: false,
                openAuthPopUp: false
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isAuthenticated: true
            };
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            };
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
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