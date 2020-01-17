import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

// import {  } from '../../actions/authentication';


class AccountOverview extends React.Component {
    constructor(props) {
        super(props);

        let user = this.props.authentication.user || {};

        this.state = {
            email: user.email || 'No email',
            firstName: user.firstName || 'Anonymous',
            lastName: user.lastName || 'Anonymous',
            phoneNumber: user.phoneNumber || '2547xxxxxxxx'
        }
    }

    componentWillMount() {
        console.log(this.props.authentication.user);
    }

    render() {
        return (
            <div className="accout-detail-sec acc-sec">
                <div className="account-det-background">
                    <h1 className="account-overview-title">Account overview</h1>
                    <div className="detail-address">
                        <div className="acc-overview account-det-overview">
                            <div className="edit-option">
                                <p>ACCOUNT DETAILS</p>
                                <NavLink to="/customer/profile/edit"><i className="far fa-edit"></i></NavLink>
                            </div>
                            <div className="det-info">
                                <div className="acc-det-info">
                                    <p>{this.state.firstName} {this.state.lastName}</p>
                                    <p className="user-info text-muted">{this.state.email}</p>
                                </div>
                                <div className="overview-change-pass acc-menu-btn">
                                    <button type="button" className="btn btn-light">CHANGE PASSWORD</button>
                                </div>
                            </div>
                        </div>
                        <span></span>
                        <div className="acc-overview account-address-overview">
                            <div className="edit-option">
                                <p>ADDRESS BOOK</p>
                                <NavLink to="/customer/address"><i className="far fa-edit"></i></NavLink>
                            </div>
                            <div className="overview-address">
                                <p>Your default shipping address</p>
                                <p className="user-info text-muted">{this.state.firstName} {this.state.lastName}</p>
                                <p className="user-info text-muted">Address</p>
                                <p className="user-info text-muted">City</p>
                                <p className="user-info text-muted">{this.state.phoneNumber}</p>
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

export default connect(mapStateToProps)(AccountOverview);