import React from 'react';
import Login from '../Components/Login';
import Logo from './Logo';
import Images from './Images';


const LoginLayout = () => {
    return (
        <div className="row">
            <div className="col-6 col-left">
                <Logo />
                <h3>Login Your Account</h3>
                <Login />
            </div>
            <Images />
        </div>
    );
};

export default LoginLayout;