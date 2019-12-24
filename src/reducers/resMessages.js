/**
 * Error Reducer
 */

import { GET_MSG, CLEAR_MSG } from '../actions/types';


const msgReducerDefaultState = {
    msg: null,
    code: null
}

export default (state = msgReducerDefaultState, action) => {
    switch (action.type) {
        case GET_MSG:
            return {
                msg: action.payload.msg,
                code: action.payload.code
            };
        case CLEAR_MSG:
            return {
                msg: null,
                code: null
            };
        default:
            return state;
    }
}