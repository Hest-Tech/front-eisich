import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import NavBar from '../NavBar';
import AccountMenu from './AccountMenu';
import AddressBookForm from './AddressBookForm';
import { addressBookForm } from '../../actions/authentication';


const AddressBook = (props) => {

    const user = props.authentication.user || {};
    const userData = {
        email: user.email || 'No email',
        firstName: user.firstName || 'Anonymous',
        lastName: user.lastName || 'Anonymous',
        phoneNumber: user.phoneNumber || '2547xxxxxxxx'
    }
    const [userProfile, setProfileState] = useState(userData);

    return (
        <div className="account-menu-container account-background">
            <div className="nav-bar-wrapper">
                <NavBar />
            </div>
            <div className="account-container">
                <div className="account-menu-sec acc-sec">
                    <AccountMenu />
                </div>
                <span></span>
                <div className="accout-detail-sec acc-sec address-book-content">
                    <div className="account-det-background">
                        <div className="new-address-header d-flex justify-content-between align-items-center">
                            <h1 className="account-overview-title">Address Book (1)</h1>
                            <button
                                type="submit"
                                className="btn btn-warning add-new-address"
                                onClick={() => props.addressBookForm()}
                            >
                                ADD NEW ADDRESS
                            </button>
                        </div>
                        <div className="detail-address-container">

                            <div className="detail-address">
                                <div className="acc-overview account-address-overview">
                                    <div className="overview-address">
                                        <p>{userProfile.firstName} {userProfile.lastName}</p>
                                        <p className="user-info text-muted">eastleigh south</p>
                                        <p className="user-info text-muted">Embakasi East - Embakasi / Utawala, Nairobi</p>
                                        <p className="user-info text-muted">{userProfile.phoneNumber}</p>
                                    </div>
                                    <div className="edit-option address-edit">
                                        <p className="text-success">DEFAULT ADDRESS</p>
                                        <i
                                            className="far fa-edit"
                                            onClick={() => props.addressBookForm()}
                                        ></i>
                                    </div>
                                    {props.authentication.updateAddress ? <AddressBookForm /> : null}
                                </div>
                            </div>
                            {/* <div className="detail-address">
                                <div className="acc-overview account-address-overview">
                                    <div className="overview-address">
                                        <p>{userProfile.firstName} {userProfile.lastName}</p>
                                        <p className="user-info text-muted">Address</p>
                                        <p className="user-info text-muted">City</p>
                                        <p className="user-info text-muted">{userProfile.phoneNumber}</p>
                                    </div>
                                    <div className="edit-option address-edit">
                                        <p>ADDRESS BOOK</p>
                                        <i
                                            className="far fa-edit"
                                            onClick={() => props.addressBookForm()}
                                        ></i>
                                    </div>
                                    {props.authentication.updateAddress ? <AddressBookForm /> : null}
                                </div>
                            </div> */}
                            {/* <div className="detail-address">
                                <div className="acc-overview account-address-overview">
                                    <div className="overview-address">
                                        <p>{userProfile.firstName} {userProfile.lastName}</p>
                                        <p className="user-info text-muted">Address</p>
                                        <p className="user-info text-muted">City</p>
                                        <p className="user-info text-muted">{userProfile.phoneNumber}</p>
                                    </div>
                                    <div className="edit-option address-edit">
                                        <p>ADDRESS BOOK</p>
                                        <i
                                            className="far fa-edit"
                                            onClick={() => props.addressBookForm()}
                                        ></i>
                                    </div>
                                    {props.authentication.updateAddress ? <AddressBookForm /> : null}
                                </div>
                            </div> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    authentication: state.authentication,
    resMessages: state.resMessages
});

const mapDispatchToProps = (dispatch) => ({
    addressBookForm: () => dispatch(addressBookForm())
});

export default connect(mapStateToProps, mapDispatchToProps)(AddressBook);