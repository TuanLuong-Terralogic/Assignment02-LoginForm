import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const UserAuth = ({component : Component, user: {isAuthenticated, loading}, ...props}) => {
    return (
        <Route {...props} render = {(renderRoute => !isAuthenticated && !loading ? (
            <Redirect to="/" />
        )
        :
        (
            <Component {...renderRoute} />
        )
        )} />
    );
};

export default UserAuth;