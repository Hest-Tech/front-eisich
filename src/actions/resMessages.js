/**
 * Response messages Action
 */

import {
	CLEAR_MSG,
	LOGIN_FIRST,
	LOGIN_FAIL,
	SUCCESS_LOGIN_MSG,
	SUCCESS_REGISTER_MSG,
	SUCCESS_RESET_PASS_MSG,
	REGISTER_FAIL,
	WRONG_INPUT,
	SUCCESS_UPDATE_MSG
} from './types';


// Return message
export const returnMessages = (msg, code = undefined, id) => dispatch => {

	const payloadObj = { payload: { msg, code, id } }
	const payload = payloadObj.payload;

	switch (id) {
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
		case SUCCESS_RESET_PASS_MSG:
			dispatch({
				type: SUCCESS_RESET_PASS_MSG,
				payload
			});
			break;
		case WRONG_INPUT:
			dispatch({
				type: SUCCESS_RESET_PASS_MSG,
				payload
			});
			break;
		case SUCCESS_UPDATE_MSG:
			dispatch({
				type: SUCCESS_UPDATE_MSG,
				payload
			});
	}

	return setTimeout(() => {
		dispatch(clearMessages())
	}, 3000);
};

// Clear message
export const clearMessages = () => ({
	type: CLEAR_MSG
});