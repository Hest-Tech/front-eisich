/**
 * This file contains the Footer component
 */

import React from 'react';

import visa from '../assets/images/visa.svg';
import mastercard from '../assets/images/mastercard.svg';
import paypal from '../assets/images/paypal.svg';
import secure from '../assets/images/secure.svg';
import facebook from '../assets/images/facebook.svg';
import twitter from '../assets/images/twitter.svg';
import pinterest from '../assets/images/pinterest.svg';
import instagram from '../assets/images/instagram.svg';
import email from '../assets/images/email.svg';
import telephone from '../assets/images/telephone.svg';

const Footer = () => {
    return (
        <footer className="app-footer bg-dark text-light font-weight-normal">
            <div className="footer">
                <div className="footer-subscribe-sec">
                    <div className="footer-subscribe">
                        <div className="footer-payments">
                            <span className="footer-payment-heading">
                                <img className="payment-lock" src={secure} alt="secure" />
                                <b>All Secure payment Methods</b>
                            </span>
                            <div className="footer-payment-icons">
                                <img className="payment-method-icon" src={visa} alt="visa" />
                                <img className="payment-method-icon" src={mastercard} alt="mastercard" />
                                <img className="payment-method-icon" src={paypal} alt="paypal" />
                            </div>
                            <div className="contact-us">
                                <span className="contact-span"><img src={email} alt="email" /><p>Email us at: webdev@hestechinnovators.com</p></span>
                                <span className="contact-span"><img src={telephone} alt="telephone" /><p>Call us at: 0717459546</p></span>
                            </div>
                        </div>
                    </div>
                    <div className="footer-form">
                        <p>Subscribe for our Newsletter:</p>
                        <div className="footer-input-group input-group">
                            <input type="email" className="form-control" placeholder="Enter your email" />
                            <span className="input-group-btn">
                                <button className="btn btn-theme" type="submit">Subscribe</button>
                            </span>
                        </div>
                        <div className="subscribe-social-media">
                            <p>Check our social media:</p>
                            <img className="social-media" src={facebook} alt="facebook" />
                            <img className="social-media" src={twitter} alt="twitter" />
                            <img className="social-media" src={instagram} alt="instagram" />
                            <img className="social-media" src={pinterest} alt="pinterest" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;