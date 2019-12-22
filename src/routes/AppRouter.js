/**
* This file contains the routing setup for the site
*/


import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../components/home/HomePage';
import AccountPage from '../components/account/AccountPage';
import AccountOrders from '../components/account/AccountOrders';
import AccountCoupons from '../components/account/AccountCoupons';
import AccountPendingReviews from '../components/account/AccountPendingReviews';
import ChangePassword from '../components/account/ChangePassword';
import AddressBook from '../components/account/AddressBook';
import UpdateAccount from '../components/account/UpdateAccount';
import AccountWishlist from '../components/account/AccountWishlist';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import CheckoutPage from '../components/CheckoutPage';
import ProductsPage from '../components/ProductsPage';
import AboutPage from '../components/AboutPage';
import Footer from '../components/Footer';
import CartPage from '../components/CartPage';
import ProductItemPage from '../components/ProductItemPage';
import ErrorBoundary from '../components/ErrorBoundary';


const AppRouter = () => (
    <BrowserRouter>
        <div className="App">
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/customer/account" component={AccountPage} />
                <Route path="/customer/orders" component={AccountOrders} />
                <Route path="/customer/wishlist" component={AccountWishlist} />
                <Route path="/customer/pending-reviews" component={AccountPendingReviews} />
                <Route path="/customer/coupons" component={AccountCoupons} />
                <Route path="/customer/change-password" component={ChangePassword} />
                <Route path="/customer/address" component={AddressBook} />
                <Route path="/customer/profile/edit" component={UpdateAccount} />
                <Route path="/products" component={ProductsPage} />
                <Route path="/cart" component={CartPage} />
                <Route path="/checkout" component={CheckoutPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/product" component={ProductItemPage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
            <ErrorBoundary>
                <Footer />
            </ErrorBoundary>
        </div>
    </BrowserRouter>
);

export default AppRouter;