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
import fire from '../firebase/firebase';
import clientStorage from '../utils/clientStorage';
import { returnMessages, clearMessages } from './resMessages';

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
            }, error => console.log(error));
        })
        .catch(error => {
            dispatch(
                returnMessages(error.code, error.message, 'REGISTER_FAIL')
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
export const loadUser = (payload) => ({
    type: 'LOAD_USER',
    payload
});

// login success
export const loginUser = (
    email,
    password,
    setSubmitting
) => dispatch => {
    return fire.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            console.log("logged in ");
            setSubmitting(false)

            this.props.hidePopUp(); // del this

            let userId = fire.auth().currentUser.uid;

            return fire.database()
                .ref('/users/' + userId)
                .once('value')
                .then(snapshot => {
                    window.location.reload()
                    let userData = snapshot.val();
                    this.props.dispatch(loadUser(userData));
                    let storeUser = new clientStorage();
                    let user = JSON.stringify(userData);
                    storeUser.setCookie('user', user, 1);
                });
        })
        .catch(error => {
            dispatch(
                returnMessages(error.code, error.message, 'LOGIN_FAIL')
            );
            setTimeout(() => {
                dispatch(clearMessages())
            }, 5000);
            console.log('-->', error);
            setSubmitting(false);
        })
};

// logout success
export const logoutUser = () => ({
    type: LOGOUT_SUCCESS
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
