import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
    registerHelperFunc,
    registerSuccess,
    loadUser,
    loginUser,
    signOutUser,
    unloadUser,
    logoutUser,
    openAuthPopUp,
    loginForm,
    signupForm,
    resetPassForm,
    closeAuthPopUp
} from '../../actions/authentication';
import {
    LOGIN_FORM,
    OPEN_AUTH_POPUP,
    RESET_PASS_FORM,
    SIGNUP_FORM,
    CLOSE_AUTH_POPUP,
    UNLOAD_USER,
    LOAD_USER,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS
} from '../../actions/types'
import fire from '../../firebase/firebase';



const createMockStore = configureMockStore([thunk]);

test('Should set up reset password form action object', () => {
    const action = resetPassForm();

    expect(action).toStrictEqual({ type: RESET_PASS_FORM });
});

test('Should set up login form action object', () => {
    const action = loginForm();

    expect(action).toStrictEqual({ type: LOGIN_FORM });
});

test('Should set up sign up form action object', () => {
    const action = signupForm();

    expect(action).toStrictEqual({ type: SIGNUP_FORM });
});

test('Should set up authentication pop up action object', () => {
    const action = openAuthPopUp();

    expect(action).toStrictEqual({ type: OPEN_AUTH_POPUP });
});

test('Should set up log out action object', () => {
    const action = logoutUser();

    expect(action).toStrictEqual({ type: LOGOUT_SUCCESS });
});

test('Should set up unload user action object', () => {
    const action = unloadUser();

    expect(action).toStrictEqual({ type: UNLOAD_USER });
});

test('Should set up close auth popup action object', () => {
    const store = createMockStore({});
    const action = store.getActions();

    store.dispatch(closeAuthPopUp());
    expect(action[0]).toStrictEqual({ type: CLOSE_AUTH_POPUP });
});

test('Should set up load user action object', () => {
    const store = createMockStore({});
    const action = store.getActions();
    const expectedPayload = { type: LOAD_USER };

    store.dispatch(loadUser());

    // console.log('-------------------->', action)
    // expect(action[0]).toStrictEqual(expectedPayload);
    // expect(action[1]).toStrictEqual({ type: UNLOAD_USER });
});

test('Should set up sign out user action object', () => {
    const store = createMockStore({});

    return store.dispatch(signOutUser()).then(() => {
        const action = store.getActions();
        store.dispatch(logoutUser());
        store.dispatch(unloadUser());

        expect(action[0]).toStrictEqual({ type: LOGOUT_SUCCESS });
        expect(action[1]).toStrictEqual({ type: UNLOAD_USER });
    });
});