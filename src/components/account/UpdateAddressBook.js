import React from 'react';
import { NavLink } from 'react-router-dom';

import AddressBookForm from './AddressBookForm';
import NavBar from '../NavBar';
import AccountMenu from './AccountMenu';


export default class UpdateAddressBook extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
		    address: {},
		    addressId: null,
		    addAddress: false,
		    editAddress: false
		}
	}

	render() {
		return (
	        <div className="account-menu-container account-background">
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
                        <span className="section-title-name"><h1 className="account-overview-title">Update Address Book</h1></span>
                    </div>
		            <div className="accout-detail-sec acc-sec">
		                <div className="account-det-background">
						    <AddressBookForm />
		                </div>
		            </div>
		        </div>
		    </div>
		);
	}
}
