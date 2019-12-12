/**
* This file contains the routing setup for the site
*/


import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../components/home/HomePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import CheckoutPage from '../components/CheckoutPage';
import ProductsPage from '../components/ProductsPage';
import AboutPage from '../components/AboutPage';
import Footer from '../components/Footer';
import ProductItemPage from '../components/ProductItemPage';

const AppRouter = () => (
    <BrowserRouter>
        <div className="App">
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/products" component={ProductsPage} />
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