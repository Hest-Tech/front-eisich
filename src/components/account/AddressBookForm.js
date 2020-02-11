import React, { useState } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { Formik, Form, Field, ErrorMessage } from "formik";

import { LoginSchema } from '../../utils/validate';
import {
    addressBookForm,
    addAddress,
    editAddress,
    loadUser
} from '../../actions/authentication';


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
        let addressObj = this.props.editAddress ? this.props.currentDetails : {};
        let phoneNumberList = addressObj.phoneNumber || [];

        this.state = {
            firstName: addressObj.firstName || "",
            lastName: addressObj.lastName || "",
            address: addressObj.address || "",
            region: addressObj.region || "",
            city: addressObj.city || "",
            phoneNumber: phoneNumberList.length ? phoneNumberList[0] : "",
            phoneNumber2: phoneNumberList.length ? (phoneNumberList[1] || "") : "",
            info: addressObj.info || ""
        }
    }

    componentDidMount() {
        this.props.loadUser();
        console.log(this.props.editAddress)
    }

    componentWillUnmount() {
        console.log('--->', this.props.authentication.user.address)
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
                            firstName: this.state.firstName,
                            lastName: this.state.lastName,
                            address: this.state.address,
                            region: this.state.region,
                            city: this.state.city,
                            phoneNumber: this.state.phoneNumber,
                            phoneNumber2: this.state.phoneNumber2,
                            info: this.state.info
                        }}
                        // validationSchema={LoginSchema}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            setSubmitting(true);
                            let num1 = values.phoneNumber.toString();
                            let num2 = values.phoneNumber2.toString();

                            let addressPayload = {
                                firstName: values.firstName,
                                lastName: values.lastName,
                                address: values.address,
                                region: values.region,
                                city: values.city,
                                phoneNumber: [num1, num2],
                                info: values.info
                            };
                            console.log(this.props)

                            if (this.props.editAddress) {
                                this.props.editAddress(this.props.addressId, addressPayload, resetForm, setSubmitting);
                            } else if (this.props.addAddress) {
                                this.props.addAddress(addressPayload, resetForm, setSubmitting);
                            }
                        }}
                    >
                        {({ touched, errors, isSubmitting, values, filters }) => (
                            <Form className="address-book-form">
                                <div className="form-row">
                                    <div className="form-group col-md-6">

                                        <label htmlFor="firstName" className="control-label">First Name</label>
                                        <div>
                                            <Field
                                                type="text"
                                                name="firstName"
                                                id="firstName"
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

                                        <label htmlFor="lastName" className="control-label">Last Name</label>
                                        <div>
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

                                        <label htmlFor="phoneNumber" className="control-label">Phone Number</label>
                                        <div>
                                            <Field
                                                name="phoneNumber"
                                                id="phoneNumber"
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

                                        <label htmlFor="phoneNumber2" className="control-label">Additional Phone Number</label>
                                        <div>
                                            <Field
                                                name="phoneNumber2"
                                                id="phoneNumber2"
                                                placeholder="Additional Phone Number"
                                                className="form-control"
                                            />
                                            {/* <ErrorMessage
                                                component="div"
                                                name="phoneNumber"
                                                className="invalid-feedback"
                                            /> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address" className="control-label">Address</label>
                                    <Field
                                        name="address"
                                        placeholder="Enter your Address"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="address"
                                        className="invalid-feedback"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1" className="control-label">Additional Information</label>
                                    <Field
                                        component="textarea"
                                        name="info"
                                        className={`form-control ${
                                            touched.info && errors.info ? "is-invalid" : ""
                                            }`}
                                        id="exampleFormControlTextarea1"
                                        placeholder="Street Name / Building / Apartment No. / Floor"
                                        rows="3"
                                    ></Field>
                                    <ErrorMessage
                                        component="div"
                                        name="info"
                                        className="invalid-feedback"
                                    />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">

                                        <label htmlFor="region" className="control-label">Region</label>
                                        <div>
                                            <Field
                                                as="select"
                                                id="region"
                                                name="region"
                                                className="form-control"
                                            >
                                                <option defaultValue="Nairobi">Please select</option>
                                                <option defaultValue="1">Nairobi</option>
                                                <option defaultValue="2">Two</option>
                                                <option defaultValue="3">Three</option>
                                            </Field>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6">

                                        <label htmlFor="city" className="control-label">City</label>
                                        <div>
                                            <Field
                                                as="select"
                                                id="city"
                                                name="city"
                                                className="form-control"
                                            >
                                                <option defaultValue="Nairobi">Please select</option>
                                                <option defaultValue="1">Nairobi</option>
                                                <option defaultValue="2">Two</option>
                                                <option defaultValue="3">Three</option>
                                            </Field>
                                        </div>
                                    </div>
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
    addAddress: (addressPayload, resetForm, setSubmitting) => dispatch(addAddress(addressPayload, resetForm, setSubmitting)),
    editAddress: (addressId, addressPayload, resetForm, setSubmitting) => dispatch(editAddress(addressId, addressPayload, resetForm, setSubmitting)),
    addressBookForm: () => dispatch(addressBookForm()),
    loadUser: () => dispatch(loadUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(AddressBookForm);