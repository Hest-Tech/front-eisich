/**
 * Authentication actions
 */

import {
    LOAD_USER,
    UNLOAD_USER,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_FORM,
    SIGNUP_FORM,
    RESET_PASS_FORM,
    CLOSE_AUTH_POPUP,
    OPEN_AUTH_POPUP
} from './types';
import fire from '../firebase/firebase';
import clientStorage from '../utils/clientStorage';
import { returnMessages, clearMessages } from './resMessages';
import { history } from '../routes/AppRouter';


// register success
export const registerSuccess = ({
    firstName,
    lastName,
    phoneNumber,
    email,
    password
} = {}, setSubmitting) => dispatch => {
    return fire.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            let user = fire.auth().currentUser;
            let ref = fire.database().ref().child(`users`);
            let data = {
                email: email,
                phoneNumber: phoneNumber.toString(),
                firstName: firstName,
                lastName: lastName
            }
            ref.child(user.uid).set(data).then(ref => {
                setSubmitting(false);

                let userData = {
                    email: email,
                    phoneNumber: phoneNumber.toString(),
                    firstName: firstName,
                    lastName: lastName
                }
                let storeUser = new clientStorage();
                let user = JSON.stringify(userData);
                storeUser.setCookie('user', user, 1);
                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: userData
                })
            }, error => console.log(error));
        })
        .catch(error => {
            dispatch(
                returnMessages(error.code, error.message, REGISTER_FAIL)
            );
            setTimeout(() => {
                dispatch(clearMessages())
            }, 5000);
            setSubmitting(false);
            console.log('---->', error.message);
            console.log(error);
        });
};

// Check token & load user
export const loadUser = uid => ({
    type: LOAD_USER,
    uid
});

// login success
export const loginUser = (
    email,
    password
) => dispatch => {
    return fire.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            console.log("logged in ");

            let userId = fire.auth().currentUser.uid;
            if (userId) {
                dispatch(loadUser(userId));
                dispatch({ type: LOGIN_SUCCESS });
                dispatch(
                    returnMessages('Logged In successfully', 200, 'SUCCESS_LOGIN')
                );
            }
        })
        .catch(error => {
            dispatch(
                returnMessages(error.message, error.code, 'LOGIN_FIRST')
            );
            console.log('-->', error);
            setSubmitting(false);
        })
};

// logout success

export const signOutUser = () => dispatch => {
    return fire.auth().signOut()
        .then(() => {
            // let storeUser = new clientStorage();
            // storeUser.eraseCookie('user');
            dispatch(logoutUser());
            dispatch(unloadUser());
            history.push('/');
            console.log('Signed out')
        })
        .catch(error => {
            console.log(error);
        })
}

export const unloadUser = () => ({
    type: UNLOAD_USER
});

// logout success
export const logoutUser = () => ({
    type: LOGOUT_SUCCESS
});

// close form
export const openAuthPopUp = () => ({
    type: OPEN_AUTH_POPUP
});

// pop login form
export const loginForm = () => ({
    type: LOGIN_FORM
});

// pop register form
export const signupForm = () => ({
    type: SIGNUP_FORM
});

// pop register form
export const resetPassForm = () => ({
    type: RESET_PASS_FORM
});

// close form
export const closeAuthPopUp = () => ({
    type: CLOSE_AUTH_POPUP
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
