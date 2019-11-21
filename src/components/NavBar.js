/**
 * This file contains Navbar component for the navigation bar
 */

import React from 'react';
import { NavLink } from 'react-router-dom';

import '../images/call.svg';
import '../images/policy.svg';
import '../images/save-money.svg';
import '../images/suitcase.svg';
import '../images/question-mark.svg';
import '../images/user.svg';
import '../images/arrow-down.svg';
import '../images/wishlist.svg';
import '../images/menu.svg';
import '../images/shopping-cart.svg';
import AuthenticationModal from './AuthenticationModal';


export default class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.toggleLoginPopUp = this.toggleLoginPopUp.bind(this);
        this.hideLoginPopUp = this.hideLoginPopUp.bind(this);

        this.state = {
            loginPopUp: undefined
        };
    }

    toggleLoginPopUp() {
        this.setState((prevState) => ({ loginPopUp: !prevState.loginPopUp }))
    }

    hideLoginPopUp() {
        this.setState(() => ({ loginPopUp: undefined }))
    }

    componentDidMount() { }

    render() {

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
                        <div className="help-login">
                            <div className="help-login__wrapped">
                                <span className="help">
                                    <img src="./question-mark.svg" alt="question-mark" className="navbar__icon-img" />
                                    <p>Help</p>
                                </span>
                                <span
                                    className="login"
                                    onClick={this.toggleLoginPopUp}    
                                >
                                    <img src="./user.svg" alt="user" className="navbar__icon-img" />
                                    <p>Login</p>
                                    <img className="arrow-down" src="./arrow-down.svg" alt="arrow down" width="10px" height="10px" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar">
                    <img className="mobile mobile-menu-bar" src="menu.svg" />
                    <NavLink className="display-1" to="/">E-Isich</NavLink>
                    <div className="navbar-list">
                        <ul className="navbar-list__wrapped">
                            <NavLink className="nav-link products-link" activeClassName="is-active" to="/products" style={{ textDecoration: 'none' }} >
                                <li className="view-products">
                                    <h6 className="title-head products">Products</h6>
                                    <div className="title-description">View Products</div>
                                </li>
                            </NavLink>
                            <NavLink className="nav-link about-us-link" activeClassName="is-active" to="/about" style={{ textDecoration: 'none' }}>
                                <li className="about-link">
                                    <h6 className="title-head">About Us</h6>
                                    <div className="title-description">Our Goal</div>
                                </li>
                            </NavLink>
                            <AuthenticationModal
                                loginPopUp={this.state.loginPopUp}
                                hideLoginPopUp={this.hideLoginPopUp}
                            />
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
            </nav>
        );
    }
}
