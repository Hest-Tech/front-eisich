import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Modal from 'react-modal';

import NavBar from '../NavBar';
import AccountMenu from './AccountMenu';


const customStyles = {
    overlay: { zIndex: 1000 },
    content: {
        top: '2%',
        width: '70%'
    }
};

class AddressBookForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal
                style={customStyles}
                isOpen={this.props.addressFormState}
                onRequestClose={() => this.props.closeAddressForm}
                contentLabel="Login details"
                id="login-overlay"
                className="modal-dialog"
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            onClick={this.props.closeAddressForm}
                        >
                            <span aria-hidden="true">×</span>
                        </button>

                        <h4
                            className="modal-title"
                            id="myModalLabel"
                        >Edit Address</h4>
                    </div>
                    
                </div>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => ({
    authentication: state.authentication,
    resMessages: state.resMessages
});

export default connect(mapStateToProps)(AddressBookForm);