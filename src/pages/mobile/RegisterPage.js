import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from "formik";

import AccountPage from '../AccountPage';
import NavBar from '../../components/NavBar';
import { validationSchema } from '../../utils/validate';


const RegisterPage = props => {
    return (
        <Fragment>
        	<div className="mobile-authentication">
        		<div className="app-brand">
                    <NavLink
                        className="display-1 mobile-app-brand"
                        to="/"
                    >
                        <p>E-Isich</p>
                    </NavLink>
        		</div>
        		<div className="mobile-authentication__container">
					<div className="login-register">
						<div className="login-register__container">
			                <NavLink
			                	to="/user/mobile/login"
			                ><p className="mobile-auth-link">LOGIN</p></NavLink>
			                <NavLink
			                	to="/user/mobile/register"
			                ><p className="mobile-auth-link">REGISTER</p></NavLink>
			            </div>
		            </div>

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
                            setSubmitting(true);
                            props.registerSuccess(values, setSubmitting, resetForm)
                        }}
                    >
                        {({ touched, errors, isSubmitting, values, filters }) => (
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
                    </Formik>
	            </div>
        	</div>
        </Fragment>
    );
}

const mapStateToProps = (state) => ({
    resMessages: state.resMessages,
    authentication: state.authentication
});

const mapDispatchToProps = (dispatch) => ({
    registerSuccess: (payload, setSubmitting, resetForm) => dispatch(registerSuccess(payload, setSubmitting, resetForm)),
    // openAuthPopUp: () => dispatch(openAuthPopUp()),
    // loadUser: () => dispatch(loadUser()),
    // signOutUser: () => dispatch(signOutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);