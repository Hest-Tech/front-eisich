import React from 'react';
import { Form, Field, Formik, ErrorMessage } from "formik";

import { updateAccountSchema } from '../../utils/validate';
import { updateAccount } from '../../actions/authentication';

const UpdateAccountForm = (props) => (
	<Formik
        initialValues={{
            firstName: "",
            lastName: "",
            phoneNumber: props.phoneNumber,
            email: props.email,
            birthday: "",
            gender: ""
        }}
        validationSchema={updateAccountSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);

            props.updateAccount(values, setSubmitting, resetForm);
        }}
    >
        {({ values, errors, touched, isSubmitting, filters }) => (
            <Form className="sign-up__form md-form">
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <div>
                            <label htmlFor="firstName"><small className="text-muted">First Name</small></label>
                            <Field
                                type="text"
                                id="firstName"
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
                            <label htmlFor="lastName"><small className="text-muted">Last Name</small></label>
                            <Field
                                type="text"
                                name="lastName"
                                id="lastName"
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
                            <label htmlFor="email"><small className="text-muted">Email</small></label>
                            <Field
                                type="email"
                                name="email"
                                id="email"
                                disabled="disabled"
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
                            <label htmlFor="phone"><small className="text-muted">Phone Number (optional)</small></label>

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
                            <label htmlFor="gender"><small className="text-muted">Gender (optional)</small></label>
                            <Field
                                as="select"
                                name="gender"
                                className="col-md-10 form-control"
                                id="gender"
                            >
                                <option defaultValue="Please Select">Please Select</option>
                                <option defaultValue="1">Male</option>
                                <option defaultValue="2">Female</option>
                                <option defaultValue="3">Other</option>
                            </Field>
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <div>
                            <label htmlFor="birthday"><small className="text-muted">Birthday (optional)</small></label>
                            <Field
                                name="birthday"
                                id="birthday"
                                placeholder="Birthday"
                                className={`form-control ${
                                    touched.birthday && errors.birthday ? "is-invalid" : ""
                                    }`}
                            />
                            <ErrorMessage
                                component="div"
                                name="birthday"
                                className="invalid-feedback"
                            />
                        </div>
                    </div>
                </div> <br />
                <div className="form-row">
                    <div className="form-group col-md-12 save-btn">
                        <button
                            type="submit"
                            className="btn btn-warning col-md-6 mb-btn-submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? <div className="spinner-border text-warning"></div> : "SAVE"}
                        </button>
                    </div>
                </div>
            </Form>
        )}
    </Formik>
);

export default UpdateAccountForm;