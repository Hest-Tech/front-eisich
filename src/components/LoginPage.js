import React from 'react';


export default class LoginPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-xs-6">
                            <div className="well">
                                <form
                                    id="loginForm"
                                    // method="POST"
                                    // action="/login/"
                                    noValidate="novalidate"
                                    onChange={this.onFormChange}
                                >
                                    <div className="form-group">
                                        <label htmlFor="email" className="control-label">Email</label>
                                        <input
                                            type="text"
                                            className="form-control m-font-size"
                                            id="email"
                                            name="email"
                                            value=""
                                            required=""
                                            title="Please enter you email"
                                            placeholder="example@gmail.com"
                                        />
                                        <span className="help-block"></span>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="control-label">Password</label>
                                        <input type="password" className="form-control" id="password" name="password" value="" required="" title="Please enter your password" />
                                        <span className="help-block"></span>
                                    </div>
                                    <div id="loginErrorMsg" className="alert alert-error hide">Wrong email or password</div>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" name="remember" id="remember" /> Remember login
                                        </label>
                                        <p className="help-block">(if this is a private computer)</p>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-success btn-block m-font-size"
                                    >
                                        Login
                                    </button>
                                    <a href="/forgot/" className="btn btn-default btn-block m-font-size forgot-pass">Forgot password?</a>
                                </form>
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <p className="lead">Register now for <span className="text-success">FREE</span></p>
                            <ul className="list-unstyled" style={{ lineHeight: 2 }}>
                                <li><span className="fa fa-check text-success"></span> See all your orders</li>
                                <li><span className="fa fa-check text-success"></span> Fast re-order</li>
                                <li><span className="fa fa-check text-success"></span> Save your favorites</li>
                                <li><span className="fa fa-check text-success"></span> Fast checkout</li><br />
                            </ul>
                            <p
                                className="register-btn"
                                onClick={this.props.handleToggleAuth}>
                                <button
                                    className="btn btn-info btn-block m-font-size"
                                >
                                    Register now!
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};