/**
 * Response messages Action
 */

import {
	GET_MSG,
	CLEAR_MSG,
	LOGIN_FIRST,
	LOGIN_FAIL,
	SUCCESS_LOGIN
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
			})
		case SUCCESS_LOGIN:
			dispatch({
			    type: SUCCESS_LOGIN,
			    payload
			});
	}

    return setTimeout(() => {
        dispatch(clearMessages())
    }, 5000);
};

// Clear message
export const clearMessages = () => ({
    type: CLEAR_MSG
});