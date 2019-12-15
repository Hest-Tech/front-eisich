import React from 'react';

import NavBar from './NavBar';
import dress from '../assets/images/dress.png';
import iphone from '../assets/images/iphone.png';
import { NavLink } from 'react-router-dom';

export default class CartPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className="jumbotron">
                    <div className="container cart-page-container">
                        <div className="cart-item-background">
                            <h3>Cart (2 Items)</h3>
                            <div className="cart-item-contents">
                                <div className="cart-header">
                                    <b className="text-muted item">ITEM</b>
                                    <b className="text-muted cart-title quantity">QUANTITY</b>
                                    <b className="text-muted cart-title price">UNIT PRICE</b>
                                    <b className="text-muted cart-title total">SUBTOTAL</b>
                                </div>
                                <div className="cart-item">
                                    <div className="cart-details">
                                        <div className="cart-img-item">
                                            <img src={iphone} alt="cart dress" className="cart-image" />
                                        </div>
                                        <div className="cart-item-details">
                                            <small className="text-muted"> Seller: John Doe</small>
                                            <p className="cart-text"><small>S7 - 8GB - 1GB RAM (8MP+5 MP) Camera - Dual Sim - Black</small></p>
                                            <div className="cart-action-btn">
                                                <small className="cart-action add-to-wishlist"><i className="far fa-heart"></i>MOVE TO WISHLIST</small>
                                                <small className="cart-action remove-from-cart"><i className="fas fa-trash-alt"></i>REMOVE</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart-item-qty qty-border">
                                        <select>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                        </select>
                                    </div>
                                    <div className="cart-unit-price price-border">
                                        <p className="cart-new-price">Ksh 20,000</p>
                                        <p className="cart-old-price text-muted"><strike>Ksh 22,000</strike></p>
                                        <small className="text-success">Saving: Ksh 2,000</small>
                                    </div>
                                    <div className="cart-subtotal">
                                        <b>Ksh 20,000</b>
                                    </div>
                                </div>
                                <div className="cart-item">
                                    <div className="cart-details">
                                        <div className="cart-img-item">
                                            <img src={dress} alt="cart Iphone" className="cart-image" />
                                        </div>
                                        <div className="cart-item-details">
                                            <small className="text-muted">Seller: Jane Doe</small>
                                            <p className="cart-text"><small>Summer Dress Boho Style Floral Print Chiffon</small></p>
                                            <div className="cart-action-btn">
                                                <small className="cart-action add-to-wishlist"><i className="far fa-heart"></i>MOVE TO WISHLIST</small>
                                                <small className="cart-action remove-from-cart"><i className="fas fa-trash-alt"></i>REMOVE</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart-item-qty qty-border">
                                        <select>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                        </select>
                                    </div>
                                    <div className="cart-unit-price price-border">
                                        <p className="cart-new-price">Ksh 2,000</p>
                                        <p className="cart-old-price text-muted"><strike>Ksh 2,400</strike></p>
                                        <small className="text-success">Saving: Ksh 400</small>
                                    </div>
                                    <div className="cart-subtotal">
                                        <b>Ksh 2,000</b>
                                    </div>
                                </div>
                                <div className="cart-cumulative">
                                    <div className="cart-total-info cart-subtotal-vat">
                                        <div className="subtotal-background">
                                            <span className="subtotal font-weight-bold">Subtotal:</span>
                                            <span>KSH 22,000</span>
                                        </div>
                                        <div className="subtotal-background">
                                            <span className="text-muted font-weight-bold vat">VAT:</span>
                                            <span>KSH 0</span>
                                        </div>
                                    </div>
                                    <div className="cart-total-info cart-total-shipping">
                                        <div className="subtotal-background">
                                            <span className="subtotal font-weight-bold">Total:</span>
                                            <span className="subtotal-value">KSH 22,000</span>
                                        </div>
                                        <span className="text-muted cart-shipping-info">Shipping fees not included yet</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-checkout-action">
                        <div className="cart-checkout-action__background container">
                            <NavLink
                                to="/"
                            >
                                <button type="button" className="btn btn-lg action-btn-cart continue-shopping">CONTINUE SHOPPING</button>
                            </NavLink>
                            <NavLink
                                to="/checkout"
                                className="checkout-link"
                            >
                                <button type="button" className="btn btn-warning btn-lg action-btn-cart">PROCEED TO CHECKOUT</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}