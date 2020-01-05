/**
 * This file contains the Login Page component
 */

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { connect } from 'react-redux';

import { LoginSchema } from '../../utils/validate';
import {
    resetPassForm,
    signupForm,
    loginUser,
    closeAuthPopUp
} from '../../actions/authentication';
import ResetPassword from './ResetPassword';
import { history } from '../../routes/AppRouter';


class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.resetPass = this.resetPass.bind(this);
        this.register = this.register.bind(this);
        this.socialMediaSignIn = this.socialMediaSignIn.bind(this);
    }

    resetPass(e) {
        e.preventDefault();
        return this.props.resetPassForm();
    }

    register(e) {
        e.preventDefault();
        return this.props.signupForm();
    }

    socialMediaSignIn(e) {
        let socialMedia = e.target.textContent.toLowerCase().trim();

        switch(socialMedia) {
            case 'google':
                console.log(socialMedia);
                this.props.loginUser(socialMedia);
                this.props.closeAuthPopUp();
                break;
            case 'facebook':
                console.log(socialMedia);
                this.props.closeAuthPopUp();
                break;
            case 'twitter':
                console.log(socialMedia);
                this.props.closeAuthPopUp();
                break;
        }
    }

    componentWillUnMount() {
        console.log('login modal unmouted')
    }

    render() {
        return (
            <React.Fragment>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-xs-6">
                            <div className="well">
                                {this.props.resMessages.error && <div className="alert alert-danger home-page-alert" role="alert">
                                    {this.props.resMessages.error}
                                </div>}

                                <Formik
                                    initialValues={{ email: "", password: "", remember: false }}
                                    validationSchema={LoginSchema}
                                    onSubmit={(values, { setSubmitting, resetForm }) => {
                                        setSubmitting(true);

                                        let user = {
                                            email: values.email,
                                            password: values.password,
                                            resetForm: resetForm,
                                            setSubmitting: setSubmitting
                                        };

                                        this.props.loginUser(user, resetForm, setSubmitting)
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
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? <div className="spinner-border text-warning"></div> : "Login"}
                                            </button>
                                            <a
                                                href=""
                                                className="btn btn-default btn-block forgot-pass"
                                                onClick={this.resetPass}
                                            >Forgot password?</a>
                                        </Form>
                                    )}
                                </Formik>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <div className="or-seperator"><i>or</i></div>
                                        <p className="text-center">Login with your social media account</p>
                                        <div className="text-center social-btn">
                                            <button
                                                onClick={this.socialMediaSignIn}
                                                className="btn btn-primary"
                                            >
                                                <i className="fa fa-facebook"></i>&nbsp; Facebook
                                            </button>
                                            <button
                                                onClick={this.socialMediaSignIn}
                                                className="btn btn-info"
                                            >
                                                <i className="fa fa-twitter"></i>&nbsp; Twitter
                                            </button>
                                            <button
                                                onClick={this.socialMediaSignIn}
                                                className="btn btn-danger"
                                            >
                                                <i className="fa fa-google" aria-hidden="true"></i> Google
                                            </button>
                                        </div>
                                    </div>
                                </div>
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
                                onClick={this.register}>
                                <button
                                    className="btn btn-info btn-block m-font-size"
                                >
                                    Register now!
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
};

const mapStateToProps = (state) => ({
    resMessages: state.resMessages,
    authentication: state.authentication
});

const mapDispatchToProps = (dispatch) => ({
    resetPassForm: () => dispatch(resetPassForm()),
    signupForm: () => dispatch(signupForm()),
    closeAuthPopUp: () => dispatch(closeAuthPopUp()),
    loginUser: (user, resetForm, setSubmitting) => dispatch(loginUser(user, resetForm, setSubmitting))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);