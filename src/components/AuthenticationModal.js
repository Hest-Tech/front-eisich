import React from 'react';
import Modal from 'react-modal';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';


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
        this.handleToggleAuth = this.handleToggleAuth.bind(this);

        this.state = {
            loginPopUp: true
        }
    }

    handleToggleAuth(e) {
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
                        handleToggleAuth={this.handleToggleAuth}
                        hideLoginPopUp={this.props.hideLoginPopUp}
                    /> : <SignupPage
                        handleToggleAuth={this.handleToggleAuth}
                    />}
                </div>
            </Modal>
        );
    }
}