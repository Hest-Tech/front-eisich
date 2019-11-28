/**
 * Store creation
 */

import { createStore, combineReducers } from 'redux';
import authentication from '../reducers/authentication';
import products from '../reducers/products';
import errors from '../reducers/errors';
import filters from '../reducers/filters';

// store creation

export default () => {
    const store = createStore(
        combineReducers({
            authentication,
            products,
            filters,
            errors
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};
