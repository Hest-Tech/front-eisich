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
    OPEN_AUTH_POPUP,
    SUCCESS_REGISTER_MSG,
    LOGIN_SUCCESS,
    SUCCESS_LOGIN_MSG
} from './types';
import fire, { googleAuthProvider } from '../firebase/firebase';
import clientStorage from '../utils/clientStorage';
import { returnMessages } from './resMessages';
import { history } from '../routes/AppRouter';


const storeUser = new clientStorage();
export const registerHelperFunc = (displayName, data, dispatch) => {
    return fire.auth().onAuthStateChanged(user => {
        if (user) {

            let nameArray = displayName.split(' ');
            let ref = fire.database().ref().child(`users`);

            displayName = nameArray.length > 1 ? nameArray.slice(0, -1).join(' ') : displayName;

            user.updateProfile({ displayName })
                .then(() => {
                    console.log(user);
                    ref.child(user.uid).set(data).then(ref => {

                        let userData = {...data}
                        let user = JSON.stringify(userData);
                        
                        storeUser.setCookie('user', user, 1);
                        dispatch({
                            type: REGISTER_SUCCESS,
                            user: userData,
                            displayName
                        })
                        dispatch(loadUser());
                        dispatch(
                            returnMessages('Logged In successfully', 200, SUCCESS_REGISTER_MSG)
                        );

                        history.push('/customer/account');
                        dispatch(closeAuthPopUp());
                    }, error => console.log(error));
                }).catch(error =>  {
                    console.log(error);
                });
        }
    });
}

// register success
export const registerSuccess = ({
    firstName,
    lastName,
    phoneNumber,
    email,
    password
} = {}, setSubmitting, resetForm) => dispatch => {
    return fire.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            let data = {
                email: email,
                phoneNumber: phoneNumber.toString(),
                firstName: firstName,
                lastName: lastName
            }

            registerHelperFunc(firstName, data, dispatch);
            setSubmitting(false);
            resetForm();
        })
        .catch(error => {
            dispatch(
                returnMessages(error.message, error.code, REGISTER_FAIL)
            );
            console.log('-->', error);
            setSubmitting(false);
        });
};

// Check token & load user
export const loadUser = () => dispatch => {
    let userCookie = storeUser.getCookie('user');
    let authUser = fire.auth().currentUser;

    if (userCookie && authUser) {
        userCookie = JSON.parse(userCookie);
        return dispatch({
            type: LOAD_USER,
            user: userCookie,
            displayName: authUser.displayName
        })
    }
};

// login success
export const loginUser = (value, resetForm, setSubmitting) => dispatch => {
    let obj = typeof(value) === 'object' && Object.keys(value).length;

    if (!!obj) {
        let { email, password } = value;

        return fire.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                dispatch(loadUser());

                let user = fire.auth().currentUser;
                console.log("logged in ");

                if (user) {
                    dispatch({
                        type: LOGIN_SUCCESS,
                        displayName: user.displayName
                    });
                    dispatch(
                        returnMessages('Logged In successfully', 200, SUCCESS_LOGIN_MSG)
                    );
                    setSubmitting(false);
                    resetForm();
                    history.push('/customer/account');
                    dispatch(closeAuthPopUp());
                }
            })
            .catch(error => {
                dispatch(
                    returnMessages(error.message, error.code, LOGIN_FAIL)
                );
                console.log('-->', error);
                setSubmitting(false);
            })
    } else {
        switch(value) {
            case 'google':
                return fire.auth()
                    .signInWithPopup(googleAuthProvider)
                    .then(result => {
                        let user = result.user;
                        let data = {
                            displayName: user.displayName,
                            email: user.email
                        }
                        
                        registerHelperFunc(user.displayName, data, dispatch);
                    });
            case 'facebook':
                console.log(value);
                break;
            case 'twitter':
                console.log(value);
                break;
        }
    }
};

// logout success

export const signOutUser = () => dispatch => {
    return fire.auth().signOut()
        .then(() => {
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

// open form
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

// pop reset password form
export const resetPassForm = () => ({
    type: RESET_PASS_FORM
});

// close form
export const closeAuthPopUp = () => dispatch => {
    dispatch({ type: CLOSE_AUTH_POPUP })
};








// // reset password
// export const resetPassword = ({ email }) => ({
//     type: 'RESET_PASSWORD',
//     url: '<url>',
//     email
// });

// // update user
// export const updateUser = ({ id }, updates) => ({
//     type: 'UPDATE_USER',
//     url: '<url>',
//     id,
//     updates
// })

// // delete user
// export const deleteUser = ({ id }) => ({
//     type: 'DELETE_USER',
//     url: '<url>',
//     id
// })
