/**
 * This file contains the Login Page component
 */


import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import clientStorage from '../utils/clientStorage';


const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address format")
        .required("Email is required"),
    password: Yup.string()
        .min(3, "Password must be 3 characters at minimum")
        .required("Password is required")
});

export default class LoginPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(new clientStorage())
        return (
            <div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-xs-6">
                            <div className="well">
                                <Formik
                                    initialValues={{ email: "", password: "" }}
                                    validationSchema={LoginSchema}
                                    onSubmit={({ setSubmitting }) => {
                                        alert("Form is validated! Submitting the form...");
                                        setSubmitting(false);
                                    }}
                                >
                                    {({ touched, errors, isSubmitting }) => (
                                        <Form>
                                            <div className="form-group">
                                                <label htmlFor="email" className="control-label">Email</label>
                                                <Field
                                                    type="email"
                                                    name="email"
                                                    placeholder="Enter your email"
                                                    className={`m-font-size form-control ${
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
                                                    <input type="checkbox" name="remember" id="remember" /> Remember login
                                                </label>
                                                <p className="help-block">(if this is a private computer)</p>
                                            </div>
                                            <button
                                                type="submit"
                                                className="btn btn-success btn-block m-font-size"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? "Please wait..." : "Login"}
                                            </button>
                                            <a href="/forgot/" className="btn btn-default btn-block m-font-size forgot-pass">Forgot password?</a>
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
                </div>
            </div>
        );
    }
};