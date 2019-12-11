/**
 * Response messages Action
 */

import { GET_MSG, CLEAR_MSG } from './types';


// Return message
export const returnMessages = (msg) => ({
    type: GET_MSG,
    msg
});

// Clear message
export const clearMessages = () => ({
    type: CLEAR_MSG
});