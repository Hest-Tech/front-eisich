import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


class AccountMenu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="account-menu-container" >
                <div className="account-menu">
                    <small className="text-muted acc-title">MY ACCOUNT</small>
                    <div className="account-menu-links">
                        <NavLink
                            className="router-nav-link acc-link account-link"
                            to="/customer/account"
                            activeClassName="active"
                        >
                            <span className="span-icon">
                                <i className="far fa-user"></i>
                            </span>
                            <p className="acc-det-info">My E-Isich Account</p>
                            <div className="acc-link-item">
                                <span className="span-icon-m">
                                    <i className="far fa-user"></i>
                                </span>
                                <p className="acc-det-info-m">My E-Isich Account</p>
                            </div>
                            <i className="fas fa-angle-right acc-link-arrow"></i>
                        </NavLink>
                        <NavLink className="router-nav-link acc-link orders-link"
                            to="/customer/orders"
                            activeClassName="active"
                        >
                            <span className="span-icon">
                                <i className="fas fa-luggage-cart"></i>
                            </span>
                            <p className="acc-det-info">Orders</p>
                            <div className="acc-link-item">
                                <span className="span-icon-m">
                                    <i className="fas fa-luggage-cart"></i>
                                </span>
                                <p className="acc-det-info-m">Orders</p>
                            </div>
                            <i className="fas fa-angle-right acc-link-arrow"></i>
                        </NavLink>
                        <NavLink className="router-nav-link acc-link wishlist-link"
                            to="/customer/wishlist"
                            activeClassName="active"
                        >
                            <span className="span-icon">
                                <i className="far fa-heart"></i>
                            </span>
                            <p className="acc-det-info">Saved Items</p>
                            <div className="acc-link-item">
                                <span className="span-icon-m">
                                    <i className="far fa-heart"></i>
                                </span>
                                <p className="acc-det-info-m">Saved Items</p>
                            </div>
                            <i className="fas fa-angle-right acc-link-arrow"></i>
                        </NavLink>
                        <NavLink className="router-nav-link acc-link pending-reviews-link"
                            to="/customer/pending-reviews"
                            activeClassName="active"
                        >
                            <span className="span-icon">
                                <i className="far fa-comments"></i>
                            </span>
                            <p className="acc-det-info">Pending Reviews</p>
                            <div className="acc-link-item">
                                <span className="span-icon-m">
                                    <i className="far fa-comments"></i>
                                </span>
                                <p className="acc-det-info-m">Pending Reviews</p>
                            </div>
                            <i className="fas fa-angle-right acc-link-arrow"></i>
                        </NavLink>
                        <NavLink className="router-nav-link acc-link coupons-link"
                            to="/customer/coupons"
                            activeClassName="active"
                        >
                            <span className="span-icon">
                                <i className="far fa-credit-card"></i>
                            </span>
                            <p className="acc-det-info">Coupons</p>
                            <div className="acc-link-item">
                                <span className="span-icon-m">
                                    <i className="far fa-credit-card"></i>
                                </span>
                                <p className="acc-det-info-m">Coupons</p>
                            </div>
                            <i className="fas fa-angle-right acc-link-arrow"></i>
                        </NavLink>
                    </div>
                    <small className="text-muted acc-title">ACCOUNT SETTINGS</small>
                    <div className="account-menu-forms">
                        <NavLink className="router-nav-link acc-link details-link"
                            to="/customer/profile/edit"
                            activeClassName="active"
                        >
                            <p className="acc-desk">Details</p>
                            <div className="acc-link-item">
                                <p>Details</p>
                            </div>
                            <i className="fas fa-angle-right acc-link-arrow"></i>
                        </NavLink>
                        <NavLink className="router-nav-link acc-link address-link"
                            to="/customer/address"
                            activeClassName="active"
                        >
                            <p className="acc-desk">Address Book</p>
                            <div className="acc-link-item">
                                <p>Address Book</p>
                            </div>
                            <i className="fas fa-angle-right acc-link-arrow"></i>
                        </NavLink>
                        <NavLink className="router-nav-link acc-link change-password-link"
                            to="/customer/change-password"
                            activeClassName="active"
                        >
                            <p className="acc-desk">Change Password</p>
                            <div className="acc-link-item">
                               <p>Change Password</p>
                            </div>
                            <i className="fas fa-angle-right acc-link-arrow"></i>
                        </NavLink>
                    </div>
                    <div className="acc-menu-btn">
                        <button type="button" className="btn btn-light">LOGOUT</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    authentication: state.authentication,
    resMessages: state.resMessages
});

export default connect(mapStateToProps)(AccountMenu);