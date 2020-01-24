import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import NavBar from '../NavBar';
import AccountMenu from './AccountMenu';
import AddressBookForm from './AddressBookForm';
import { returnMessages } from '../../actions/resMessages';
import {
    addressBookForm,
    loadUser,
    setDefaultAddress
} from '../../actions/authentication';
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

    addressList() {
        let addressList = Object.entries(this.props.authentication.user.address || {});
        let defaultAddressIndex = addressList.findIndex(address => address[1].default === true);

        addressList.splice(0, 0, addressList.splice(defaultAddressIndex, 1)[0]);
        
        return addressList;
    }

    render() {
        return (
            <div className="account-menu-container account-background">
                <div className="nav-bar-wrapper">
                    <NavBar />
                    {this.props.authentication.updateAddress ? <AddressBookForm values={} /> : null}
                </div>
                {this.props.resMessages.msg && <div
                    className="alert alert-success home-page-alert"
                    role="alert"
                >
                    {this.props.resMessages.msg}
                </div>}
                <div className="account-container">
                    <div className="account-menu-sec acc-sec">
                        <AccountMenu />
                    </div>
                    <span></span>
                    <div className="accout-detail-sec acc-sec address-book-content">
                        <div className="account-det-background">
                            <div className="new-address-header d-flex justify-content-between align-items-center">
                                <h1 className="account-overview-title">Address Book{this.addressList().length && <span> ({this.addressList().length})</span>}</h1>
                                <button
                                    type="submit"
                                    className="btn btn-warning add-new-address"
                                    onClick={() => this.props.addressBookForm()}
                                >
                                    ADD NEW ADDRESS
                                </button>
                            </div>
                            {
                                this.addressList().length ? (
                                    <div className="detail-address-container">
                                        {
                                            this.addressList().map((address, i) => {
                                                return <div
                                                    className="detail-address-book"
                                                    key={address[0]}
                                                >
                                                    <div className="acc-overview account-address-overview">
                                                        <div className="overview-address">
                                                            <p>{address[1].firstName} {address[1].lastName}</p>
                                                            <p className="user-info text-muted">{address[1].city}</p>
                                                            <p className="user-info text-muted">{address[1].address}</p>
                                                            {
                                                                address[1].phoneNumber.map((num, i) => (
                                                                    <p
                                                                        className="user-info text-muted"
                                                                        key={i}
                                                                    >
                                                                        {num}
                                                                    </p>
                                                                ))
                                                            }
                                                        </div>
                                                        <div className="address-edit">

                                                            <div className="address-text-action">
                                                                <button
                                                                    type="button"
                                                                    className={`btn btn-light ${address[1].default === false && `address-txt`}`}
                                                                    // className="btn btn-light"
                                                                    disabled={address[1].default === true}
                                                                    onClick={() => this.props.setDefaultAddress(address[0])}
                                                                >
                                                                    SET DEFAULT ADDRESS
                                                                </button>
                                                            </div>
                                                            <div className="address-actions">
                                                                <i
                                                                    className="far fa-edit"
                                                                    onClick={() => this.props.addressBookForm()}
                                                                ></i>
                                                                {address[1].default === false && <i className="fas fa-trash-alt"></i>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </div>
                                ) : (<div
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
                                </div>)
                            }
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
    setDefaultAddress: (addressKey) => dispatch(setDefaultAddress(addressKey)),
    returnMessages: () => dispatch(returnMessages()),
    addressBookForm: () => dispatch(addressBookForm())
});

export default connect(mapStateToProps, mapDispatchToProps)(AddressBook);