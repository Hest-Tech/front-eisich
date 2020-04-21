import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";

import { ResetPassSchema } from '../../utils/validate';

const PasswordForm = (props) => (
    <Formik
        initialValues={{
            currentPassword: "",
            newPassword: "",
            confirmPassword: ""
        }}
        validationSchema={ResetPassSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(values);
            setSubmitting(true);

            const currentPass = values.currentPassword;
            const newPass = values.newPassword;

            props.changePasswordValue(currentPass, newPass, resetForm, setSubmitting);
        }}
    >
        {({ touched, errors, isSubmitting, values, filters }) => (
            <Form className="col-md-6 md-form">
                <div className="form-group">
                    <label htmlFor="currentPassword"><small className="text-muted">Current Password</small></label>
                    <Field
                        type="password"
                        name="currentPassword"
                        id="currentPassword"
                        placeholder="Current Password"
                        className={`form-control ${
                            touched.currentPassword && errors.currentPassword ? "is-invalid" : ""
                            }`}
                    />
                    <ErrorMessage
                        component="div"
                        name="currentPassword"
                        className="invalid-feedback"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="newPassword"><small className="text-muted">New Password</small></label>
                    <Field
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        placeholder="Enter New Password"
                        className={`form-control ${
                            touched.newPassword && errors.newPassword ? "is-invalid" : ""
                            }`}
                    />
                    <ErrorMessage
                        component="div"
                        name="newPassword"
                        className="invalid-feedback"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword"><small className="text-muted">Retype New Password</small></label>
                    <Field
                        id="confirmPassword"
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
                <button
                    type="submit"
                    className="btn btn-warning btn-block btn-change-pass"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? <div className="spinner-border text-success"></div> : "SAVE"}
                </button>
            </Form>
        )}
    </Formik>
);

export default PasswordForm;