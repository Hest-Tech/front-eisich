import React from 'react';
import Modal from 'react-modal';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';


const customStyles = {
    overlay: { zIndex: 1000 },
    content: {
        top: '5%'
    }
};

Modal.setAppElement('body');

export default class AuthenticationModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loginPopUp: true
        }
    }

    render() {
        return (
            <Modal
                style={customStyles}
                // isOpen={!!this.props.loginPopUp}
                isOpen={true}
                onRequestClose={this.props.hideLoginPopUp}
                contentLabel="Login details"
                id="login-overlay"
                className="modal-dialog"
            >
                <div className="modal-content">
                    {this.state.loginPopUp ? <LoginPage /> : <SignupPage />}
                </div>
            </Modal>
        );
    }
}