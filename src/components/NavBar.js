/**
 * This file contains Navbar component for the navigation bar
 */

import React from 'react';


const NavBar = () => {
    return (
        <nav class="main-nav-bar">
            <div class="main-nav-bar-container">
                <div class="nav-bar-container">
                    <ul class="trust-policy">
                        <li class="separate contact">
                            <svg></svg>
                            <span>Call us +254 707 030 398</span>
                        </li>
                        <li class="separate return">
                            <svg></svg>
                            <span>30 day return policy</span>
                        </li>
                        <li class="bulk">
                            <svg></svg>
                            <span>Buy in bulk - save up to 70%</span>
                        </li>
                    </ul>
                    <div class="start-selling">
                        <button>Start selling</button>
                    </div>
                    <ul class="help-login">
                        <li class="jobs">Jobs</li>
                        <li class="help">Help</li>
                        <li class="login">Login</li>
                    </ul>
                </div>
            </div>
            <nav class="navbar">
                <a class="navbar-brand" href="#">Eisich</a>
                <ul class="navbar-list">
                    <li>
                        <div class="title">Create</div>
                        <div class="description">Custom products</div>
                    </li>
                    <li>
                        <div class="title">Shop</div>
                        <div class="description">Marketplace Designs</div>
                    </li>
                </ul>
                <input />
                <button>Wishlist</button>
                <button>Cart</button>
            </nav>
            <div class="nav-links-container">
                <ul class="nav-links">
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