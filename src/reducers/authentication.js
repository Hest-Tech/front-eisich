/**
 * Authentication Reducer
 */

import clientStorage from '../utils/clientStorage';


const cookieStorage = new clientStorage();

const autheticationReducerDefaultState = {
    isAuthenticated: null,
    user: null,
}

export default (state = autheticationReducerDefaultState, action) => {
    switch (action.type) {
        case 'USER_LOADING':
            return {
                ...state,
                isLoading: true
            };
        case 'USER_LOADED':
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            };
        case 'REGISTER_SUCCESS':
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            };
        case 'AUTH_ERROR':
        case 'REGISTER_FAIL':
        case 'LOGIN_FAIL':
        case 'LOGOUT_SUCCESS':
            action.erraseCookie(action.cname);
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            };
        case 'DELETE_USER':
        case 'UPDATE_USER':
        case 'RESET_PASSWORD':
        default:
            return state;
    }
}