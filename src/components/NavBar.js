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
import '../../public/images/arrow-down.svg';
import '../../public/images/wishlist.svg';
import '../../public/images/shopping-cart.svg';

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
                            <p>Login</p>
                            <img className="arrow-down" src="./arrow-down.svg" alt="arrow down" width="10px" height="10px" />
                        </li>
                    </ul>
                </div>
            </div>
            <nav className="navbar">
                <a className="navbar-brand" href="#">Eisich</a>
                <div className="navbar-list">
                    <ul className="navbar-list_wrapped">
                        <li className="view-products">
                            <h6 className="title-head products">Products</h6>
                            <div className="description-page">View Products</div>
                        </li>
                        <li className="visit-shops">
                            <h6 className="title-head">Shops</h6>
                            <div className="description-page">Visit Shops</div>
                        </li>
                    </ul>
                </div>

                <div className="shopping-options">
                    <form className="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Find product" aria-label="Search" />
                    </form>
                    <div className="shopping-icons">
                        <span className="img-icons">
                            <img src="./wishlist.svg" alt="question-mark" width="26px" height="26px"/>
                            <img src="./shopping-cart.svg" alt="question-mark" width="26px" height="26px"/>
                        </span>
                    </div>
                </div>
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
                </ul>
            </div>
        </nav>
    );
}
        
export default NavBar;