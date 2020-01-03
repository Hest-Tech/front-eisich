/**
 * This file contains forgot password component
 */


import React from 'react';
import { connect } from 'react-redux';

import { loginForm } from '../../actions/authentication';


class ResetPassword extends React.Component {

    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }

    login(e) {
        e.preventDefault();
        return this.props.loginForm();
    }

    render() {
        return (
            <div id="forgot-password-modal-content">

                <div className="modal-body">
                                        
                    <form method="post" id="Forgot-Password-Form" role="form">
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-addon"><span className="glyphicon glyphicon-envelope"></span></div>
                                <input name="email" id="email" type="email" className="form-control input-lg" placeholder="Enter Email" required data-parsley-type="email" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success btn-block btn-lg">
                            <span className="glyphicon glyphicon-send"></span> SUBMIT
                        </button>
                    </form>
                </div>

                <div className="modal-footer">
                    <p>Remember Password ? <a
                        id="loginModal1"
                        href=""
                        onClick={this.login} // back to login
                    >Login Here!</a></p>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    authentication: state.authentication
});

const mapDispatchToProps = (dispatch) => ({
    loginForm: () => dispatch(loginForm())
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);