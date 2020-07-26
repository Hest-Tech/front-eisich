import { combineReducers } from 'redux';

import authentication from '../reducers/authentication';
import products from '../reducers/products';
import resMessages from '../reducers/resMessages';
import filters from '../reducers/filters';
import cart from '../reducers/cart';
import orders from '../reducers/orders';
import wishlist from '../reducers/wishlist';

export default combineReducers({
    authentication,
    products,
    filters,
    resMessages,
    cart,
    orders,
    wishlist
})