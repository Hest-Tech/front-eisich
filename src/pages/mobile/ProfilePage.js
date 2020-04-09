import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import AccountPage from '../AccountPage';
import NavBar from '../../components/NavBar';
import AccountMenu from '../../components/account/AccountMenu';
import AccountOverview from '../../components/account/AccountOverview';


const ProfilePage = (props) => {
    return (
        <Fragment>
            <div className="account-page-container account-background">
                <div className="nav-bar-wrapper">
                    <NavBar />
                    {props.resMessages.msg && <div className="alert alert-success home-page-alert" role="alert">
                        {this.props.resMessages.msg}
                    </div>}
                </div>
                <div className="welcome-user">
                    <p className="welcome-user-note">welcome back, {props.authentication.user.firstName}</p>
                    <p className="user-email-add">{props.authentication.user.email}</p>
                </div>
                <div className="account-container-mb">
                    <div className="account-menu-sec acc-sec">
                        <AccountMenu />
                    </div>
                    <span className="account-menu-span"></span>
                    <AccountOverview />
                </div>
            </div>
        </Fragment>
    );
}

const mapStateToProps = (state) => ({
    authentication: state.authentication,
    resMessages: state.resMessages
});

const mapDispatchToProps = (dispatch) => ({
    // openAuthPopUp: () => dispatch(openAuthPopUp()),
    // loadUser: () => dispatch(loadUser()),
    // signOutUser: () => dispatch(signOutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);