import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'


const UserAuth = ({ component: Component, user: { isAuthenticated, loading }, ...props }) => {
    return (
        <Route {...props} render={(renderRoute => !isAuthenticated && loading ? (
            <Redirect to="/" />
        )
            :
            (
                <Component {...renderRoute} />
            )
        )} />
    );
};

UserAuth.propTypes = {
    user: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
    loading: PropTypes.bool,
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(UserAuth);