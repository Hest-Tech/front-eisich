/**
 * This file contains the Authentication modal
 */

import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';

import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import ResetPassword from './ResetPassword';
import { closeAuthPopUp } from '../../actions/authentication';


// Custom styles for the authentication modal
const customStyles = {
    overlay: { zIndex: 1000 },
    content: {
        top: '2%',
        width: '70%'
    }
};

Modal.setAppElement('body');

class AuthenticationModal extends React.Component {

    constructor(props) {
        super(props);
        this.toggleAuth = this.toggleAuth.bind(this);

        this.state = {
            loginPopUp: true,
            resetTitle: undefined
        }
    }

    toggleAuth() {
        if (this.props.authentication.loggingIn) {
            return <LoginPage />
        } else if (this.props.authentication.registering) {
            return <SignupPage />
        } else if (this.props.authentication.resetingPass) {
            return <ResetPassword />
        }
    }

    render() {
        return (
            <Modal
                style={customStyles}
                isOpen={this.props.authentication.openAuthPopUp}
                onRequestClose={() => this.props.authentication.closeAuthPopUp}
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
                            onClick={this.props.closeAuthPopUp}
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                         
                        <h4 className="modal-title" id="myModalLabel">
                            {(this.props.authentication.resetingPass && <span><span className="glyphicon glyphicon-lock"></span> Reset your Password!</span>) || (this.props.authentication.loggingIn && 'Login to E-Isich') || (this.props.authentication.registering && 'Create E-Isich account')}
                        </h4>
                    </div>
                    { this.toggleAuth() }
                </div>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => ({
    authentication: state.authentication
});

const mapDispatchToProps = (dispatch) => ({
    closeAuthPopUp: () => dispatch(closeAuthPopUp())
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticationModal);