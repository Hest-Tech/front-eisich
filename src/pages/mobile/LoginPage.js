import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from "formik";

import AccountPage from '../AccountPage';
import NavBar from '../../components/NavBar';
import { LoginSchema } from '../../utils/validate';
import {
    loginUser,
} from '../../actions/authentication';
import { history } from '../../routes/AppRouter';


const LoginPage = (props) => {

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
		            	className="mobile-login-page"
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
                            let actions = {
                                user,
                                resetForm,
                                setSubmitting,
                                action: 'LOGIN_ACTION'
                            }

                            this.props.loginUser(actions)
                        }}
                    >
                        {({ touched, errors, isSubmitting, values, filters }) => (
                            <Form>
                                <div className="form-group">
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
                                    onClick={(e) => {
										e.preventDefault();
							    	    return props.resetPassForm();
                                    }}
                                >Forgot password?</a>
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
    loginUser: (actions) => dispatch(loginUser(actions))
    // openAuthPopUp: () => dispatch(openAuthPopUp()),
    // loadUser: () => dispatch(loadUser()),
    // signOutUser: () => dispatch(signOutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);