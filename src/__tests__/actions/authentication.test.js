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

test('Should set up reset password form action object', () => {
    const action = resetPassForm();
    
    expect(action).toStrictEqual({
        type: 'RESET_PASS_FORM'
    });
});

test('Should set up login form action object', () => {
    const action = loginForm();
    
    expect(action).toStrictEqual({
        type: 'LOGIN_FORM'
    });
});

test('Should set up sign up form action object', () => {
    const action = signupForm();
    
    expect(action).toStrictEqual({
        type: 'SIGNUP_FORM'
    });
});

test('Should set up authentication pop up action object', () => {
    const action = openAuthPopUp();
    
    expect(action).toStrictEqual({
        type: 'OPEN_AUTH_POPUP'
    });
});

test('Should set up log out action object', () => {
    const action = logoutUser();
    
    expect(action).toStrictEqual({
        type: 'LOGOUT_SUCCESS'
    });
});

test('Should set up unload user action object', () => {
    const action = unloadUser();
    
    expect(action).toStrictEqual({
        type: 'UNLOAD_USER'
    });
});