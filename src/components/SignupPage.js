/**
 * This file contains the Sign up Page component
 */


import React from 'react';
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";


export default class SignupPage extends React.Component {
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
                    <FormikSignUp />
                    <div className="switch-to-login">
                        <p>Already have an account? <a href="" onClick={this.props.handleSwithAuth}>Login</a> instead</p>
                    </div>
                </div>
            </div>
        );
    }
}

const App = ({ values, errors, touched }) => (
    <Form className="sign-up__form">
        <div className="form-row">
            <div className="form-group col-md-6">
                <div>
                    <Field
                        value={values.firstName}
                        type="text"
                        className="form-control"
                        name="firstName"
                        placeholder="First Name"
                    />
                    {touched.firstName && errors.firstName && <p className="error-paragraph">{errors.firstName}</p>}
                </div>
            </div>
            <div className="form-group col-md-6">
                <div>
                    <Field
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="form-control"
                    />
                    {touched.lastName && errors.lastName && <p className="error-paragraph">{errors.lastName}</p>}
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
                        className="form-control"
                    />
                    {touched.email && errors.email && <p className="error-paragraph">{errors.email}</p>}
                </div>
            </div>
            <div className="form-group col-md-6">
                <div>
                    <Field
                        type="number"
                        name="phoneNumber"
                        placeholder="Phonenumber"
                        className="form-control"
                    />
                    {touched.phoneNumber && errors.phoneNumber && <p className="error-paragraph">{errors.phoneNumber}</p>}
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
                        className="form-control"
                    />
                    {touched.password && errors.password && <p className="error-paragraph">{errors.password}</p>}
                </div>
            </div>
            <div className="form-group col-md-6">
                <div>
                    <Field
                        type="password"
                        name="confirm-password"
                        placeholder="Confirm password"
                        className="form-control"
                    />
                    {touched.confirmPassword && errors.confirmPassword && <p className="error-paragraph">{errors.confirmPassword}</p>}
                </div>
            </div>
        </div>
        <div className="form-row">
            <div className="form-group col-md-6">
                <button
                    type="submit"
                    className="btn btn-primary col-md-6"
                >
                    Sign in
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
                {touched.terms && errors.terms && <p className="error-paragraph">{errors.terms}</p>}
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
);

const FormikSignUp = withFormik({
    mapPropsToValues({
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
        confirmPassword,
        terms
    }) {
        return {
            firstName: firstName || "",
            lastName: lastName || "",
            phoneNumber: phoneNumber || "",
            email: email || "",
            password: password || "",
            confirmPassword: confirmPassword || "",
            terms: terms || false
        }
    },
    validationSchema: Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('First name is required'),
        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Last name is required'),
        phoneNumber: Yup.number()
            .min(8, 'Too Short!')
            .required("Phone number is required"),
        email: Yup.string()
            .email("Invalid email address format")
            .required("Email is required"),
        password: Yup.string()
            .min(3, "Password must be 3 characters at minimum")
            .required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], "Does not match with field1!")
            .required('Required'),
        agreeToTerms: Yup.boolean()
            .test(
                'is-true',
                'Must agree to terms to continue',
                value => value === true
            ),
    }),
    handleSubmit(values) {
        console.log(values)
    }
})(App)