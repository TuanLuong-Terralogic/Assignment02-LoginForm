import React, { useRef, useState } from 'react';
import eye from '../Assets/img/Suche03.svg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Input from './Input';

const Login = ({handleSubmit})=> {

    const email = useRef("");
    const password = useRef("");
    const [type, setType] = useState("password");
    // const 
    
    const onClick = (click) => {
        
        if(!click){
            setType("text")
            return type;
        }
        // console.log(type);
        return type;
    }

    const handleOnSubmit =  async e => {
        e.preventDefault();
        handleSubmit(email.current.value, password.current.value);

    }

    return (
        <div className="form-container">
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" ref={email} className="form-control text-field" placeholder="Enter your email" required />

                {/* <div className="pass-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" ref={password} className="form-control form-password" placeholder="Enter your password" required />
                    <img src={eye} className="eye" alt="password display" />
                </div> */}

                <Input clName="pass-wrapper" labelName="Password" defVal="" type={type} onClick={onClick} plHol="Enter your password"/>

                <div className="button-row">
                    <button type="button" className="btn btn-register">
                        <Link to="/register" className="register">Register</Link>
                    </button>
                    <button type="button" className="btn btn-login" onClick={handleOnSubmit}>
                        Login
                    </button>
                </div>
                <br />
                <input type="checkbox" className="form-check-input" name="rememberPass" id="rememberPass" value="checkedValue" />
                <label className="form-check-label">Remember password</label>
            </div>
        </div>
    );
};

Login.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default Login;