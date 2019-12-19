// /**
//  * This file contains the validation schema for authentication
//  */

import * as Yup from "yup";


export const validationSchema = Yup.object().shape({
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
        .min(6, "Password must be 6 characters at minimum")
        .required("Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], "Your passwords don't match")
        .required('Confirm password is required')
})

export const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address format")
        .required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be 6 characters at minimum")
        .required("Password is required")
});

export const CheckoutSchema = Yup.object().shape({
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
    address: Yup.string()
        .min(8, 'Too Short!')
        .required("Address is required")
});