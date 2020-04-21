import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Modal from 'react-modal';

import NavBar from '../NavBar';
import AccountMenu from './AccountMenu';
import AddressBookForm from './AddressBookForm';
import { returnMessages } from '../../actions/resMessages';
import {
    addressBookForm,
    loadUser,
    setDefaultAddress,
    deleteAddress
} from '../../actions/authentication';
import goodReview from '../../assets/images/good-review.png';


const customStyles = {
    overlay: {
        zIndex: 1000
    },
    content: {
        top: '2%',
        width: '70%'
    }
};


class AddressBook extends React.Component {

    constructor(props) {
        super(props);
        let user = this.props.authentication.user || {};
        this.editAddress = this.editAddress.bind(this);
        this.addressList = this.addressList.bind(this);
        this.addAddress = this.addAddress.bind(this);

        this.state = {
            userProfile: {
                email: user.email || 'No email',
                firstName: user.firstName || 'Anonymous',
                lastName: user.lastName || 'Anonymous',
                phoneNumber: user.phoneNumber || '2547xxxxxxxx'
            },
            address: {},
            addressId: null,
            addAddress: false,
            editAddress: false
        }
    }

    addressList() {
        // set default default addess index to 0
        let addressList = Object.entries(this.props.authentication.user.address || {});
        let defaultAddressIndex = addressList.findIndex(address => address[1].default === true);

        addressList.splice(0, 0, addressList.splice(defaultAddressIndex, 1)[0]);
        console.log(this.props.authentication.user.address);

        return addressList;
    }

    addAddress() {
        this.setState(prevState => ({
            addAddress: !prevState.editAddress,
            editAddress: false,
        }))
        this.props.addressBookForm()
    }

    editAddress(e) {
        let addressId = e.target.getAttribute('data-address-id');
        let addressList = this.addressList();
        let setAddress = {};
        
        addressList.forEach(address => {
            if (address[0] === addressId) {
                setAddress = { ...address[1] }
            }
        });

        this.setState((prevState) => ({
            address: { ...setAddress },
            editAddress: !prevState.editAddress,
            addAddress: false,
            addressId
        }));

        console.log('===>',setAddress);

        this.props.addressBookForm();
    }

    render() {
        return (
            <div className="account-menu-container account-background">
                <div className="wrapper-acc-pg">
                    <div className="nav-bar-wrapper">
                        <NavBar />
                        {this.props.authentication.updateAddress ? <Modal
                            style={customStyles}
                            isOpen={this.props.authentication.updateAddress}
                            onRequestClose={() => this.props.addressBookForm()}
                            contentLabel="Login details"
                            id="login-overlay"
                            className="modal-dialog"
                            overlayClassName="Overlay"
                        >
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        onClick={() => this.props.addressBookForm()}
                                    >
                                        <span aria-hidden="true">×</span>
                                    </button>

                                    <h4
                                        className="modal-title"
                                        id="myModalLabel"
                                    >Edit Address</h4>
                                </div>
                                <AddressBookForm
                                    currentDetails={this.state.address}
                                    addAddress={this.state.addAddress}
                                    editAddress={this.state.editAddress}
                                    addressId={this.state.addressId}
                                />
                            </div>
                        </Modal> : null}
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
                                        onClick={this.addAddress}
                                    >
                                        ADD NEW ADDRESS
                                    </button>
                                </div>
                                {
                                    this.addressList().length ? (
                                        <div className="detail-address-container">
                                            {
                                                this.addressList().map((address, i) => (
                                                    <div
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
                                                                        className="far fa-edit dk-edit-btn"
                                                                        data-address-id={address[0]}
                                                                        onClick={this.editAddress}
                                                                    ></i>
                                                                    {address[1].default === false && <i
                                                                        className="fas fa-trash-alt"
                                                                        data-address-id={address[0]}
                                                                        onClick={() => this.props.deleteAddress(address[0])}
                                                                    ></i>}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
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
                        <span className="section-title-name"><h1 className="account-overview-title">Address Book</h1></span>
                    </div>
                    {
                        this.addressList().length ? (
                            <div className="detail-address-container">
                                {
                                    this.addressList().map((address, i) => (
                                        <div
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
                                                        <div className="mb-edit-btn">
                                                            <NavLink
                                                                to="/customer/address-book/edit"
                                                                onClick={this.editAddress}
                                                            >
                                                                <i
                                                                    className="far fa-edit"
                                                                    data-address-id={address[0]}
                                                                    onClick={this.editAddress}
                                                                ></i>
                                                            </NavLink>
                                                        </div>
                                                        {address[1].default === false && <i
                                                            className="fas fa-trash-alt"
                                                            data-address-id={address[0]}
                                                            onClick={() => this.props.deleteAddress(address[0])}
                                                        ></i>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
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
    addressBookForm: () => dispatch(addressBookForm()),
    deleteAddress: (addressKey) => dispatch(deleteAddress(addressKey))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddressBook);