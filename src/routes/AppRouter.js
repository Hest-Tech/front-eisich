/**
* This file contains the routing setup for the site
*/


import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import HomePage from '../pages/HomePage';
import AccountPage from '../pages/AccountPage';
import AccountOrders from '../components/account/AccountOrders';
import AccountCoupons from '../components/account/AccountCoupons';
import AccountPendingReviews from '../components/account/AccountPendingReviews';
import ChangePassword from '../components/account/ChangePassword';
import AddressBook from '../components/account/AddressBook';
import UpdateAccount from '../components/account/UpdateAccount';
import AccountWishlist from '../components/account/AccountWishlist';
import HelpPage from '../pages/HelpPage';
import NotFoundPage from '../pages/NotFoundPage';
import CheckoutPage from '../pages/CheckoutPage';
import ProductsPage from '../pages/ProductsPage';
import AboutPage from '../pages/AboutPage';
import Footer from '../components/Footer';
import CartPage from '../pages/CartPage';
import ProductItemPage from '../pages/ProductItemPage';
import ErrorBoundary from '../components/ErrorBoundary';
import PrivateRoute from './PrivateRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div className="App">
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <PrivateRoute path="/customer/account" component={AccountPage} />
                <PrivateRoute path="/customer/orders" component={AccountOrders} />
                <PrivateRoute path="/customer/wishlist" component={AccountWishlist} />
                <PrivateRoute path="/customer/pending-reviews" component={AccountPendingReviews} />
                <PrivateRoute path="/customer/coupons" component={AccountCoupons} />
                <PrivateRoute path="/customer/change-password" component={ChangePassword} />
                <PrivateRoute path="/customer/address" component={AddressBook} />
                <PrivateRoute path="/customer/profile/edit" component={UpdateAccount} />
                <Route path="/product/:path" component={ProductItemPage} />
                <Route path="/products/:category" component={ProductsPage} />
                <Route path="/cart" component={CartPage} />
                <PrivateRoute path="/checkout" component={CheckoutPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
            <ErrorBoundary>
                <Footer />
            </ErrorBoundary>
        </div>
    </Router>
);

export default AppRouter;
