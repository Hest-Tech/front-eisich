/**
 * This file contains the Navigation bar component
 */

import React from 'react';
import { NavLink } from 'react-router-dom';

import call from '../assets/images/call.svg';
import policy from '../assets/images/policy.svg';
import save from '../assets/images/save-money.svg';
import question from '../assets/images/question-mark.svg';
import user from '../assets/images/user.svg';
import arrow from '../assets/images/arrow-down.svg';
import wishlist from '../assets/images/wishlist.svg';
import menu from '../assets/images/menu.svg';
import shopping from '../assets/images/shopping-cart.svg';
import AuthenticationModal from './authentication/AuthenticationModal';
import unitedStates from '../assets/images/united-states.png';
import fire from '../firebase/firebase';


export default class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.showLoginPopUp = this.showLoginPopUp.bind(this);
        this.hideAuthPopUp = this.hideAuthPopUp.bind(this);

        this.state = {
            loginPopUp: undefined,
            userIsLoggedIn: fire.auth().currentUser
        };
    }

    // Display log in pop up modal
    showLoginPopUp() {
        this.setState((prevState) => ({ loginPopUp: !prevState.loginPopUp }))
    }

    // Hide log in pop up modal
    hideAuthPopUp(e) {
        // e.preventDefault();
        this.setState(() => ({ loginPopUp: undefined }))
    }

    render() {
        console.log('--->', this.state.userIsLoggedIn)
        return (
            <nav className="main-nav-bar">
                <div className="main-nav-bar__container">
                    <div className="nav-bar-container">
                        <ul className="trust-policy">
                            <li className="separate contact">
                                <img src={call} alt="cellphone" className="navbar__icon-img" />
                                <span> Call us +254 707 030 398</span>
                            </li>
                            <li className="separate return">
                                <img src={policy} alt="policy" className="navbar__icon-img" />
                                <span> 30 day return policy</span>
                            </li>
                            <li className="bulk">
                                <img src={save} alt="save money" className="navbar__icon-img" />
                                <span> Buy in bulk - save up to 70%</span>
                            </li>
                        </ul>
                        <div className="start-selling">
                            <button>Start selling</button>
                        </div>
                        <div className="help-login">
                            <div className="help-login__wrapped">
                                <span className="help">
                                    <img src={question} alt="question-mark" className="navbar__icon-img" />
                                    <p>Help</p>
                                </span>
                                {this.state.userIsLoggedIn == false && <span
                                    className="login"
                                    onClick={this.showLoginPopUp}
                                >
                                    <img src={user} alt="user" className="navbar__icon-img" />
                                    <p>Login</p>
                                    <i className="fas fa-chevron-down login-arrow"></i>
                                </span>}
                                {true && <span
                                    className="login"
                                    onClick={this.showLoginPopUp}
                                >
                                    <img src={user} alt="user" className="navbar__icon-img" />
                                    <p>User</p>
                                    <i className="fas fa-chevron-down login-arrow"></i>
                                </span>}

                                <span className="language">
                                    <label className="language__label">Language: </label>
                                    {/* <img src={unitedStates} alt="American flag" /> */}
                                    <select className="language__select" id="languageSelect">
                                        <option>ENGLISH</option>
                                        <option>SWAHILI</option>
                                        <option>SPANISH</option>
                                        <option>FRENCH</option>
                                    </select>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar" data-spy="affix" data-offset-top="60">
                    <div className="navbar__container">
                        {/* <img className="mobile mobile-menu-bar" src={menu} alt="menu" /> */}
                        <NavLink
                            className="display-1 main-title"
                            to="/"
                            style={{ textDecoration: 'none' }}
                            activeStyle={{ color: '#E9BD4C' }}
                        >
                            E-Isich
                        </NavLink>
                        <AuthenticationModal
                            loginPopUp={this.state.loginPopUp}
                            hideAuthPopUp={this.hideAuthPopUp}
                        />
                        <div className="search-input">
                            <div id="custom-search-input">
                                <div className="input-group col-md-12">
                                    <input type="text" className="form-control" placeholder="What're you searching for?" />
                                    <span className="input-group-btn">
                                        <button className="btn btn-info btn-lg" type="button">
                                            <i className="glyphicon glyphicon-search"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="shopping-options">
                            <div className="shopping-icons">
                                <span className="img-icons">
                                    <i className='far fa-heart shopping__icon'></i>
                                    <i className='fas fa-cart-plus shopping__icon'></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
