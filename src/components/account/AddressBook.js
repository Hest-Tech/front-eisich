import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import NavBar from '../NavBar';
import AccountMenu from './AccountMenu';
import AddressBookForm from './AddressBookForm';
import { addressBookForm, loadUser } from '../../actions/authentication';
import goodReview from '../../assets/images/good-review.png';


class AddressBook extends React.Component {

    constructor(props) {
        super(props);
        let user = this.props.authentication.user || {};

        this.state = {
            userProfile: {
                email: user.email || 'No email',
                firstName: user.firstName || 'Anonymous',
                lastName: user.lastName || 'Anonymous',
                phoneNumber: user.phoneNumber || '2547xxxxxxxx'
            }
        }
    }

    render() {
        return (
            <div className="account-menu-container account-background">
                <div className="nav-bar-wrapper">
                    <NavBar />
                    {this.props.authentication.updateAddress ? <AddressBookForm /> : null}
                </div>
                <div className="account-container">
                    <div className="account-menu-sec acc-sec">
                        <AccountMenu />
                    </div>
                    <span></span>
                    <div className="accout-detail-sec acc-sec address-book-content">
                        <div className="account-det-background">
                            {this.props.authentication.user.address.address ? <div className="new-address-header d-flex justify-content-between align-items-center">
                                <h1 className="account-overview-title">Address Book (1)</h1>
                                <button
                                    type="submit"
                                    className="btn btn-warning add-new-address"
                                    onClick={() => this.props.addressBookForm()}
                                >
                                    ADD NEW ADDRESS
                                </button>
                            </div> : <h1 className="account-overview-title">Address Book</h1>}
                            {this.props.authentication.user.address.address ? <div
                                className="detail-address-container"
                            >

                                <div className="detail-address-book">
                                    <div className="acc-overview account-address-overview">
                                        <div className="overview-address">
                                            <p>{this.state.userProfile.firstName} {this.state.userProfile.lastName}</p>
                                            <p className="user-info text-muted">eastleigh south</p>
                                            <p className="user-info text-muted">Embakasi East - Embakasi / Utawala, Nairobi</p>
                                            <p className="user-info text-muted">{this.state.userProfile.phoneNumber}</p>
                                        </div>
                                        <div className="edit-option address-edit">
                                            <p className="text-success">DEFAULT ADDRESS</p>
                                            <i
                                                className="far fa-edit"
                                                onClick={() => this.props.addressBookForm()}
                                            ></i>
                                        </div>
                                    </div>
                                </div>
                            </div> : <div
                                className="no-details"
                            >
                                    <div className="no-pending-background">
                                        <div className="no-orders-icon">
                                            <img src={goodReview} alt="empty goodReview" className="empty-box" />
                                        </div><br />
                                        <div className="no-orders-info">
                                            <p className="acc-info-1">You have not added an address yet</p><br />
                                            <p className="acc-info-2">Add your shipping address here for a fast purchase experience!<br />You will be able to add, modify or delete them at any time.</p>
                                        </div><br />
                                        <div className="continue-shopping-btn">
                                            <button
                                                type="submit"
                                                className="btn btn-warning add-new-address"
                                                onClick={this.props.addressBookForm}
                                            >ADD NEW ADDRESS</button>
                                        </div>
                                    </div>
                                </div>}
                            {/* <div className="detail-address-book">
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
                            {/* <div className="detail-address-book">
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
        )
    }
};

const mapStateToProps = (state) => ({
    authentication: state.authentication,
    resMessages: state.resMessages
});

const mapDispatchToProps = (dispatch) => ({
    loadUser: () => dispatch(loadUser()),
    addressBookForm: () => dispatch(addressBookForm())
});

export default connect(mapStateToProps, mapDispatchToProps)(AddressBook);