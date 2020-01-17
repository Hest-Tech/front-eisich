import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import NavBar from '../NavBar';
import AccountMenu from './AccountMenu';
import AddressBookForm from './AddressBookForm';


const AddressBook = (props) => {

    const user = props.authentication.user || {};
    const userData = {
        email: user.email || 'No email',
        firstName: user.firstName || 'Anonymous',
        lastName: user.lastName || 'Anonymous',
        phoneNumber: user.phoneNumber || '2547xxxxxxxx'
    }
    const [userProfile, setProfileState] = useState(userData);
    const [addressFormState, setAddressFormState] = useState(false);
    const toggleAddressFormState = () => setAddressFormState(!addressFormState);
    const closeAddressForm = () => setAddressFormState(false);

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
                <div className="accout-detail-sec acc-sec">
                    <div className="account-det-background">
                        <h1 className="account-overview-title">Address Book</h1>
                        <div className="detail-address">
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
                                        onClick={toggleAddressFormState}
                                    ></i>
                                </div>
                                {addressFormState ? <AddressBookForm
                                    addressFormState={addressFormState}
                                    closeAddressForm={closeAddressForm}
                                /> : null}
                            </div>
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

export default connect(mapStateToProps)(AddressBook);