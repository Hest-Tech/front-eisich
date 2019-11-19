import React from 'react';
import Modal from 'react-modal';


const customStyles = {
    overlay: { zIndex: 1000 }
};

Modal.setAppElement('body');

export default class LoginPage extends React.Component {

    constructor() {
        super();
    }

    onFormChange() {
        console.log('here')
    }

    render() {
        return (
            <Modal
                style={customStyles}
                isOpen={true}
                contentLabel="Login details"
                id="login-overlay"
                className="modal-dialog"
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
                        <h4 className="modal-title" id="myModalLabel">Login to site.com</h4>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="well">
                                    <form
                                        id="loginForm"
                                        method="POST"
                                        action="/login/"
                                        noValidate="novalidate"
                                        onChange={this.onFormChange}
                                    >
                                        <div className="form-group">
                                            <label htmlFor="username" className="control-label">Username</label>
                                            <input type="text" className="form-control" id="username" name="username" value="" required="" title="Please enter you username" placeholder="example@gmail.com" />
                                            <span className="help-block"></span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="control-label">Password</label>
                                            <input type="password" className="form-control" id="password" name="password" value="" required="" title="Please enter your password" />
                                            <span className="help-block"></span>
                                        </div>
                                        <div id="loginErrorMsg" className="alert alert-error hide">Wrong username or password</div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" name="remember" id="remember" /> Remember login
                                        </label>
                                            <p className="help-block">(if this is a private computer)</p>
                                        </div>
                                        <button type="submit" className="btn btn-success btn-block">Login</button>
                                        <a href="/forgot/" className="btn btn-default btn-block">Help to login</a>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <p className="lead">Register now for <span className="text-success">FREE</span></p>
                                <ul className="list-unstyled" style={{ lineHeight: 2 }}>
                                    <li><span className="fa fa-check text-success"></span> See all your orders</li>
                                    <li><span className="fa fa-check text-success"></span> Fast re-order</li>
                                    <li><span className="fa fa-check text-success"></span> Save your favorites</li>
                                    <li><span className="fa fa-check text-success"></span> Fast checkout</li>
                                    <li><span className="fa fa-check text-success"></span> Get a gift <small>(only new customers)</small></li>
                                    <li><a href="/read-more/"><u>Read more</u></a></li>
                                </ul>
                                <p><a href="/new-customer/" className="btn btn-info btn-block">Yes please, register now!</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
};