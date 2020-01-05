/**
 * Response messages Action
 */

import {
	GET_MSG,
	CLEAR_MSG,
	LOGIN_FIRST,
	LOGIN_FAIL,
	SUCCESS_LOGIN,
	SUCCESS_REGISTER,
	REGISTER_FAIL
} from './types';


// Return message
export const returnMessages = (msg, code, id) => dispatch => {

	const payloadObj = { payload: { msg, code, id } }
	const payload = payloadObj.payload;

	switch(id) {
		case LOGIN_FIRST:
			dispatch({
			    type: LOGIN_FIRST,
			    payload
			});
			break;
		case REGISTER_FAIL:
			dispatch({
			    type: REGISTER_FAIL,
			    payload
			});
			break;
		case LOGIN_FAIL:
			dispatch({
			    type: LOGIN_FAIL,
			    payload
			});
			break;
		case GET_MSG:
			dispatch({
			    type: GET_MSG,
			    payload
			});
			break;
		case SUCCESS_LOGIN:
			dispatch({
			    type: SUCCESS_LOGIN,
			    payload
			});
			break;
		case SUCCESS_REGISTER:
			dispatch({
			    type: SUCCESS_REGISTER,
			    payload
			});
			break;
	}

    return setTimeout(() => {
        dispatch(clearMessages())
    }, 3000);
};

// Clear message
export const clearMessages = () => ({
    type: CLEAR_MSG
});