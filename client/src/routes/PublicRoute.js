import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utils';

/**
 * Public route for public page show for all user
 * @param Component
 * @param restricted
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
const PublicRoute = ({component: Component, restricted, ...rest}) => {
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            isLogin() && restricted ?
                <Redirect to="/home" />
                : <Component {...props} />
        )} />
    );
};

export default PublicRoute;