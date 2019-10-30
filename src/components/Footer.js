/**
 * This file contains Footer component 
 * for the Footer section of the page
 */
import React from 'react';

import '../../public/images/visa.svg';
import '../../public/images/mastercard.svg';
import '../../public/images/paypal.svg';
import '../../public/images/secure.svg';
import '../../public/images/facebook.svg';
import '../../public/images/twitter.svg';
import '../../public/images/pinterest.svg';
import '../../public/images/instagram.svg';
import '../../public/images/email.svg';
import '../../public/images/telephone.svg';

const Footer = () => {
    return (
        <div className="app-footer">
            <div className="footer">
                <div className="footer-subscribe-sec">
                    <div className="footer-subscribe">
                        <div className="footer-payments">
                            <span className="footer-payment-heading">
                                <img className="payment-lock" src="secure.svg" />
                                <b>All Secure payment Methods</b>
                            </span>
                            <div className="footer-payment-icons">
                                <img className="payment-method-icon" src="visa.svg" />
                                <img className="payment-method-icon" src="mastercard.svg" />
                                <img className="payment-method-icon" src="paypal.svg" />
                            </div>                          <div className="contact-us">
                                <span className="contact-span"><img src="email.svg" /><p>Email us at: webdev@hestechinnovators.com</p></span>
                                <span className="contact-span"><img src="telephone.svg" /><p>Call us at: 0717459546</p></span>
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
                            <img className="social-media" src="facebook.svg" />
                            <img className="social-media" src="twitter.svg" />
                            <img className="social-media" src="instagram.svg" />
                            <img className="social-media" src="pinterest.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;