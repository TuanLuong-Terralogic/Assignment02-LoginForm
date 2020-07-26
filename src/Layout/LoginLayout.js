import React from 'react';
import Login from '../Components/Login';
import Logo from '../Components/Logo';
import Images from '../Components/Images';
import { connect } from 'react-redux';
import { login } from '../Action/user';


const LoginLayout = ({ user = {}, login, isAuthenticated }) => {

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

export default connect(mapStateToProps, { login })(LoginLayout);