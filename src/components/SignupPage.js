/**
 * This file contains the Sign up Page component
 */


import React from 'react';
import { Formik, Form, Field, ErrorMessage, withFormik } from "formik";
import * as Yup from "yup";


// const LoginSchema = Yup.object().shape({
//     firstName: Yup.string()
//         .min(2, 'Too Short!')
//         .max(50, 'Too Long!')
//         .required('First name is required'),
//     lastName: Yup.string()
//         .min(2, 'Too Short!')
//         .max(50, 'Too Long!')
//         .required('Last name is required'),
//     phoneNumber: Yup.number()
//         .min(8, 'Too Short!')
//         .max(11, 'Too Long!')
//         .required("Email is required"),
//     email: Yup.string()
//         .email("Invalid email address format")
//         .required("Email is required"),
//     password: Yup.string()
//         .min(3, "Password must be 3 characters at minimum")
//         .required("Password is required"),
//     confirmPassword: Yup.string()
//         .email("Invalid email address format")
//         .required("Email is required")
//         .test(
//             'passwords-match',
//             "Passwords don't match",
//             value => this.parent.password === value
//         ),
//     agreeToTerms: Yup.boolean()
//         .test(
//             'is-true',
//             'Must agree to terms to continue',
//             value => value === true
//         ),
// });

class SignupPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

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
                    <b className="sign-up__title">Sign Up</b>
                    <Formik
                        initialValues={{
                            firstName: "",
                            lastname: "",
                            email: "",
                            phoneNumber: "",
                            password: "",
                            confirmPassword: "",
                            agreeToTerms: false
                        }}
                        validationSchema={LoginSchema}
                        onSubmit={({ setSubmitting }) => {
                            alert("Form is validated! Submitting the form...");
                            setSubmitting(false);
                        }}
                    >
                        <Form className="sign-up__form">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <Field

                                        type="text"
                                        className={`form-control ${
                                            touched.firstName && errors.firstName ? "is-invalid" : ""
                                            }`}
                                        name="first-name" value=""
                                        placeholder="First Name"
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="firstName"
                                        className="invalid-feedback"
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <Field
                                        type="text"
                                        name="lasName"
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
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className={`form-control${
                                            touched.email && errors.email ? "is-invalid" : ""
                                            }`}
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="email"
                                        className="invalid-feedback"
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <Field
                                        type="number"
                                        name="phonenumber"
                                        placeholder="Phonenumber"
                                        className={`form-control${
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
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <Field
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        className={`form-control${
                                            touched.password && errors.password ? "is-invalid" : ""
                                            }`}
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="password"
                                        className="invalid-feedback"
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <Field
                                        type="password"
                                        name="confirm-password"
                                        placeholder="Confirm password"
                                        className={`form-control${
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
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <button
                                        type="submit"
                                        className="btn btn-primary col-md-6"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? "Please wait..." : "Sign in"}
                                    </button>
                                </div>
                            </div>
                            <label>
                                <Field
                                    type="checkbox"
                                    name="remember"
                                    id="remember"
                                // formikKey="agreeToTerms"
                                // formikProps={formikProps}
                                /> I agree to terms of service
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
                    </Formik>
                    <div className="switch-to-login">
                        <p>Already have an account? <a href="" onClick={this.props.handleSwithAuth}>Login</a> instead</p>
                    </div>
                </div>
            </div>
        );
    }
}

export const FormikSignUp = withFormik({
    mapPropsToValues
})(SignupPage)