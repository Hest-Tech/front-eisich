/**
 * Authentication actions
 */

import { returnErrors } from './errors';
import clientStorage from '../utils/clientStorage';

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


const clientStore = new clientStorage();
const url = '';

// Check token & load user
export const loadUser = () => async (dispatch, getState) => {

    dispatch({ type: USER_LOADING });

    try {
        const req = await fetch(url, {
            method: 'POST',
            body,
            headers: { 'Content-Type': 'application/json' }
        });
        const res = await req.json();
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
        console.log('Success:', res.data);
    } catch (err) {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({ type: AUTH_ERROR });
        console.error('Error:', err);
    }
};

// register success
export const registerSuccess = ({
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
} = {}) => async dispatch => {
    const body = json.stringify({
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
    });

    try {
        const req = await fetch(url, {
            method: 'POST',
            body,
            headers: { 'Content-Type': 'application/json' }
        });
        const res = await req.json();
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
            setCookie: clientStorage.setCookie
        });
        console.log('Success:', res.data);
    } catch (err) {
        dispatch(
            returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
        );
        dispatch({ type: REGISTER_FAIL });
        console.error('Error:', err);
    }
};

// login success
export const loginUser = ({ email, password }) => async dispatch => {
    const body = JSON.stringify({ email, password });
    try {
        const req = await fetch(url, {
            method: 'POST',
            body,
            headers: { 'Content-Type': 'application/json' }
        });
        const res = await req.json();
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
            setCookie: clientStore.setCookie
        });
        console.log('Success:', res.data);
    } catch (err) {
        dispatch(
            returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
        );
        dispatch({
            type: LOGIN_FAIL
        });
        console.error('Error:', err);
    }    
};

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
