import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import AuthenticationModal from '../components/authentication/AuthenticationModal';


const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
        <Route {...rest} component={(props) => (
            isAuthenticated ? (
                <Component {...props} />
            ) : (
                    <React.Fragment>
                        <Redirect to='/' />
                        <AuthenticationModal
                            // loginPopUp={this.state.loginPopUp}
                            // hideAuthPopUp={this.hideAuthPopUp}
                        />
                    </React.Fragment>
                )
        )}
        />
    );

const mapStateToProps = state => ({
    isAuthenticated: state.authentication.uid
})

export default connect(mapStateToProps)(PrivateRoute);