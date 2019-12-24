import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import NavBar from '../NavBar';
import AccountMenu from './AccountMenu';


const AddressBook = () => (
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
                    <h1 className="account-overview-title">Address Book</h1>
                    <div className="detail-address">
                        <div className="acc-overview account-address-overview">
                            <div className="overview-address">
                                <p>John Doe</p>
                                <p className="user-info text-muted">Address</p>
                                <p className="user-info text-muted">City</p>
                                <p className="user-info text-muted">2547xxxxxxxx</p>
                            </div>
                            <div className="edit-option address-edit">
                                <p>ADDRESS BOOK</p>
                                <NavLink to="/customer/address"><i className="far fa-edit"></i></NavLink>
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

export default connect(mapStateToProps)(AddressBook);