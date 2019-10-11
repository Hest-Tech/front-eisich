/**
 * This file contains Navbar component for the navigation bar
 */

import React from 'react';

import '../../public/images/call.svg';
import '../../public/images/policy.svg';
import '../../public/images/save-money.svg';
import '../../public/images/suitcase.svg';
import '../../public/images/question-mark.svg';
import '../../public/images/user.svg';

const NavBar = () => {
    return (
        <nav className="main-nav-bar">
            <div className="main-nav-bar-container">
                <div className="nav-bar-container">
                    <ul className="trust-policy">
                        <li className="separate contact">
                            <img src="./call.svg" alt="cellphone" width="16px" height="16px"/>
                            <span> Call us +254 707 030 398</span>
                        </li>
                        <li className="separate return">
                            <img src="./policy.svg" alt="policy" width="16px" height="16px"/>
                            <span> 30 day return policy</span>
                        </li>
                        <li className="bulk">
                            <img src="./save-money.svg" alt="save money" width="16px" height="16px"/>
                            <span> Buy in bulk - save up to 70%</span>
                        </li>
                    </ul>
                    <div className="start-selling">
                        <button>Start selling</button>
                    </div>
                    <ul className="help-login">
                        <li className="jobs">
                            <img src="./suitcase.svg" alt="suitcase" width="16px" height="16px"/>
                            Jobs
                        </li>
                        <li className="help">
                            <img src="./question-mark.svg" alt="question-mark" width="16px" height="16px"/>
                            Help
                        </li>
                        <li className="login">
                            <img src="./user.svg" alt="user" width="16px" height="16px"/>
                            Login
                        </li>
                    </ul>
                </div>
            </div>
            <nav className="navbar">
                <a className="navbar-brand" href="#">Eisich</a>
                <ul className="navbar-list">
                    <li>
                        <div className="title">Create</div>
                        <div className="description">Custom products</div>
                    </li>
                    <li>
                        <div className="title">Shop</div>
                        <div className="description">Marketplace Designs</div>
                    </li>
                </ul>
                <input />
                <button>Wishlist</button>
                <button>Cart</button>
            </nav>
            <div className="nav-links-container">
                <ul className="nav-links">
                    <li>Best Sellers</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids & Babies</li>
                    <li>Accessories</li>
                    <li>Posters</li>
                    <li>Home & Living</li>
                    <li>Gifts</li>
                    <li>Collections</li>
                    <li><button>Sale</button></li>
                </ul>
            </div>
        </nav>
    );
}
        
export default NavBar;