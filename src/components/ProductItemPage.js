/**
 * This file contains the Product Item Page component
 */


import React from 'react';
import { NavLink } from 'react-router-dom';

import dress from '../assets/images/women-dress-removebg.png';
import NavBar from './NavBar';

export default class ProductItemPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <div className="App">
                <NavBar />
                <div className="product-item">
                    <nav className="product-nav-breadcrumb">
                        <span class="nav-breadcrumb__span">
                            <NavLink className="breadcrumb-text" to="/">Home</NavLink>
                            <i class="fas fa-angle-right mx-2" aria-hidden="true"></i>
                            <NavLink className="breadcrumb-text" to="/products">Women's Fashion</NavLink>
                            <i class="fas fa-angle-right mx-2" aria-hidden="true"></i>
                            <NavLink className="breadcrumb-text" to="/">Clothing</NavLink>
                            <i class="fas fa-angle-right mx-2" aria-hidden="true"></i>
                            <p class="breadcrumb-item active">Dress</p>
                        </span>
                    </nav>
                    <div className="product-item-container">
                        <div className="product-item__img"></div>
                        <div className="product-item__details"></div>
                    </div>
                    <div className="product-specifications"></div>
                </div>
            </div>
        );
    }
}