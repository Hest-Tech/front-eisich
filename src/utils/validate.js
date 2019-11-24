// /**
//  * This file contains the validation schema for authentication
//  */

// import * as Yup from "yup";
// import { withFormik } from 'formik';

// import { App } from '../components/SignupPage';


// export const FormikSignUp = withFormik({
//     mapPropsToValues({
//         firstName,
//         lastName,
//         phoneNumber,
//         email,
//         password,
//         confirmPassword,
//         terms
//     }) {
//         return {
//             firstName: firstName || "",
//             lastName: lastName || "",
//             phoneNumber: phoneNumber || "",
//             email: email || "",
//             password: password || "",
//             confirmPassword: confirmPassword || "",
//             terms: terms || false
//         }
//     },
//     validationSchema: Yup.object().shape({
//         firstName: Yup.string()
//             .min(2, 'Too Short!')
//             .max(50, 'Too Long!')
//             .required('First name is required'),
//         lastName: Yup.string()
//             .min(2, 'Too Short!')
//             .max(50, 'Too Long!')
//             .required('Last name is required'),
//         phoneNumber: Yup.number()
//             .min(8, 'Too Short!')
//             .max(11, 'Too Long!')
//             .required("Phone number is required"),
//         email: Yup.string()
//             .email("Invalid email address format")
//             .required("Email is required"),
//         password: Yup.string()
//             .min(3, "Password must be 3 characters at minimum")
//             .required("Password is required"),
//         // confirmPassword: Yup.string()
//         //     .email("Invalid email address format")
//         //     .required("Email is required")
//         //     .test(
//         //         'passwords-match',
//         //         "Passwords don't match",
//         //         value => this.parent.password === value
//         //     ),
//         // agreeToTerms: Yup.boolean()
//         //     .test(
//         //         'is-true',
//         //         'Must agree to terms to continue',
//         //         value => value === true
//         //     ),
//     }),
//     handleSubmit(values) {
//         console.log(values)
//     }
// })(App)