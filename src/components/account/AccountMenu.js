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
                    <div className="account-menu-links">
                        <NavLink className="router-nav-link acc-link account-link"
                            to="/customer/account"
                            activeClassName="active"
                        >
                            <span>
                                <i className="far fa-user"></i>
                            </span>
                            <p>My E-Isich Account</p>
                        </NavLink>
                        <NavLink className="router-nav-link acc-link orders-link"
                            to="/customer/orders"
                            activeClassName="active"
                        >
                            <span>
                                <i className="fas fa-luggage-cart"></i>
                            </span>
                            <p>Orders</p>
                        </NavLink>
                        <NavLink className="router-nav-link acc-link wishlist-link"
                            to="/customer/wishlist"
                            activeClassName="active"
                        >
                            <span>
                                <i className="far fa-heart"></i>
                            </span>
                            <p>Saved Items</p>
                        </NavLink>
                        <NavLink className="router-nav-link acc-link pending-reviews-link"
                            to="/customer/pending-reviews"
                            activeClassName="active"
                        >
                            <span>
                                <i className="far fa-comments"></i>
                            </span>
                            <p>Pending Reviews</p>
                        </NavLink>
                        <NavLink className="router-nav-link acc-link coupons-link"
                            to="/customer/coupons"
                            activeClassName="active"
                        >
                            <span>
                                <i className="far fa-credit-card"></i>
                            </span>
                            <p>Coupons</p>
                        </NavLink>
                    </div>
                    <div className="account-menu-forms">
                        <NavLink className="router-nav-link acc-link details-link"
                            to="/customer/profile/edit"
                            activeClassName="active"
                        >
                            <p>Details</p>
                        </NavLink>
                        <NavLink className="router-nav-link acc-link address-link"
                            to="/customer/address"
                            activeClassName="active"
                        >
                            <p>Address Book</p>
                        </NavLink>
                        <NavLink className="router-nav-link acc-link change-password-link"
                            to="/customer/change-password"
                            activeClassName="active"
                        >
                            <p>Change Password</p>
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