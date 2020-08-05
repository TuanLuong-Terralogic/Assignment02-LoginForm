import React from 'react';
import Register from '../../Components/Register/Register';
import Logo from '../../Components/Logo/Logo';
import Images from '../../Components/Images/Images';
import { register } from '../../Redux/Action/user';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const RegisterLayout = ({ user, register }) => {

    if (user.isAuthenticated) {
    return <Redirect to='/' />
    }


    const handleSubmit = (email, password, fullName, phone) => {
        register(email, password, fullName, phone);
    }

    return (
        <div className="container">
            <div className="login-container">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-12 col-xl-6 col-left">
                        <Logo />
                        <h3>Create Your Account</h3>
                        <Register user={user} handleSubmit={handleSubmit} />
                    </div>
                    <Images />
                </div>
            </div>
        </div>
    );
};

RegisterLayout.propTypes = {
    register: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { register })(RegisterLayout);