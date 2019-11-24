/**
 * This file contains the Authentication modal
 */


import React from 'react';
import Modal from 'react-modal';
import FormikSignUp from './FormikSignUp';
import LoginPage from './LoginPage';


// Custom styles for the authentication modal
const customStyles = {
    overlay: { zIndex: 1000 },
    content: {
        top: '5%',
        width: '70%'
    }
};

Modal.setAppElement('body');

export default class AuthenticationModal extends React.Component {

    constructor(props) {
        super(props);
        this.handleSwithAuth = this.handleSwithAuth.bind(this);

        this.state = {
            loginPopUp: true
        }
        console.log({...this.state})
    }

    handleSwithAuth(e) {
        e.preventDefault();
        this.setState((prevState) => ({
            loginPopUp: !prevState.loginPopUp
        }))
    }

    render() {
        return (
            <Modal
                style={customStyles}
                isOpen={!!this.props.loginPopUp}
                // isOpen={true}
                onRequestClose={this.props.hideLoginPopUp}
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
                            onClick={this.props.hideLoginPopUp}
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                        <h4 className="modal-title" id="myModalLabel">{this.state.loginPopUp ? 'Login to E-Isich' : 'Create E-Isich account'}</h4>
                    </div>
                    {this.state.loginPopUp ? <LoginPage
                        handleSwithAuth={this.handleSwithAuth}
                        hideLoginPopUp={this.props.hideLoginPopUp}
                    /> : <FormikSignUp
                        handleSwithAuth={this.handleSwithAuth}
                    />}
                </div>
            </Modal>
        );
    }
}