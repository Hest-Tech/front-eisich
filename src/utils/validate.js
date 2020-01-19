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

export const ResetPassSchema = Yup.object().shape({
    currentPassword: Yup.string()
        .min(6, "Password must be 6 characters at minimum")
        .required("Password is required"),
    newPassword: Yup.string()
        .min(6, "Password must be 6 characters at minimum")
        .required("Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], "Your passwords don't match")
        .required('Confirm password is required')
});

export const updateAccountSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('First name is required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Last name is required'),
    phoneNumber: Yup.number()
        .min(8, 'Too Short!'),
    birthday: Yup.string()
        .trim()
        .matches(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/, 'Is not in correct format')
})