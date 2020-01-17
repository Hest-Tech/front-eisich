/**
 * This file contains the Navigation bar component
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

// import { store } from '../App';
import { openAuthPopUp } from '../actions/authentication';
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
import clientStorage from '../utils/clientStorage';
import { signOutUser, loadUser } from '../actions/authentication';


class NavBar extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadUser();
    }

    render() {
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
                                <span className="language">
                                    <label className="language__label">Language: </label>
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
                        <NavLink
                            className="display-1 main-title"
                            to="/"
                            style={{ textDecoration: 'none' }}
                            activeStyle={{ color: '#E9BD4C' }}
                        >
                            E-Isich
                        </NavLink>
                        <AuthenticationModal />
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
                                    <div
                                        className="dropdown authenticated-user"
                                    >
                                        <span className="dropdown-toggle authenticated-user__btn" data-toggle="dropdown">
                                            {this.props.authentication.isAuthenticated ? <p><small>Hi, {this.props.authentication.displayName}</small></p> : <div className="non-authenticated-user">
                                                <i className="far fa-user"></i>
                                                <small className="text-muted">login</small>
                                            </div>}
                                        </span>
                                        <div className="dropdown-menu authenticated-user-dropdown" style={{ opacity: 1 }}>
                                            <NavLink
                                                className="dropdown-item profile-link"
                                                to="/customer/account"
                                            // style={{}}
                                            >
                                                <i className="far fa-user"></i>
                                                <span>Account</span>
                                            </NavLink>
                                            <NavLink
                                                className="dropdown-item profile-link"
                                                to="/customer/orders"
                                            // style={{}}
                                            >
                                                <i className="fas fa-luggage-cart"></i>
                                                <span>Orders</span>
                                            </NavLink>
                                            <NavLink
                                                className="dropdown-item profile-link"
                                                to="/customer/wishlist"
                                            // style={{}}
                                            >
                                                <i className="far fa-heart"></i>
                                                <span>Saved Items</span>
                                            </NavLink>
                                            <div className="dropdown-divider"></div>
                                            <span className="login-btn-background">
                                                {this.props.authentication.isAuthenticated ? <button
                                                    type="button"
                                                    className="btn btn-light dropdown-item-btn"
                                                    onClick={this.props.signOutUser}
                                                >
                                                    Logout
                                                </button> : <button
                                                        type="button"
                                                        className="btn btn-light dropdown-item-btn"
                                                        onClick={this.props.openAuthPopUp}
                                                    >
                                                        Log In
                                                </button>}
                                            </span>
                                        </div>
                                    </div>
                                    <NavLink
                                        to="/cart"
                                        className="link-to-cart"
                                    >
                                        <i
                                            className='fas fa-cart-plus shopping__icon'
                                            style={{ color: '#000' }}
                                        ></i>
                                        <span className="badge bg-warning cart-pill">2</span>
                                    </NavLink>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
        );
    }
}

const mapStateToProps = (state) => ({
    authentication: state.authentication
});

const mapDispatchToProps = (dispatch) => ({
    openAuthPopUp: () => dispatch(openAuthPopUp()),
    loadUser: () => dispatch(loadUser()),
    signOutUser: () => dispatch(signOutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);