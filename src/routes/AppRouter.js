/**
* This file contains the routing setup for the site
*/


import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../components/home/HomePage';
import OrdersPage from '../components/account/OrdersPage';
import ProfilePage from '../components/account/ProfilePage';
import WishlistPage from '../components/account/WishlistPage';
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
                <Route path="/account" component={ProfilePage} />
                <Route path="/orders" component={OrdersPage} />
                <Route path="/wishlist" component={WishlistPage} />
                <Route path="/products" component={ProductsPage} />
                <Route path="/cart" component={CartPage} />
                <Route path="/checkout" component={CheckoutPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/product" component={ProductItemPage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
);

export default AppRouter;