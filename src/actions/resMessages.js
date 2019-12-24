/**
 * Response messages Action
 */

import { GET_MSG, CLEAR_MSG } from './types';


// Return message
export const returnMessages = (msg, code, id = null) => {
    return {
        type: GET_MSG,
        payload: { msg, code, id }
    };
};

// Clear message
export const clearMessages = () => ({
    type: CLEAR_MSG
});