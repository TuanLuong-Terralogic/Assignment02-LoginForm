import React from 'react';
import Login from '../../Components/Login/Login';
import Logo from '../../Components/Logo/Logo';
import Images from '../../Components/Images/Images';
import { connect } from 'react-redux';
import { login } from '../../Redux/Action/user';
import PropTypes from 'prop-types';


const LoginLayout = ({ user = {}, login }) => {

    const handleSubmit = async (email, password) => {
        login(email, password);
    }

    return (
        <div className="container">
            <div className="login-container">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-12 col-xl-6 col-left">
                        <Logo />
                        <h3>Login Your Account</h3>
                        <Login handleSubmit={handleSubmit} user={user} isAuthenticated />
                    </div>
                    <Images />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user,
        isAuthenticated: state.user.isAuthenticated
    }
}

LoginLayout.propTypes = {
    login: PropTypes.func,
    user: PropTypes.object,
}

export default connect(mapStateToProps, { login })(LoginLayout);