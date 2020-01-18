import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

// import {  } from '../../actions/authentication';
import { addressBookForm } from '../../actions/authentication';
import AddressBookForm from './AddressBookForm';


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
                                <NavLink to="/customer/change-password">
                                    <button type="button" className="btn btn-light">CHANGE PASSWORD</button>
                                </NavLink>
                                </div>
                            </div>
                        </div>
                        <span></span>
                        <div className="acc-overview account-address-overview">
                            <div className="edit-option">
                                <p>ADDRESS BOOK</p>
                                <i
                                    className="far fa-edit"
                                    onClick={() => this.props.addressBookForm()}
                                ></i>
                            </div>
                            <div className="overview-address">
                                <p>Your default shipping address</p>
                                <p className="user-info text-muted">{this.state.firstName} {this.state.lastName}</p>
                                <p className="user-info text-muted">Address</p>
                                <p className="user-info text-muted">City</p>
                                <p className="user-info text-muted">{this.state.phoneNumber}</p>
                            </div>

                            {this.props.authentication.updateAddress ? <AddressBookForm /> : null}
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

const mapDispatchToProps = (dispatch) => ({
    addressBookForm: () => dispatch(addressBookForm())
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountOverview);