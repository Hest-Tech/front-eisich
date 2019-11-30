/**
 * Authentication actions
 */

import { returnErrors } from './errors';
import clientStorage from '../utils/clientStorage';
import { setTextFilter } from './filters';

import fetch from 'cross-fetch'

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
} = {}) => dispatch => {
    let body = JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        username: firstName,
        image: "",
        password,
        confirm_password: password
    });

    return fetch('https://flask-blog-api.herokuapp.com/api/v1/auth/signup', {
        method: 'POST',
        body,
        headers: { 'Content-Type': 'application/json' }
    })
        .then(
            response => response.json()
        )
        .then(json =>
                // We can dispatch many times!
                // Here, we update the app state with the results of the API call.
                
                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: json.data,
                    setCookie: clientStorage.setCookie
                })
            )
    // try {
    //     console.log('67 -->', body);
    //     const req = await fetch('https://flask-blog-api.herokuapp.com/api/v1/auth/signup', {
    //         method: 'POST',
    //         body,
    //         headers: { 'Content-Type': 'application/json' }
    //     });
    //     const res = await req.json();
    //     console.log('74 -->', res);
    //     dispatch({
    //         type: REGISTER_SUCCESS,
    //         payload: res.data,
    //         setCookie: clientStorage.setCookie
    //     });
    //     console.log('Success:', res.data);
    // } catch (err) {
    //     dispatch(
    //         returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
    //     );
    //     dispatch({ type: REGISTER_FAIL });
    //     console.error('Error:', err);
    // }
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
