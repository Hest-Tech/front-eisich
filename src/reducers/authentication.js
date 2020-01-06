/**
 * Authentication Reducer
 */


const autheticationReducerDefaultState = {
    isAuthenticated: undefined,
    user: null,
    displayName: null,
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
                isAuthenticated: true,
                displayName: action.displayName,
                user: action.user
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
                resetingPass: false
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
                isAuthenticated: undefined,
                user: null,
                openAuthPopUp: false,
                closeAuthPopUp: undefined,
                registering: false,
                loggingIn: false,
                displayName: null,
                resetingPass: false
            }
        case 'CLOSE_AUTH_POPUP':
            return {
                ...state,
                closeAuthPopUp: true,
                registering: false,
                loggingIn: false,
                resetingPass: false,
                openAuthPopUp: false,
                user: action.user
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                displayName: action.displayName
            };
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                user: action.user,
                displayName: action.displayName
            };
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                displayName: null
            };
        case 'UPDATE_USER':
        case 'RESET_PASSWORD':
        default:
            return state;
    }
}