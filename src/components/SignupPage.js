import React from 'react';

export default class SignupPage extends React.Component {
    constructor(props) {
        super(props);
        this.showLoginForm = this.showLoginForm.bind(this);

        this.state = {

        }
    }

    showLoginForm(e) {
        e.preventDefault();
        console.log('clicked')
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
                            <div class="form-group col-md-6">
                                <input id="login-username" type="text" class="form-control" name="first-name" value="" placeholder="First Name" required />
                            </div>
                            <div class="form-group col-md-6">
                                <input id="login-username" type="text" class="form-control" name="last-name" value="" placeholder="Last Name" required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div class="form-group col-md-6">
                                <input id="login-username" type="email" class="form-control" name="email" value="" placeholder="Email" required />
                            </div>
                            <div class="form-group col-md-6">
                                <input id="login-username" type="number" class="form-control" name="phonenumber" value="" placeholder="Phonenumber" required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div class="form-group col-md-6">
                                <input id="login-username" type="password" class="form-control" name="password" value="" placeholder="Password" required />
                            </div>
                            <div class="form-group col-md-6">
                                <input id="login-username" type="password" class="form-control" name="confirm-password" value="" placeholder="Confirm password" required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <button type="submit" class="btn btn-primary col-md-6">Sign in</button>
                            </div>
                        </div>
                        <div className="form-row">
                            <div class="form-group col-md-12">
                                <div class="or-seperator"><i>or</i></div>
                                <p class="text-center">Sign up with your social media account</p>
                                <div class="text-center social-btn">
                                    <a href="#" class="btn btn-primary"><i class="fa fa-facebook"></i>&nbsp; Facebook</a>
                                    <a href="#" class="btn btn-info"><i class="fa fa-twitter"></i>&nbsp; Twitter</a>
                                    <a href="#" class="btn btn-danger"><i class="fa fa-google"></i>&nbsp; Google</a>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="switch-to-login">
                        <p>Already have an account? <a href="" onClick={this.props.handleToggleAuth}>Login</a> instead</p>
                    </div>
                </div>
            </div>
        );
    }
}