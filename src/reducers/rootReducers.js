import { combineReducers } from 'redux';

import authentication from '../reducers/authentication';
import products from '../reducers/products';
import resMessages from '../reducers/resMessages';
import filters from '../reducers/filters';
import filters from '../reducers/cart';
import filters from '../reducers/wishlist';

export default combineReducers({
    authentication,
    products,
    filters,
    resMessages,
    cart,
    wishlist
})