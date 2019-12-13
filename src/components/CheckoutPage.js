import React from 'react';
import { NavLink } from 'react-router-dom';

import dress from '../assets/images/dress.png';
import iphone from '../assets/images/iphone.png';


export default class CheckoutPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="checkout-container">
                <div className="py-4 checkout-container__header">
                    <div className="container">
                        <NavLink to="/" style={{ textDecoration: 'none' }}>
                            <h2 className="checkout-title-logo">E-Isich</h2>
                        </NavLink>
                    </div>
                </div>
                <div className="checkout-container__background">
                    <div className="container">

                        <div className="row">
                            <div className="col-md-4 order-md-2 mb-4">
                                <h4 className="d-flex justify-content-between align-items-center mb-3">
                                    <span className="text-muted">Your cart</span>
                                    <span className="badge badge-secondary badge-pill">2</span>
                                </h4>
                                <ul className="list-group mb-3">
                                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                                        <div className="col-sm-3 col-xs-6 cart-img">
                                            <img className="img-responsive cart-img-item" src={iphone} />
                                        </div>
                                        <div className="col-sm-6 col-xs-2">
                                            <div className="col-xs-12 small item-desc">S7 - 8GB - 1GB RAM (8MP+5 MP) Camera - Dual Sim - Black</div>
                                            <div className="col-xs-12 qty-val text-muted"><small className="font-weight-bold">Qty:<span>3</span></small></div>
                                        </div>
                                        <div className="col-sm-3 col-xs-6 text-right">
                                            <small className="font-weight-bold text-muted"><span>KSH </span>50,000</small>
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                                        <div className="col-sm-3 col-xs-6 cart-img">
                                            <img className="img-responsive cart-img-item" src={dress} />
                                        </div>
                                        <div className="col-sm-6 col-xs-2">
                                            <div className="col-xs-12 small item-desc">Summer Dress Boho Style Floral Print Chiffon</div>
                                            <div className="col-xs-12 qty-val text-muted"><small className="font-weight-bold">Qty:<span>1</span></small></div>
                                        </div>
                                        <div className="col-sm-3 col-xs-6 text-right">
                                            <small className="font-weight-bold text-muted"><span>KSH </span>5,000</small>
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                                        <div>
                                            <h5 className="">Subtotal</h5>
                                        </div>
                                        <span className="">KSH 155,000</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                                        <div>
                                            <h5 className="">VAT</h5>
                                        </div>
                                        <span className="">KSH 0</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between">
                                        <span>Total</span>
                                        <strong>KSH 155,000</strong>
                                    </li>
                                </ul>

                                <div className="cart-link">
                                    <NavLink
                                        to="/cart"
                                        className="back-to-cart font-weight-bold"
                                    >
                                        Back to Cart
                                </NavLink>
                                </div>
                            </div>
                            <div className="col-md-8 order-md-1">
                                <h4 className="mb-3 text-muted">Billing address</h4>
                                <form className="checkout-address-form">
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label className="checkout-label text-muted" htmlhtmlFor="checkout-label inputFirstName4">First Name *</label>
                                            <input type="text" className="form-control" id="inputEmail4" placeholder="First Name" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="checkout-label text-muted" htmlhtmlFor="checkout-label inputLastName4">Last Name *</label>
                                            <input type="text" className="form-control" id="inputLastName4" placeholder="Last Name" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="checkout-label text-muted" htmlhtmlFor="checkout-label inputFirstName4">Phone Number *</label>
                                        <input type="number" className="form-control" id="inputEmail4" placeholder="Phone Number" />
                                    </div>
                                    <div className="form-group">
                                        <label className="checkout-label text-muted" htmlhtmlFor="checkout-label exampleFormControlTextarea1">Delivery Address *</label>
                                        <textarea
                                            className="form-control"
                                            id="exampleFormControlTextarea1"
                                            placeholder="Street Name / Building / Apartment No. / Floor"
                                            rows="3"
                                        ></textarea>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-6 select-county">
                                            <label className="checkout-label col-md-10 text-muted" htmlFor="inlineFormCustomSelect">County/Region *</label>
                                            <select className="col-md-10" id="inlineFormCustomSelect">
                                                <option selected>Nairobi</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 select-city">
                                            <label className="checkout-label col-md-10 text-muted" htmlFor="inlineFormCustomSelect">City *</label>
                                            <select className="col-md-10" id="inlineFormCustomSelect">
                                                <option selected>Nairobi</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                    <h4 className="mb-3 text-muted checkout-title-txt">Payment Options</h4>
                                    <div className="payment-options">
                                        <div className="payment-options__background">
                                            <div className="form-check-item">
                                                <input class="form-check-input-radio payment-radio" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                                <div className="payment-option-det">
                                                    <label class="form-check-label-radio" for="exampleRadios1">Jenga: Airtel Money, Mpesa, Cards</label>
                                                    <p>This is a PREPAID order. Detailed payment instructions will be provided at the next step.</p>
                                                    <ol>
                                                        <li>Your Money is SAFE! We will refund you within 48 hours if your delivery fails or the product is faulty. For more details check our Return Policy</li>

                                                        <li>Please check beforehand if you have money on your Credit/Debit card or Mpesa/EazzyPay</li>

                                                        <li>If you do not complete the check-out step on the next screen, your order will not go through</li>
                                                    </ol>
                                                </div>
                                            </div>
                                            <div className="form-check-item">
                                                <input class="form-check-input-radio payment-radio" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                                <div className="payment-option-det">
                                                    <label class="form-check-label-radio" for="exampleRadios2">Cash On Delivery</label>
                                                    <p>If you select Cash On Delivery, you can pay for your package when our Delivery Associates bring it to your door step or when you pick it up at one of our Pickup Stations.</p><br />
                                                    <p><strong>IMPORTANT: </strong>Please carry the exact amount in Kenyan Shillings as our Delivery Associates and Pickup Station staff do not carry petty cash.</p>
                                                    <p>We encourage you to Pay Online - it saves you time & money</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-warning btn-lg btn-block checkout-btn" type="submit">Continue to checkout</button>
                                </form>
                            </div>
                        </div>
                        <footer className="my-5 pt-5 text-muted text-center text-small">
                            <p className="mb-1">&copy; 2017-2018 Company Name</p>
                            <ul className="list-inline">
                                <li className="list-inline-item"><a href="#">Privacy</a></li>
                                <li className="list-inline-item"><a href="#">Terms</a></li>
                                <li className="list-inline-item"><a href="#">Support</a></li>
                            </ul>
                        </footer>
                    </div>
                </div>
            </div>

        );
    }
}