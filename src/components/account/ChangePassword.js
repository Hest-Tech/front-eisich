import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from "formik";
import firebase from 'firebase/app';

import NavBar from '../NavBar';
import AccountMenu from './AccountMenu';
import fire from '../../firebase/firebase';
import { ResetPassSchema } from '../../utils/validate';
import { history } from '../../routes/AppRouter';
import { returnMessages } from '../../actions/resMessages';


const ChangePassword = (props) => {

    const reauthenticate = (currentPassword) => {
        const user = fire.auth().currentUser;
        const cred = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);

        return user.reauthenticateWithCredential(cred);
    }
    const changePassword = (currentPassword, newPassword, resetForm, setSubmitting) => {
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
                            <Formik
                                initialValues={{
                                    currentPassword: "",
                                    newPassword: "",
                                    confirmPassword: ""
                                }}
                                validationSchema={ResetPassSchema}
                                onSubmit={(values, { setSubmitting, resetForm }) => {
                                    console.log(values);
                                    setSubmitting(true);

                                    const currentPass = values.currentPassword;
                                    const newPass = values.newPassword;

                                    changePassword(currentPass, newPass, resetForm, setSubmitting);
                                }}
                            >
                                {({ touched, errors, isSubmitting, values, filters }) => (
                                    <Form className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="currentPassword"><small className="text-muted">Current Password</small></label>
                                            <Field
                                                type="password"
                                                name="currentPassword"
                                                id="currentPassword"
                                                placeholder="Current Password"
                                                className={`form-control ${
                                                    touched.currentPassword && errors.currentPassword ? "is-invalid" : ""
                                                    }`}
                                            />
                                            <ErrorMessage
                                                component="div"
                                                name="currentPassword"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="newPassword"><small className="text-muted">New Password</small></label>
                                            <Field
                                                type="password"
                                                id="newPassword"
                                                name="newPassword"
                                                placeholder="Enter New Password"
                                                className={`form-control ${
                                                    touched.newPassword && errors.newPassword ? "is-invalid" : ""
                                                    }`}
                                            />
                                            <ErrorMessage
                                                component="div"
                                                name="newPassword"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="confirmPassword"><small className="text-muted">Retype New Password</small></label>
                                            <Field
                                                id="confirmPassword"
                                                type="password"
                                                name="confirmPassword"
                                                placeholder="Confirm password"
                                                className={`form-control ${
                                                    touched.confirmPassword && errors.confirmPassword ? "is-invalid" : ""
                                                    }`}
                                            />
                                            <ErrorMessage
                                                component="div"
                                                name="confirmPassword"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn btn-warning btn-block btn-change-pass"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? <div className="spinner-border text-success"></div> : "SAVE"}
                                        </button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
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