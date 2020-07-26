import React from 'react';
import Register from '../Components/Register';
import Logo from '../Components/Logo';
import Images from '../Components/Images';

const RegisterLayout = () => {
    return (
        <div className="container">
            <div className="login-container">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-12 col-xl-6 col-left">
                        <Logo />
                        <h3>Create Your Account</h3>
                        <Register />
                    </div>
                    <Images />
                </div>
            </div>
        </div>
    );
};

export default RegisterLayout;