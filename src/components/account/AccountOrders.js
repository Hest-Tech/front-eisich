import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import NavBar from '../NavBar';
import AccountMenu from './AccountMenu';
import box from '../../assets/images/box.png';


class AccountOrders extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="account-orders-container account-background">
                <div className="wrapper-acc-pg">
                    <div className="nav-bar-wrapper">
                        <NavBar />
                    </div>
                    <div className="account-container">
                        <div className="account-menu-sec acc-sec">
                            <AccountMenu />
                        </div>
                        <span></span>
                        <div className="accout-detail-sec acc-sec">
                            <div className="account-det-background">
                                <h1 className="account-overview-title">Account orders</h1>
                                <div className="no-pending-orders">
                                    <div className="no-pending-background">
                                        <div className="no-orders-icon">
                                            <img src={box} alt="empty box" className="empty-box" />
                                        </div><br />
                                        <div className="no-orders-info">
                                            <p className="acc-info-1">You have placed no orders yet!</p><br />
                                            <p className="acc-info-2">All your orders will be saved here for you to access their state anytime.</p>
                                        </div><br />
                                        <div className="continue-shopping-btn">
                                            <NavLink to="/" className="order-continue-shopping">CONTINUE SHOPPING</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-acc-pg">
                    <div className="nav-bar-wrapper">
                        <NavBar />
                    </div>
                    <div className="section-title">
                        <NavLink className="section-title-btn" to="/user/profile">
                            <span>
                                <i className="fas fa-arrow-left back-btn"></i>
                            </span>
                        </NavLink>
                        <span className="section-title-name"><h1 className="account-overview-title">Account orders</h1></span>
                    </div>
                    <div className="account-container">
                        <div className="account-det-background">
                            <div className="no-pending-orders">
                                <div className="no-pending-background">
                                    <div className="no-orders-icon">
                                        <img src={box} alt="empty box" className="empty-box" />
                                    </div><br />
                                    <div className="no-orders-info">
                                        <p className="acc-info-1">You have placed no orders yet!</p><br />
                                        <p className="acc-info-2">All your orders will be saved here for you to access their state anytime.</p>
                                    </div><br /><br />
                                    <div className="continue-shopping-btn">
                                        <NavLink to="/" className="order-continue-shopping">CONTINUE SHOPPING</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
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

export default connect(mapStateToProps)(AccountOrders);