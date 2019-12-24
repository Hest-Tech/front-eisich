import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from "formik";

import NavBar from '../NavBar';
import AccountMenu from './AccountMenu';
import { LoginSchema } from '../../utils/validate';
import fire from '../../firebase/firebase';


const ChangePassword = () => (
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
                            initialValues={{ email: "", password: "", remember: false }}
                            validationSchema={LoginSchema}
                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                console.log(values);
                            }}
                        >
                            {({ touched, errors, isSubmitting, values, filters }) => (
                                <Form className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="birthday"><small className="text-muted">Current Password</small></label>
                                        <Field
                                            type="password"
                                            name="currentPassword"
                                            placeholder="Current Password"
                                            className={`form-control ${
                                                touched.password && errors.password ? "is-invalid" : ""
                                                }`}
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="password"
                                            className="invalid-feedback"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="birthday"><small className="text-muted">New Password</small></label>
                                        <Field
                                            type="password"
                                            name="newPassword"
                                            placeholder="Enter New Password"
                                            className={`form-control ${
                                                touched.password && errors.password ? "is-invalid" : ""
                                                }`}
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="password"
                                            className="invalid-feedback"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="birthday"><small className="text-muted">Retype New Password</small></label>
                                        <Field
                                            type="password"
                                            name="retypeNewPassword"
                                            placeholder="Retype New Password"
                                            className={`form-control ${
                                                touched.password && errors.password ? "is-invalid" : ""
                                                }`}
                                        />
                                        <ErrorMessage
                                            component="div"
                                            name="password"
                                            className="invalid-feedback"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-warning btn-block btn-change-pass"
                                        // onClick={this.redirect.bind(this)}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? <div className="spinner-border text-warning"></div> : "SUBMIT"}
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

const mapStateToProps = (state) => ({
    authentication: state.authentication,
    resMessages: state.resMessages
});

export default connect(mapStateToProps)(ChangePassword);