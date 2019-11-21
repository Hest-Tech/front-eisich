/**
 * This file contains Footer component 
 * for the Footer section of the page
 */
import React from 'react';

import '../images/visa.svg';
import '../images/mastercard.svg';
import '../images/paypal.svg';
import '../images/secure.svg';
import '../images/facebook.svg';
import '../images/twitter.svg';
import '../images/pinterest.svg';
import '../images/instagram.svg';
import '../images/email.svg';
import '../images/telephone.svg';

const Footer = () => {
    return (
        <div className="app-footer">
            <div className="footer">
                <div className="footer-subscribe-sec">
                    <div className="footer-subscribe">
                        <div className="footer-payments">
                            <span className="footer-payment-heading">
                                <img className="payment-lock" src="secure.svg" alt="secure" />
                                <b>All Secure payment Methods</b>
                            </span>
                            <div className="footer-payment-icons">
                                <img className="payment-method-icon" src="visa.svg" alt="visa" />
                                <img className="payment-method-icon" src="mastercard.svg" alt="mastercard" />
                                <img className="payment-method-icon" src="paypal.svg" alt="paypal" />
                            </div>
                            <div className="contact-us">
                                <span className="contact-span"><img src="email.svg" alt="email" /><p>Email us at: webdev@hestechinnovators.com</p></span>
                                <span className="contact-span"><img src="telephone.svg" alt="telephone" /><p>Call us at: 0717459546</p></span>
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
                            <img className="social-media" src="facebook.svg" alt="facebook" />
                            <img className="social-media" src="twitter.svg" alt="twitter" />
                            <img className="social-media" src="instagram.svg" alt="instagram" />
                            <img className="social-media" src="pinterest.svg" alt="pinterest" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;