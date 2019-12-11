/**
 * This file contains the Sign up Page component
 */

import React from 'react';
import { Form, Field, Formik, ErrorMessage } from "formik";
import { connect } from 'react-redux';

import fire from '../../firebase/firebase';
import { validationSchema } from '../../utils/validate';
import { returnMessages } from '../../actions/resMessages';


class SignupPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
        }
    }

    render() {
        return (
            <div className="sign-up-container">
                <div className="sign-up__extra-content">
                    <h3>E-ISICH</h3>
                    <b>For the more information</b>
                    <p>Quickly get information from new leads and customers by signing up .With their information, you can funnel them into new accounts in an instant. Check out our social media</p><br />

                    <div className="subscribe-social-media">
                        <img className="social-media" src="facebook.svg" alt="facebook" />
                        <img className="social-media" src="twitter.svg" alt="twitter" />
                        <img className="social-media" src="instagram.svg" alt="instagram" />
                        <img className="social-media" src="pinterest.svg" alt="pinterest" />
                    </div>
                </div>
                <div className="sign-up__details">
                    {this.state.error && <div className="alert alert-danger" role="alert">
                        {this.state.error}
                    </div>}
                    <b className="sign-up__title">Sign Up</b>
                    {/** formik validation form */}

                    <Formik
                        initialValues={{
                            firstName: "",
                            lastName: "",
                            phoneNumber: "",
                            email: "",
                            password: "",
                            confirmPassword: "",
                            terms: false
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            // console.log("Form is validated! Submitting the form...");
                            setSubmitting(true);
                            let that = this
                            fire.auth()
                                .createUserWithEmailAndPassword(values.email, values.password)
                                .then(function (user) {
                                    let ref = fire.database().ref().child(`user`);
                                    let data = {
                                        email: values.email,
                                        password: values.password,
                                        phoneNumber: values.phoneNumber.toString(),
                                        firstName: values.firstName,
                                        lastName: values.lastName,
                                        id: authenticatedUser.user.uid
                                    }
                                    ref.child(user.uid).set(data).then(function (ref) {
                                        console.log('saved');
                                        setSubmitting(false);
                                        that.setState(() => ({ error: null }));
                                        resetForm();
                                        this.props.handleSwithAuth()
                                        this.props.dispatch(returnMessages('Account created. Please Log in'));
                                    }, function (error) {
                                        console.log(error);
                                    });
                                }).catch(function (error) {
                                    // that.setState(() => ({ error: error.message }));
                                    setSubmitting(false);
                                    console.log('---->', error.message);
                                    console.log(error);
                                });
                            // return registerSuccess(values); // dispatch
                        }}
                    >
                        {({ values, errors, touched, isSubmitting, filters }) => (
                            <Form className="sign-up__form">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <div>
                                            <Field
                                                type="text"
                                                name="firstName"
                                                placeholder="First Name"
                                                className={`form-control ${
                                                    touched.firstName && errors.firstName ? "is-invalid" : ""
                                                    }`}
                                            />
                                            <ErrorMessage
                                                component="div"
                                                name="firstName"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <div>
                                            <Field
                                                type="text"
                                                name="lastName"
                                                placeholder="Last Name"
                                                className={`form-control ${
                                                    touched.lastName && errors.lastName ? "is-invalid" : ""
                                                    }`}
                                            />
                                            <ErrorMessage
                                                component="div"
                                                name="lastName"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <div>
                                            <Field
                                                type="email"
                                                name="email"
                                                placeholder="Email"
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
                                    </div>
                                    <div className="form-group col-md-6">
                                        <div>
                                            <Field
                                                type="number"
                                                name="phoneNumber"
                                                placeholder="Phonenumber"
                                                className={`form-control ${
                                                    touched.phoneNumber && errors.phoneNumber ? "is-invalid" : ""
                                                    }`}
                                            />
                                            <ErrorMessage
                                                component="div"
                                                name="phoneNumber"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <div>
                                            <Field
                                                type="password"
                                                name="password"
                                                placeholder="Password"
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
                                    </div>
                                    <div className="form-group col-md-6">
                                        <div>
                                            <Field
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
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <button
                                            type="submit"
                                            className="btn btn-primary col-md-6"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? <div className="spinner-border text-warning"></div> : "Sign up"}
                                        </button>
                                    </div>
                                </div>
                                <label className="terms-checkbox">
                                    <div>
                                        <Field
                                            type="checkbox"
                                            name="terms"
                                            checked={values.terms}
                                        /> I agree to terms of service
                                    </div>
                                </label>
                            </Form>
                        )}
                    </Formik >
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <div className="or-seperator"><i>or</i></div>
                            <p className="text-center">Sign up with your social media account</p>
                            <div className="text-center social-btn">
                                <button
                                    // onClick={renderProps.onClick}
                                    className="btn btn-primary"
                                >
                                    <i className="fa fa-facebook"></i>&nbsp; Facebook
                                </button>
                                <button
                                    // onClick={renderProps.onClick}
                                    className="btn btn-info"
                                >
                                    <i className="fa fa-twitter"></i>&nbsp; Twitter
                                </button>
                                <button
                                    // onClick={renderProps.onClick}
                                    className="btn btn-danger"
                                >
                                    <i className="fa fa-google" aria-hidden="true"></i> Google
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="switch-to-login">
                        <p>Already have an account? <a href="" onClick={this.props.handleSwithAuth}>Login</a> instead</p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
})

export default connect(mapStateToProps)(SignupPage);