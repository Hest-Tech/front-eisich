import React, { useState } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { Formik, Form, Field, ErrorMessage } from "formik";

import { LoginSchema } from '../../utils/validate';
import { addressBookForm } from '../../actions/authentication';


const customStyles = {
    overlay: {
        zIndex: 1000
    },
    content: {
        top: '2%',
        width: '70%'
    }
};

class AddressBookForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal
                style={customStyles}
                isOpen={this.props.authentication.updateAddress}
                onRequestClose={() => this.props.addressBookForm()}
                contentLabel="Login details"
                id="login-overlay"
                className="modal-dialog"
                overlayClassName="Overlay"
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            onClick={() => this.props.addressBookForm()}
                        >
                            <span aria-hidden="true">×</span>
                        </button>

                        <h4
                            className="modal-title"
                            id="myModalLabel"
                        >Edit Address</h4>
                    </div>
                    <Formik
                        initialValues={{
                            firstName: this.props.authentication.user.firstName,
                            lastName: this.props.authentication.user.lastName,
                            address: "",
                            phoneNumber: this.props.authentication.user.phoneNumber
                        }}
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

                        }}
                    >
                        {({ touched, errors, isSubmitting, values, filters }) => (
                            <Form className="address-book-form">
                                <div className="form-row">
                                    <div className="form-group col-md-6">

                                        <label htmlFor="email" className="control-label">First Name</label>
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

                                        <label htmlFor="email" className="control-label">Last Name</label>
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

                                        <label htmlFor="email" className="control-label">Phone Number</label>
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
                                    <div className="form-group col-md-6">

                                        <label htmlFor="email" className="control-label">Additional Phone Number</label>
                                        <div>
                                            <Field
                                                type="number"
                                                name="phoneNumber2"
                                                placeholder="Additional Phone Number"
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
                                <div className="form-group">
                                    <label htmlFor="email" className="control-label">Address</label>
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder="Enter your Address"
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
                                    <label htmlFor="password" className="control-label">Additional Information</label>
                                    <Field
                                        component="textarea"
                                        name="address"
                                        className={`form-control ${
                                            touched.address && errors.address ? "is-invalid" : ""
                                            }`}
                                        id="exampleFormControlTextarea1"
                                        placeholder="Street Name / Building / Apartment No. / Floor"
                                        rows="3"
                                    ></Field>
                                    <ErrorMessage
                                        component="div"
                                        name="address"
                                        className="invalid-feedback"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-success btn-block address-save-btn"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? <div className="spinner-border text-warning"></div> : "SAVE"}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => ({
    authentication: state.authentication,
    resMessages: state.resMessages
});

const mapDispatchToProps = (dispatch) => ({
    addressBookForm: () => dispatch(addressBookForm())
});

export default connect(mapStateToProps, mapDispatchToProps)(AddressBookForm);