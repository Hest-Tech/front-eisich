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
    SUCCESS_LOGIN_MSG,
    UPDATE_USER_PROFILE,
    UPDATE_ADDRESS_BOOK,
    SUCCESS_UPDATE_MSG,
    UPDATE_ADDRESS
} from './types';
import fire, { googleAuthProvider, database } from '../firebase/firebase';
import clientStorage from '../utils/clientStorage';
import { returnMessages } from './resMessages';
import { history } from '../routes/AppRouter';


const storeUser = new clientStorage();

export const authHelperFunc = (action, displayName, data, dispatch, id) => {
    return fire.auth().onAuthStateChanged(user => {
        if (!!user === true) {
            let nameArray = displayName.split(' ');
            let firstName = nameArray.length > 1 ? nameArray.slice(0, -1).join(' ') : displayName;
            let lastName = nameArray.length > 1 ? nameArray.slice(1).join(' ') : 'Anonymous';
            let userData = {
                ...data,
                firstName,
                lastName
            };
            let user = JSON.stringify(userData);
            console.log('-=>', user);

            storeUser.setCookie('user', user, 1);

            let userNow = fire.auth().currentUser;

            return userNow.updateProfile({ displayName: firstName })
                .then(() => {

                    switch (action) {
                        case 'REGISTER_ACTION':
                            let ref = database.ref().child('users');

                            console.log(firstName);
                            ref.child(userNow.uid).set(data)
                                .then(ref => {
                                    console.log('==>', ref);
                                    dispatch({
                                        type: REGISTER_SUCCESS,
                                        user: userData,
                                        displayName: firstName
                                    })
                                    dispatch(loadUser());
                                    dispatch(closeAuthPopUp());
                                    history.push('/customer/account');
                                    dispatch(
                                        returnMessages('Registered and logged In successfully', 200, id)
                                    );
                                }, error => console.log(error));
                            break;
                        case 'LOGIN_ACTION':
                            console.log('LOGIN_ACTION')
                            dispatch(loadUser());
                            dispatch(closeAuthPopUp());
                            history.push('/customer/account');
                            dispatch(
                                returnMessages('Logged In successfully', 200, id)
                            );
                            break;
                    }
                }).catch(error => {
                    console.log(error);
                });
        } else {
            console.log('logged out')
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
            let addressRef = ref.child("address");
            let fullName = `${firstName} ${lastName}`;
            let data = {
                email,
                phoneNumber: phoneNumber.toString(),
                firstName,
                lastName,
                address: []
            }

            authHelperFunc('REGISTER_ACTION', fullName, data, dispatch, SUCCESS_REGISTER_MSG);
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
        let userId = authUser.uid;

        database
            .ref('/users/' + userId)
            .once('value')
            .then(snapshot => {
                let userParsedCookie = JSON.parse(userCookie);
                let userData = snapshot.val();
                let newUserData = {
                    ...userParsedCookie,
                    ...userData
                }
                let user = JSON.stringify(newUserData);
                storeUser.setCookie('user', user, 1);
                return dispatch({
                    type: LOAD_USER,
                    user: userParsedCookie,
                    displayName: userCookie.firstName
                })
            })
            .catch(error => {
                dispatch(
                    returnMessages(error.message, error.code, LOGIN_FAIL)
                );
                console.log('-->', error);
            })
    } else {
        // dispatch(unloadUser());
        history.push('/');
        // storeUser.eraseCookie('user');
    }
};

// login success
export const loginUser = (actions) => dispatch => {

    if (typeof (actions) === 'object') {
        let {
            user,
            resetForm,
            setSubmitting
        } = actions;
        let { email, password } = user;

        return fire.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                let user = fire.auth().currentUser;
                console.log("logged in ", user);

                if (user) {
                    let userId = user.uid;
                    database
                        .ref('/users/' + userId)
                        .once('value')
                        .then(snapshot => {
                            let userData = snapshot.val();
                            let user = JSON.stringify({
                                ...userData,
                                uid: userId
                            });
                            storeUser.setCookie('user', user, 1);
                            dispatch({
                                type: LOGIN_SUCCESS,
                                displayName: user.displayName,
                                user: {
                                    ...userData,
                                    uid: userId
                                }
                            });
                            dispatch(loadUser());
                            dispatch(closeAuthPopUp());
                            history.push('/customer/account');
                            dispatch(
                                returnMessages('Logged In successfully', 200, SUCCESS_LOGIN_MSG)
                            );
                            setSubmitting(false);
                            resetForm();
                        });
                }
            })
            .catch(error => {
                dispatch(
                    returnMessages(error.message, error.code, LOGIN_FAIL)
                );
                console.log('-->', error);
                setSubmitting(false);
            })
    } else if (typeof (actions) === 'string') {
        switch (actions) {
            case 'google':
                return fire.auth()
                    .signInWithPopup(googleAuthProvider)
                    .then(result => {
                        let user = result.user;
                        let data = {
                            displayName: user.displayName,
                            email: user.email,
                            uid: user.uid,
                            phoneNumber: user.phoneNumber
                        }

                        authHelperFunc('LOGIN_ACTION', user.displayName, data, dispatch, SUCCESS_LOGIN_MSG);
                    })
                    .catch(err => {
                        console.log('=>', err);
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

// pop login form
export const addressBookForm = () => ({
    type: UPDATE_ADDRESS_BOOK
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

// update user
export const updateAccount = (updates, setSubmitting, resetForm) => dispatch => {

    let user = fire.auth().currentUser;
    let userId = user.uid;
    let ref = fire.database().ref('/users/' + userId);

    return user.updateProfile({ displayName: updates.firstName })
        .then(() => {
            ref.once('value')
                .then(snapshot => {
                    let authUser = snapshot.val();
                    fire.database()
                        .ref('/users/' + userId)
                        .set({
                            ...authUser,
                            ...updates
                        }, error => {
                            if (error) {
                                // The write failed...
                                console.log(error);
                            } else {
                                console.log('Data updated successfully')
                                // Data saved successfully!
                                // setSubmitting(false);
                                // resetForm();
                                dispatch({
                                    type: UPDATE_USER_PROFILE,
                                    updates
                                });
                                history.push('/customer/account');
                                dispatch(
                                    returnMessages('Details updated successfully', 200, SUCCESS_UPDATE_MSG)
                                );
                            }
                        });
                });
        }).catch(error => {
            console.log(error);
        });
}

export const addAddress = (address, resetForm, setSubmitting) => dispatch => {
    let user = fire.auth().currentUser;
    let userId = user.uid;
    let ref = fire.database().ref('/users/' + userId);

    ref.once('value')
        .then(snapshot => {
            let authUser = snapshot.val();
            let ref = fire.database().ref().push().key;

            fire.database()
                .ref('/users/' + userId)
                .child('address')
                .child(ref)
                .set({
                    ...address
                }, error => {
                    if (error) {
                        // The write failed...
                        console.log(error);
                    } else {
                        console.log('Data updated successfully')
                        // localStorage.setItem({
                        //     ...authUser,
                        //     address: { ...address }
                        // })
                        // Data saved successfully!
                        // setSubmitting(false);
                        // resetForm();
                        console.log(authUser);
                        dispatch({
                            type: UPDATE_ADDRESS,
                            address
                        });
                        history.push('/customer/account');
                        dispatch(
                            returnMessages('Address was saved successfully', 200, SUCCESS_UPDATE_MSG)
                        );
                    }
                });
        });   
    
}