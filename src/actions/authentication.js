/**
 * Authentication actions
 */

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types';


// Check token & load user
export const loadUser = () => async (dispatch, getState) => {
    dispatch({ type: USER_LOADING });
};

// register success
export const registerSuccess = ({} = {}) => dispatch => {
    return;
};





// login success
export const loginUser = (payload) => ({
    type: LOGIN_SUCCESS,
    payload
});




// logout success
export const logoutUser = (cname) => ({
    type: LOGOUT_SUCCESS,
    eraseCookie: clientStore.eraseCookie,
    cname
});

// reset password
export const resetPassword = ({ email }) => ({
    type: 'RESET_PASSWORD',
    url: '<url>',
    email
});

// update user
export const updateUser = ({ id }, updates) => ({
    type: 'UPDATE_USER',
    url: '<url>',
    id,
    updates
})

// delete user
export const deleteUser = ({ id }) => ({
    type: 'DELETE_USER',
    url: '<url>',
    id
})
