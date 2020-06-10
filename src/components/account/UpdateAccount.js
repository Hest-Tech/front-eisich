import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import NavBar from '../NavBar';
import AccountMenu from './AccountMenu';
import fire from '../../firebase/firebase';
import UpdateAccountForm from './UpdateAccountForm';


class UpdateAccount extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: this.props.authentication.user.firstName,
            lastName: this.props.authentication.user.lastName,
            birthday: this.props.authentication.user.birthday,
            gender: this.props.authentication.user.gender,
            phoneNumber: this.props.authentication.user.phoneNumber,
            email: this.props.authentication.user.email || '2547xxxxxxxx'
        }
    }

    render() {
        return (
            <div className="account-menu-container account-background">
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
                                <h1 className="account-overview-title">Update Details</h1>
                                <UpdateAccountForm
                                    phoneNumber={this.state.phoneNumber.toString()}
                                    email={this.state.email}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-acc-pg update-acc">
                    <div className="nav-bar-wrapper">
                        <NavBar />
                    </div>
                    <div className="section-title">
                        <NavLink className="section-title-btn" to="/user/profile">
                            <span>
                                <i className="fas fa-arrow-left back-btn"></i>
                            </span>
                        </NavLink>
                        <span className="section-title-name"><h1 className="account-overview-title">Update Account</h1></span>
                    </div>
                    <div className="mb-update-form">
                        <UpdateAccountForm
                            phoneNumber={this.state.phoneNumber.toString()}
                            email={this.state.email}
                        />
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    authentication: state.authentication,
    resMessages: state.resMessages
});

const mapDispatchToProps = (dispatch) => ({
    // updateAccount: (updates) => dispatch(updateAccount(updates)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateAccount);