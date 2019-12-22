import React from 'react';
import { connect } from 'react-redux';

import NavBar from '../NavBar';
import AccountMenu from './AccountMenu';


const UpdateAccount = () => (
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
                <h1>Update account</h1>

            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    authentication: state.authentication,
    resMessages: state.resMessages
});

export default connect(mapStateToProps)(UpdateAccount);