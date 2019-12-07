/**
 * This file contains the Authentication modal
 */

import React from 'react';
import Modal from 'react-modal';

import SignupPage from './SignupPage';
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
        this.handleResetPassword = this.handleResetPassword.bind(this);

        this.state = {
            loginPopUp: true,
            resetTitle: undefined
        }
    }

    // Toggle between sign up and login
    handleSwithAuth(e) {
        e.preventDefault();
        this.setState((prevState) => ({
            loginPopUp: !prevState.loginPopUp
        }))
    }

    // Hide reset password
    handleResetPassword(resetTitle) {
        this.setState(() => ({ resetTitle }));
    }

    render() {
        return (
            <Modal
                style={customStyles}
                isOpen={!!this.props.loginPopUp}
                onRequestClose={this.props.hideAuthPopUp}
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
                            onClick={this.props.hideAuthPopUp}
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                        {/**
                         * Switch between sign up, login and reset-password titles dynamically
                         */}
                         
                        <h4 className="modal-title" id="myModalLabel">
                            {(!!this.state.resetTitle && <span><span className="glyphicon glyphicon-lock"></span> Reset your Password!</span>) || (!!this.state.loginPopUp && 'Login to E-Isich') || (this.state.loginPopUp === false && 'Create E-Isich account')}
                        </h4>
                    </div>
                    {this.state.loginPopUp ? <LoginPage
                        handleSwithAuth={this.handleSwithAuth}
                        handleResetPassword={this.handleResetPassword}
                    /> : <SignupPage
                            handleSwithAuth={this.handleSwithAuth}
                        />/* Toggle between sign up and login */}
                </div>
            </Modal>
        );
    }
}