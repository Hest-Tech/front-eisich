/**
 * This file contains the Login Page component
 */

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { connect } from 'react-redux';

import { LoginSchema } from '../../utils/validate';
import { loginUser } from '../../actions/authentication';
import ForgotPassword from './ForgotPassword';


class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.resetPassword = this.resetPassword.bind(this);
        this.hideResetPassword = this.hideResetPassword.bind(this);

        this.state = {
            resetPopUp: undefined
        }
    }

    componentDidMount() {
        console.log(this.props.authentication);
    }

    componentWillUnmount() {
        this.props.handleResetPassword(undefined); // set resetTitle to undefined
    }

    // show reset password
    resetPassword(e) {
        e.preventDefault();
        this.props.handleResetPassword(true);
        this.setState((prevState) => ({
            resetPopUp: !prevState.resetPopUp
        }));
    }

    // hide reset password
    hideResetPassword(e) {
        e.preventDefault();
        this.props.handleResetPassword(undefined);
        this.setState(() => ({ resetPopUp: undefined }));
    }

    render() {
        return (
            <div>
                {this.state.resetPopUp ? <ForgotPassword hideResetPassword={this.hideResetPassword} /> : <div
                    className="modal-body">
                    <div className="row">
                        <div className="col-xs-6">
                            <div className="well">
                                {this.props.resMessages.msg && <div className="alert alert-danger home-page-alert" role="alert">
                                    {this.props.resMessages.msg}
                                </div>}

                                <Formik
                                    initialValues={{ email: "", password: "", remember: false }}
                                    validationSchema={LoginSchema}
                                    onSubmit={(values, { setSubmitting, resetForm }) => {
                                        setSubmitting(true);

                                        this.props.loginUser(values.email, values.password, setSubmitting);
                                        console.log('==>', this.props.resMessages);
                                    }}
                                >
                                    {({ touched, errors, isSubmitting, values, filters }) => (
                                        <Form>
                                            <div className="form-group">
                                                <label htmlFor="email" className="control-label">Email</label>
                                                <Field
                                                    type="email"
                                                    name="email"
                                                    placeholder="Enter your email"
                                                    className={`form-control ${
                                                        touched.email && errors.email ? "is-invalid" : ""
                                                        }`}
                                                />
                                                <ErrorMessage
                                                    component="div"
                                                    name="email"
                                                    className="invalid-feedback"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password" className="control-label">Password</label>
                                                <Field
                                                    type="password"
                                                    name="password"
                                                    placeholder="Enter your password"
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
                                            <div className="checkbox">
                                                <label>
                                                    <Field
                                                        type="checkbox"
                                                        name="remember"
                                                        id="remember"
                                                        checked={values.remember}
                                                    /> Remember login
                                                </label>
                                                <p className="help-block">(if this is a private computer)</p>
                                            </div>
                                            <button
                                                type="submit"
                                                className="btn btn-success btn-block"
                                                // onClick={this.redirect.bind(this)}
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? <div className="spinner-border text-warning"></div> : "Login"}
                                            </button>
                                            <a
                                                href=""
                                                className="btn btn-default btn-block forgot-pass"
                                                onClick={this.resetPassword}
                                            >Forgot password?</a>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <p className="lead">Register now for <span className="text-success">FREE</span></p>
                            <ul className="list-unstyled" style={{ lineHeight: 2 }}>
                                <li><span className="fa fa-check text-success"></span> See all your orders</li>
                                <li><span className="fa fa-check text-success"></span> Fast re-order</li>
                                <li><span className="fa fa-check text-success"></span> Save your favorites</li>
                                <li><span className="fa fa-check text-success"></span> Fast checkout</li><br />
                            </ul>
                            <p
                                className="register-btn"
                                onClick={this.props.handleSwithAuth}>
                                <button
                                    className="btn btn-info btn-block m-font-size"
                                >
                                    Register now!
                                </button>
                            </p>
                        </div>
                    </div>
                </div>}
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    resMessages: state.resMessages
});

const mapDispatchToProps = (dispatch) => ({
    loginUser: (email, password, setSubmitting) => dispatch(loginUser(email, password, setSubmitting))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);