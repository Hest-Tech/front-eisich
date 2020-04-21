import React from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase/app';
import { NavLink } from 'react-router-dom';

import NavBar from '../NavBar';
import AccountMenu from './AccountMenu';
import fire from '../../firebase/firebase';
import { ResetPassSchema } from '../../utils/validate';
import { history } from '../../routes/AppRouter';
import { returnMessages } from '../../actions/resMessages';
import PasswordForm from './PasswordForm';


const ChangePassword = (props) => {

    const reauthenticate = (currentPassword) => {
        const user = fire.auth().currentUser;
        const cred = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);

        return user.reauthenticateWithCredential(cred);
    }
    const changePasswordValue = (currentPassword, newPassword, resetForm, setSubmitting) => {
        reauthenticate(currentPassword)
            .then(() => {
                const user = fire.auth().currentUser;

                user.updatePassword(newPassword)
                    .then(() => {
                        console.log("Password updated!");
                        resetForm();
                        setSubmitting(false);
                        history.push('/customer/account');
                        props.returnMessages('Password updated successfully', 200, 'SUCCESS_RESET_PASS_MSG')
                    })
                    .catch(error => console.log('==>', error));
            })
            .catch((error) => console.log(error));
    }

    return (
        <div className="account-menu-container account-background">
            <div className="wrapper-acc-pg">
                <div className="nav-bar-wrapper">
                    <NavBar />
                </div>
                <div className="account-container">
                    <div className="account-menu-sec acc-sec">
                        <AccountMenu />
                    </div>
                    <span></span>
                    <div className="accout-detail-sec acc-sec">
                        <div className="account-det-background">
                            <h1 className="account-overview-title">Change Password</h1>
                            <div className="row">
                                <PasswordForm
                                    changePasswordValue={changePasswordValue}
                                />
                            </div>
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
                    <span className="section-title-name"><h1 className="account-overview-title">Change Password</h1></span>
                </div>
                <div className="mb-row row">
                    <PasswordForm />
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    authentication: state.authentication,
    resMessages: state.resMessages
});

const mapDispatchToProps = (dispatch) => ({
    returnMessages: (msg, code, id) => dispatch(returnMessages(msg, code, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);