import React from 'react';
import { Redirect, Route } from 'react-router-dom';


const windowWidth = window.outerWidth;
const mobileWidth = 600;
const useRoute = windowWidth <= mobileWidth;
const MobileRoutes = ({
    component: Component,
    ...rest
}) => (
        <Route {...rest} component={props => (
            useRoute ? (
                <Component {...props} />
            ) : (
                <React.Fragment>
                    <Redirect to="/" />
                </React.Fragment>
            )
        )} />
    );

export default MobileRoutes;