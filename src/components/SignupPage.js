/**
 * This file contains the Sign up Page component
 */


import React from 'react';

export default class SignupPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="sign-up-container">
                <div className="sign-up__extra-content">
                    <h3>E-ISICH</h3>
                    <b>For the more information</b>
                    <p>Quickly get information from new leads and customers by signing up .With their information, you can funnel them into new accounts in an instant. Check out our social media</p><br />
                    <div className="subscribe-social-media">
                        <img className="social-media" src="facebook.svg" alt="facebook" />
                        <img className="social-media" src="twitter.svg" alt="twitter" />
                        <img className="social-media" src="instagram.svg" alt="instagram" />
                        <img className="social-media" src="pinterest.svg" alt="pinterest" />
                    </div>
                </div>
                <div className="sign-up__details">
                    <b className="sign-up__title">Sign Up</b>
                    <form action="" className="sign-up__form">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input id="login-username" type="text" className="form-control" name="first-name" value="" placeholder="First Name" required />
                            </div>
                            <div className="form-group col-md-6">
                                <input id="login-username" type="text" className="form-control" name="last-name" value="" placeholder="Last Name" required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input id="login-username" type="email" className="form-control" name="email" value="" placeholder="Email" required />
                            </div>
                            <div className="form-group col-md-6">
                                <input id="login-username" type="number" className="form-control" name="phonenumber" value="" placeholder="Phonenumber" required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input id="login-username" type="password" className="form-control" name="password" value="" placeholder="Password" required />
                            </div>
                            <div className="form-group col-md-6">
                                <input id="login-username" type="password" className="form-control" name="confirm-password" value="" placeholder="Confirm password" required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <button type="submit" className="btn btn-primary col-md-6">Sign in</button>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <div className="or-seperator"><i>or</i></div>
                                <p className="text-center">Sign up with your social media account</p>
                                <div className="text-center social-btn">
                                    <a href="#" className="btn btn-primary"><i className="fa fa-facebook"></i>&nbsp; Facebook</a>
                                    <a href="#" className="btn btn-info"><i className="fa fa-twitter"></i>&nbsp; Twitter</a>
                                    <a href="#" className="btn btn-danger"><i className="fa fa-google"></i>&nbsp; Google</a>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="switch-to-login">
                        <p>Already have an account? <a href="" onClick={this.props.handleSwithAuth}>Login</a> instead</p>
                    </div>
                </div>
            </div>
        );
    }
}