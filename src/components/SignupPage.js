/**
 * This file contains the Sign up Page component
 */


import React from 'react';
import { Form, Field, Formik, ErrorMessage } from "formik";

import { validationSchema } from '../utils/validate';


export default class SignupPage extends React.Component {
    constructor(props) {
        super(props);
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
                    <b className="sign-up__title">Sign Up</b>
                    <FormikSignUp />
                    <div className="switch-to-login">
                        <p>Already have an account? <a href="" onClick={this.props.handleSwithAuth}>Login</a> instead</p>
                    </div>
                </div>
            </div>
        );
    }
}

const FormikSignUp = () => (
    /** formik validation form */
    
    <Formik
        initialValues = {{
            firstName:  "",
            lastName: "",
            phoneNumber: "",
            email: "",
            password: "",
            confirmPassword: "",
            terms: false
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
            alert("Form is validated! Submitting the form...");
            setSubmitting(false);
            console.log(values);
        }}
    >
        {({ values, errors, touched, isSubmitting }) => (
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
                            {isSubmitting ? "Please wait..." : "Sign up"}
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
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <div className="or-seperator"><i>or</i></div>
                        <p className="text-center">Sign up with your social media account</p>
                        <div className="text-center social-btn">
                            <a href="#" className="btn btn-primary"><i className="fa fa-facebook"></i>&nbsp; Facebook</a>
                            <a href="#" className="btn btn-info"><i className="fa fa-twitter"></i>&nbsp; Twitter</a>
                            <a href="#" className="btn btn-danger"><i className="fa fa-google"></i>&nbsp; Google</a>
                        </div>
                    </div>
                </div>
            </Form>
        )}
    </Formik>
);