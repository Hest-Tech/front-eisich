import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import NavBar from '../NavBar';
import AccountMenu from './AccountMenu';
import goodReview from '../../assets/images/good-review.png';


const AccountPendingReviews = () => (
    <div className="account-menu-container account-background">
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
                    <h1 className="account-overview-title">Pending Reviews</h1>
                    <div className="no-pending-orders">
                        <div className="no-pending-background">
                            <div className="no-orders-icon">
                                <img src={goodReview} alt="empty goodReview" className="empty-box" />
                            </div><br />
                            <div className="no-orders-info">
                                <p className="acc-info-1">You have no orders waiting for feedback</p><br />
                                <p className="acc-info-2">After getting your products delivered, you will be able to rate and review them.</p>
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
);

const mapStateToProps = (state) => ({
    authentication: state.authentication,
    resMessages: state.resMessages
});

export default connect(mapStateToProps)(AccountPendingReviews);