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
import '../../public/images/menu.svg';
import '../../public/images/shopping-cart.svg';

const NavBar = () => {
    return (
        <nav className="main-nav-bar">
            <div className="main-nav-bar__container">
                <div className="nav-bar-container">
                    <ul className="trust-policy">
                        <li className="separate contact">
                            <img src="./call.svg" alt="cellphone" className="navbar__icon-img" />
                            <span> Call us +254 707 030 398</span>
                        </li>
                        <li className="separate return">
                            <img src="./policy.svg" alt="policy" className="navbar__icon-img" />
                            <span> 30 day return policy</span>
                        </li>
                        <li className="bulk">
                            <img src="./save-money.svg" alt="save money" className="navbar__icon-img" />
                            <span> Buy in bulk - save up to 70%</span>
                        </li>
                    </ul>
                    <div className="start-selling">
                        <button>Start selling</button>
                    </div>
                    <ul className="help-login">
                        <li className="jobs">
                            <img src="./suitcase.svg" alt="suitcase" className="navbar__icon-img" />
                            Jobs
                        </li>
                        <li className="help">
                            <img src="./question-mark.svg" alt="question-mark" className="navbar__icon-img" />
                            Help
                        </li>
                        <li className="login">
                            <img src="./user.svg" alt="user" className="navbar__icon-img" />
                            <p>Login</p>
                            <img className="arrow-down" src="./arrow-down.svg" alt="arrow down" width="10px" height="10px" />
                        </li>
                    </ul>
                </div>
            </div>
            <nav className="navbar">
                <img className="mobile mobile-menu-bar" src="menu.svg" />
                <a className="display-1" href="/">E-Isich</a>
                <div className="navbar-list">
                    <ul className="navbar-list__wrapped">
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
                        <input className="form-control mr-sm-2" type="search" placeholder="Find product" aria-label="Search" />
                    </form>
                    <div className="shopping-icons">
                        <span className="img-icons">
                            <img className="shopping__icon-img" src="./wishlist.svg" alt="question-mark" />
                            <img className="shopping__icon-img" src="./shopping-cart.svg" alt="question-mark" />
                            <img src="./user.svg" alt="user" className="mobile mobile-user-img" />
                        </span>
                    </div>
                </div>
            </nav>
            <div className="mobile mobile-search-bar">
                <div className="input-group mb-4">
                    <input type="search" placeholder="What're you searching for?" aria-describedby="button-addon6" className="form-control" />
                    <div className="input-group-append">
                        <button id="button-addon6" type="submit" className="btn btn-search"><span className="glyphicon-search">&#x1F50D;</span></button>
                    </div>
                </div>
            </div>
            <div className="dropdown nav-links-container">
                <ul className="nav-links">
                    <li className="dropdown" data-toggle="dropdown" data-hover="dropdown">Best Sellers</li>
                    <ul className="dropdown-menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Another action</a></li>
                    </ul>
                    <li className="dropdown" data-toggle="dropdown" data-hover="dropdown">Men</li>
                    <li className="dropdown" data-toggle="dropdown" data-hover="dropdown">Women</li>
                    <li className="dropdown" data-toggle="dropdown" data-hover="dropdown">Kids & Babies</li>
                    <li className="dropdown" data-toggle="dropdown" data-hover="dropdown">Accessories</li>
                    <li className="dropdown" data-toggle="dropdown" data-hover="dropdown">Posters</li>
                    <li className="dropdown" data-toggle="dropdown" data-hover="dropdown">Home & Living</li>
                    <li className="dropdown" data-toggle="dropdown" data-hover="dropdown">Gifts</li>
                    <li className="dropdown" data-toggle="dropdown" data-hover="dropdown">Collections</li>
                </ul>
            </div>
            <div className="mobile mobile-menu-items">
                <ul className="menu-categories">
                    {/* <li>item</li>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li> */}
                </ul>
            </div>
        </nav>
    );
}
        
export default NavBar;