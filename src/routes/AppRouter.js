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
import UpdateAddressBook from '../components/account/UpdateAddressBook';
import AccountWishlist from '../components/account/AccountWishlist';
import HelpPage from '../pages/HelpPage';
import NotFoundPage from '../pages/NotFoundPage';
import CheckoutPage from '../pages/CheckoutPage';
import ProductsPage from '../pages/ProductsPage';
import AboutPage from '../pages/AboutPage';
import Footer from '../components/Footer';
import CartPage from '../pages/CartPage';
import CategoryPage from '../pages/mobile/CategoryPage';
import LoginPage from '../pages/mobile/LoginPage';
import RegisterPage from '../pages/mobile/RegisterPage';
import ProfilePage from '../pages/mobile/ProfilePage';
import ProductItemPage from '../pages/ProductItemPage';
import ErrorBoundary from '../components/ErrorBoundary';
import PrivateRoute from './PrivateRoute';
import MobileRoutes from './MobileRoutes';
import MobileNav from '../components/home/MobileNav';

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
                <PrivateRoute path="/customer/address-book/edit" component={UpdateAddressBook} />
                <Route path="/checkout" component={CheckoutPage} />
                <Route path="/cart" component={CartPage} />
                <MobileRoutes path="/user/profile" component={ProfilePage} />     /*mobile only*/
                <MobileRoutes path="/category" component={CategoryPage} />     /*mobile only*/
                <MobileRoutes path="/user/mobile/login" component={LoginPage} />     /*mobile only*/
                <MobileRoutes path="/user/mobile/register" component={RegisterPage} />     /*mobile only*/
                <Route path="/about" component={AboutPage} />
                <Route path="/product/:path" component={ProductItemPage} />
                <Route path="/products/:category" component={ProductsPage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
            <ErrorBoundary>
                <Footer />
            </ErrorBoundary>
            <MobileNav />
        </div>
    </Router>
);

export default AppRouter;
