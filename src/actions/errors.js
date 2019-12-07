/**
 * Errors Action
 */

import { GET_ERRORS, CLEAR_ERRORS } from './types';


// Return errors
export const returnErrors = (errorMsg, status, errorId = null) => ({
    type: GET_ERRORS,
    payload: { errorMsg, status, errorId }
});

// Clear errors
export const clearErrors = () => ({
    type: CLEAR_ERRORS
});