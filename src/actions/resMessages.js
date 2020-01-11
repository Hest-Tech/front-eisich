/**
 * Response messages Action
 */

import {
	CLEAR_MSG,
	LOGIN_FIRST,
	LOGIN_FAIL,
	SUCCESS_LOGIN_MSG,
	SUCCESS_REGISTER_MSG,
	REGISTER_FAIL
} from './types';


// Return message
export const returnMessages = (msg, code=undefined, id) => dispatch => {

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
		case SUCCESS_LOGIN_MSG:
			dispatch({
			    type: SUCCESS_LOGIN_MSG,
			    payload
			});
			break;
		case SUCCESS_REGISTER_MSG:
			dispatch({
			    type: SUCCESS_REGISTER_MSG,
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