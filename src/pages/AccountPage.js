import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import NavBar from '../components/NavBar';
import AccountMenu from '../components/account/AccountMenu';
import AccountOverview from '../components/account/AccountOverview';


class AccountPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="account-page-container account-background">
                <div className="wrapper-acc-pg">
                    <div className="nav-bar-wrapper">
                        <NavBar />
                        {this.props.resMessages.msg && <div className="alert alert-success home-page-alert" role="alert">
                            {this.props.resMessages.msg}
                        </div>}
                    </div>
                    <div className="welcome-user">
                        <p className="welcome-user-note">welcome back, {this.props.authentication.user.firstName}</p>
                        <p className="user-email-add">{this.props.authentication.user.email}</p>
                    </div>
                    <div className="account-container">
                        <div className="account-menu-sec acc-sec">
                            <AccountMenu />
                        </div>
                        <span className="account-menu-span"></span>
                        <AccountOverview />
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
                    <h1>Hello world</h1>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    authentication: state.authentication,
    resMessages: state.resMessages
});

export default connect(mapStateToProps)(AccountPage);