import { combineReducers } from 'redux';

import authentication from '../reducers/authentication';
import products from '../reducers/products';
import errors from '../reducers/errors';
import filters from '../reducers/filters';

export default combineReducers({
    authentication,
    products,
    filters,
    errors
})