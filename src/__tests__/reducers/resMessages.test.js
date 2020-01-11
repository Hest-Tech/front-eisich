import resMessages from '../../reducers/resMessages';
import {
    CLEAR_MSG,
    SUCCESS_REGISTER_MSG,
    SUCCESS_LOGIN_MSG,
    LOGIN_FIRST,
    LOGIN_FAIL,
    REGISTER_FAIL
} from '../../actions/types';

const defaultState = {
    msg: null,
    code: null,
    error: null
}

test('Should setup default resMessages values', () => {
    const state = resMessages(undefined, { type: '@@INIT' });

    expect(state).toStrictEqual({ ...defaultState });
});

test('Should set error to null, code to 200 and msg to Registered and Logged In successfully', () => {
    const msg = 'Registered and logged In successfully';
    const action = {
        type: SUCCESS_REGISTER_MSG,
        payload: {
            msg,
            code: 200,
            id: SUCCESS_REGISTER_MSG
        }
    }
    const state = resMessages(defaultState, action);

    expect(state.msg).toBe(msg);
    expect(state.code).toBe(200);
});

test('Should set error to null, code to 200 and msg to Logged In successfully', () => {
    const msg = 'Logged In successfully';
    const action = {
        type: SUCCESS_LOGIN_MSG,
        payload: {
            ...defaultState,
            code: 200,
            msg
        }
    }
    const state = resMessages(undefined, action);

    expect(state.msg).toBe(msg);
    expect(state.code).toBe(200);
});

test('Should set msg to null, code to 403 and error to please login first', () => {
    const msg = 'please login first';
    const action = {
        type: LOGIN_FIRST,
        payload: {
            ...defaultState,
            code: 403,
            msg
        }
    }
    const state = resMessages(undefined, action);

    expect(state.error).toBe(msg);
    expect(state.code).toBe(403);
});

test('Should set msg to null, code to 401 and error to please login first', () => {
    const msg = 'Wrong password or email';
    const action = {
        type: LOGIN_FAIL,
        payload: {
            ...defaultState,
            code: 401,
            msg
        }
    }
    const state = resMessages(undefined, action);

    expect(state.error).toBe(msg);
    expect(state.code).toBe(401);
});

test('Should set msg to null, code to 401 and error to Wrong password or email', () => {
    const msg = 'Email is already in use by another account';
    const action = {
        type: REGISTER_FAIL,
        payload: {
            ...defaultState,
            code: 401,
            msg
        }
    }
    const state = resMessages(undefined, action);

    expect(state.error).toBe(msg);
    expect(state.code).toBe(401);
});

test('Should set all keys to their default values', () => {
    const state = resMessages(undefined, { type: CLEAR_MSG });

    expect(state.msg).toBe(null);
    expect(state.error).toBe(null);
    expect(state.code).toBe(null);
});