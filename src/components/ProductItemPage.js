/**
 * This file contains the Product Item Page component
 */


import React from 'react';
import { NavLink } from 'react-router-dom';
import Modal from 'react-modal';

import dress from '../assets/images/dress.png';
import NavBar from './NavBar';
import SizeChart from './SizeChart';
import CheckoutPage from './CheckoutPage';


export default class ProductItemPage extends React.Component {

    constructor(props) {
        super(props);
        this.toggleChartPopUp = this.toggleChartPopUp.bind(this);

        this.state = {
            chartPopUp: false
        };
    }

    toggleChartPopUp() {
        this.setState(this.toggleChartPopupState)
        console.log(this.state.chartPopUp)
    }

    toggleChartPopupState(state) {
        return {
            chartPopUp: !state.chartPopUp
        }
    }

    render() {
        return (
            <div className="App">
                <NavBar />
                <div className="product-item">
                    <nav className="product-nav-breadcrumb">
                        <span className="nav-breadcrumb__span">
                            <NavLink className="breadcrumb-text" to="/">Home</NavLink>
                            <i className="fas fa-angle-right mx-2" aria-hidden="true"></i>
                            <NavLink className="breadcrumb-text" to="/products">Women's Fashion</NavLink>
                            <i className="fas fa-angle-right mx-2" aria-hidden="true"></i>
                            <NavLink className="breadcrumb-text" to="/">Clothing</NavLink>
                            <i className="fas fa-angle-right mx-2" aria-hidden="true"></i>
                            <p className="breadcrumb-item active">Dress</p>
                        </span>
                    </nav>
                    <div className="product-item-container">
                        <div className="product-item__img">
                            <div className="main-img-background">
                                <img src={dress} alt="main product image" className="main-product-img" />
                            </div>
                            <span className="product-img-color">
                                <div className="color-variant">
                                    <div className="color-variant-background red">
                                        <img src={dress} alt="product color variation" className="img-color-variant" />
                                    </div>
                                </div>
                                <div className="color-variant">
                                    <div className="color-variant-background orange">
                                        <img src={dress} alt="product color variation" className="img-color-variant" />
                                    </div>
                                </div>
                                <div className="color-variant">
                                    <div className="color-variant-background baige">
                                        <img src={dress} alt="product color variation" className="img-color-variant" />
                                    </div>
                                </div>
                                <div className="color-variant">
                                    <div className="color-variant-background blue">
                                        <img src={dress} alt="product color variation" className="img-color-variant" />
                                    </div>
                                </div>
                            </span>
                        </div>
                        <div className="product-item__details">
                            <div className="details-background">
                                <h3 className="product-title-description">Generic Women dress mi in nulla posuere sollicitudin aliquam ultrices</h3>
                                <div className="new-price-promo">
                                    <h3>KSH2,000</h3>
                                    <span className="old-price-range">
                                        <p className="old-price text-muted"><strike>KSH2,500</strike></p>
                                        <mark>-25%</mark>
                                    </span>
                                </div>
                                {this.state.chartPopUp && <SizeChart
                                    isOpen={this.state.chartPopUp}
                                    toggleChartPopUp={this.toggleChartPopUp}
                                />}
                                <div className="specification-variation">
                                    <span className="size-check">
                                        <p>SELECT SIZE:</p>
                                        <a
                                            className="breadcrumb-text"
                                            href="#"
                                            onClick={this.toggleChartPopUp}
                                        >
                                            Size Guide
                                        </a>
                                    </span>
                                    <div className="size-range">
                                        <div className="size_ small">S</div>
                                        <div className="size_ small">M</div>
                                        <div className="size_ small">L</div>
                                        <div className="size_ small">XL</div>
                                        <div className="size_ small">XXL</div>
                                    </div>
                                    <span className="size-check">
                                        <p>SELECT COLOR:</p>
                                    </span>
                                    <span className="product-img-color-selector">
                                        <div className="color-variant-selector">
                                            <div className="color-variant-background red">
                                                <img src={dress} alt="product color variation" className="img-color-variant" />
                                            </div>
                                        </div>
                                        <div className="color-variant-selector">
                                            <div className="color-variant-background orange">
                                                <img src={dress} alt="product color variation" className="img-color-variant" />
                                            </div>
                                        </div>
                                        <div className="color-variant-selector">
                                            <div className="color-variant-background baige">
                                                <img src={dress} alt="product color variation" className="img-color-variant" />
                                            </div>
                                        </div>
                                        <div className="color-variant-selector">
                                            <div className="color-variant-background blue">
                                                <img src={dress} alt="product color variation" className="img-color-variant" />
                                            </div>
                                        </div>
                                    </span>
                                    <span className="size-check">
                                        <p>NO. OF PIECES:</p>
                                    </span>
                                    <div className="size-range qty">
                                        <button className="btn btn-sm"><i className="fas fa-minus"></i></button>
                                        <p className="text-qty">1</p>
                                        <button className="btn btn-sm"><i className="fas fa-plus"></i></button>
                                        <p className="text-muted small item-pieces">2000 pieces available</p>
                                    </div>
                                    <div className="action-btn">
                                        <NavLink
                                            className="buy-now"
                                            to="/checkout"
                                        >
                                            <button className="btn btn-lg btn-danger">Buy Now</button>
                                        </NavLink>
                                        <NavLink
                                            className="add-to-cart"
                                            to="/cart"
                                        >
                                            <button className="btn btn-lg btn-warning">Add to Cart</button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-specifications">
                        <div className="specification-links">
                            <div className="btn-warning">Product Details</div>
                            <div className="basic">Reviews</div>
                        </div>
                        <div className="product-specifications__background">
                            2019nbspWomen Summer Dress Boho Style Floral Print Chiffon Beach Dress Tunic Sundress Loose Mini Party Dress Vestidos Plus Size 5XL

                            <p>Items: Summer chiffon dress</p>
                            <p>Size: S M L XL XXL XXXL 4XL 5XL</p>
                            <p>Sleeve: Bow 3/4 sleeve</p>
                            <p>Collar: O-neck</p>
                            <p>Season: Summer dress</p>
                            <p>Pattern:Floral print</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}