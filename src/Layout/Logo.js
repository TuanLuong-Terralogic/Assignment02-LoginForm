import React from 'react';
import logo from '../Assets/img/brand-logo.svg'

const Logo = () => {
    return (
        <div className="brand">
            <img src={logo} alt="Terralogic logo" />
            <br />
            <small>start your personal photo experience</small>
        </div>
    );
};

export default Logo;