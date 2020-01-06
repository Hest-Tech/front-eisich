import authentication from '../../reducers/authentication';

const defaultState = {
    isAuthenticated: undefined,
    user: null,
    displayName: null,
    openAuthPopUp: false,
    closeAuthPopUp: undefined,
    registering: false,
    loggingIn: false,
    resetingPass: false
}

const user =  {
    firstName: 'John',
    lastName: 'Doe',
    phoneNumber: '0700000000',
    email: 'doe@email.com'
}

test('Should setup default authentication values', () => {
    const state = authentication(undefined, { type: '@@INIT' });

    expect(state).toEqual({ ...defaultState });
});

test('Should set user and displayName to a user object and user name values respectively', () => {
    const action = {
        type: 'LOAD_USER',
        user,
        displayName: 'John'
    }
    const state = authentication(defaultState, action);

    expect(state.isAuthenticated).toBe(true);
    expect(state.user).toStrictEqual({
        firstName: 'John',
        lastName: 'Doe',
        phoneNumber: '0700000000',
        email: 'doe@email.com'
    });
    expect(state.displayName).toBe('John');
});

test('Should set closeAuthPopUp to false, openAuthPopUp and loggingIn to true', () => {
    const state = authentication(defaultState, { type: 'OPEN_AUTH_POPUP' });

    expect(state.openAuthPopUp).toBe(true);
    expect(state.closeAuthPopUp).toBe(false);
    expect(state.loggingIn).toBe(true);
});

test('Should set loggingIn to true, registering and resetingPass to false', () => {
    const currentState = { ...defaultState, openAuthPopUp: true };
    const state = authentication(currentState, { type: 'LOGIN_FORM' });

    expect(state.loggingIn).toBe(true);
    expect(state.registering).toBe(false);
    expect(state.resetingPass).toBe(false);
});

test('Should set registering to true, logginIn and resetingPass to false', () => {
    const currentState = { ...defaultState, openAuthPopUp: true };
    const state = authentication(currentState, { type: 'SIGNUP_FORM' });

    expect(state.registering).toBe(true);
    expect(state.loggingIn).toBe(false);
    expect(state.resetingPass).toBe(false);
});

test('Should set resetingPass to true, registering and loggingIn to false', () => {
    const currentState = { ...defaultState, openAuthPopUp: true };
    const state = authentication(currentState, { type: 'RESET_PASS_FORM' });

    expect(state.registering).toBe(false);
    expect(state.loggingIn).toBe(false);
    expect(state.resetingPass).toBe(true);
});

test('Should set all keys to their default values', () => {
    const currentState = { ...defaultState, openAuthPopUp: true };
    const state = authentication(currentState, { type: 'UNLOAD_USER' });

    expect(state).toEqual({ ...defaultState });
});

test('Should set closeAuthPopUp to true, openAuthPopUp and loggingIn and registering to false', () => {
    const action = {
        type: 'CLOSE_AUTH_POPUP',
        user,
        displayName: 'John'
    }
    const currentState = {
        openAuthPopUp: true,
        closeAuthPopUp: false,
        registering: true,
        loggingIn: false
    }
    const state = authentication(currentState, action);

    expect(state.openAuthPopUp).toBe(false);
    expect(state.closeAuthPopUp).toBe(true);
    expect(state.registering).toBe(false);
    expect(state.loggingIn).toBe(false);
});

test('Should set authentication to true and displayName to the correct user name', () => {
    const action = {
        type: 'LOGIN_SUCCESS',
        displayName: 'John'
    }
    const currentState = {
        openAuthPopUp: true,
        closeAuthPopUp: false,
        registering: false,
        loggingIn: true
    }
    const state = authentication(currentState, action);

    expect(state.isAuthenticated).toBe(true);
    expect(state.displayName).toBe('John');
});

test('Should set displayName to a correct user name', () => {
    const action = {
        type: 'REGISTER_SUCCESS',
        user,
        displayName: 'John'
    }
    const currentState = {
        ...defaultState,
        openAuthPopUp: true,
        closeAuthPopUp: false,
        registering: true,
        loggingIn: false
    }
    const state = authentication(currentState, action);

    expect(state.isAuthenticated).toBe(true);
    expect(state.user).toStrictEqual({
        firstName: 'John',
        lastName: 'Doe',
        phoneNumber: '0700000000',
        email: 'doe@email.com'
    });
    expect(state.displayName).toBe('John');
});

test('Should set isAuthenticatedto false, user and displayName to null', () => {
    const currentState = {
        ...defaultState,
        user,
        displayName: 'John'
    }
    const state = authentication(currentState, { type: 'LOGOUT_SUCCESS' });
    const newState = {
        ...defaultState,
        isAuthenticated: false
    }

    expect(state).toStrictEqual(newState);
})