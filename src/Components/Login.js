import React, { useRef } from 'react';
import eye from '../Assets/img/Suche03.svg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Login = props => {

    const email = useRef("");
    const password = useRef("");
    const type = "";
    // const 

    const handleOnSubmit = () => {
        console.log(email.current.value);
        console.log(password.current.value);
    }

    return (
        <div className="form-container">
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" ref={email} className="form-control" placeholder="Enter your email" required />

                <div className="pass-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" ref={password} className="form-control form-password" placeholder="Enter your password" required />
                    <img src={eye} className="eye" alt="password display" />
                </div>

                <div className="button-row">
                    <button type="button" className="btn btn-register">
                        <Link to="/register" className="register">Register</Link>
                    </button>
                    <button type="button" className="btn btn-login" onClick={handleOnSubmit}>
                        Login
                    </button>
                </div>

                {/* <div className="check-container"> */}
                <br />
                <input type="checkbox" className="form-check-input" name="rememberPass" id="rememberPass" value="checkedValue" />
                <label className="form-check-label">Remember password</label>
                {/* </div> */}
            </div>
        </div>
    );
};

Login.propTypes = {

};

export default Login;