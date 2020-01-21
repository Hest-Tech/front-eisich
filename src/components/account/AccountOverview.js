import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { addressBookForm, loadUser } from '../../actions/authentication';
import AddressBookForm from './AddressBookForm';


class AccountOverview extends React.Component {
    constructor(props) {
        super(props);

        let user = this.props.authentication.user || {};

        this.state = {
            email: user.email || 'No email',
            firstName: user.firstName || 'Anonymous',
            lastName: user.lastName || 'Anonymous',
            phoneNumber: user.phoneNumber || '2547xxxxxxxx',
            address: user.address.address ? user.address : {}
        }
    }

    componentDidMount() {
        this.props.loadUser();
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
                                <p className="text-bold">ADDRESS BOOK</p>
                                {this.state.address.address && <i
                                    className="far fa-edit"
                                    onClick={() => this.props.addressBookForm()}
                                ></i>}
                            </div>
                            <div className="overview-address">
                                <p>Your default shipping address</p>
                                {this.state.address.address ? <div>
                                    <p className="user-info text-muted">{this.state.firstName} {this.state.lastName}</p>
                                    <p className="user-info text-muted">{this.state.address.addess}</p>
                                    <p className="user-info text-muted">{this.state.address.city}</p>
                                    <p className="user-info text-muted">+254{this.state.phoneNumber}</p>
                                </div> : <p className="user-info text-muted">No address available</p>}
                                <div className="overview-change-pass acc-menu-btn">
                                    <button
                                        type="button"
                                        className="btn btn-light"
                                        onClick={() => this.props.addressBookForm()}
                                    >ADD AN ADDRESS</button>
                                </div>
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
    loadUser: () => dispatch(loadUser()),
    addressBookForm: () => dispatch(addressBookForm())
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountOverview);