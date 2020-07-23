import React, { useRef, useState } from 'react';
// import eye from '../Assets/img/Suche03.svg';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import Input from './Input';

const Login = ({ handleSubmit, user, isAuthenticated }) => {

    const email = useRef("");
    const password = useRef("");
    const [type, setType] = useState("password");
    // const [isClicked, setIsClicked] = useState(false);
    // const 

    const onClick = (click) => {

        if (!click) {
            setType("text")
            return type;
        }
        // console.log(type);
        return type;
    }

    const handleOnSubmit = async e => {
        e.preventDefault();
        // console.log(email.current.value, password.current.value);
        handleSubmit(email.current.value, password.current.value);

    }

    // if(isAuthenticated === true){
    //     return <Redirect to="/profile" />
    // }

    return (
        <div className="form-container">
            <p>{user.msg}</p>
            <Input clName="form-group" labelName="Email" type="text" plHol="Enter your email" ref={email}/>
            {/* <div className="pass-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" ref={password} className="form-control form-password" placeholder="Enter your password" required />
                    <img src={eye} className="eye" alt="password display" />
                </div> */}
            <div className="form-group">
                <Input clName="pass-wrapper" labelName="Password" defVal="" type={type} onClick={onClick} plHol="Enter your password" ref={password} />

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