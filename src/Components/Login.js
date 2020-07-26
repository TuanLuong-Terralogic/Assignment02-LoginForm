import React, { useState } from 'react';
import eye from '../Assets/img/Suche03.svg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Input from './Input';
// import Input from './Input';

const Login = ({ handleSubmit, user: { msg }, isAuthenticated }) => {

    const [click, setClick] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const regEx = /^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;


    const handleClick = () => {
        setClick(!click);
    }

    const handleOnSubmit = async e => {
        e.preventDefault();
        console.log(email, password)
        console.log(regEx.test(email));
        if (!regEx.test(email)) {
            return (
                window.alert("Invalid email format")
            )
        }
        handleSubmit(email, password);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }


    const submit = event => {
        if (event.keycode === 13) {

            // handleOnSubmit();
        }
    }

    return (

        <div className="form-container">
            <p>{msg}</p>
            <form onSubmit={handleOnSubmit} onKeyDown={e => submit}>

                <Input clName="form-group" labelName="Email" type="email" plHol="Enter your email" value={email} onChange={handleEmailChange} />


                <Input clName="form-group" labelName="Password" type="password" value={password} onChange={handlePasswordChange} plHol="Enter your password" />

                <div className="form-group">
                    <div className="button-row row">
                        <div className="col-6">
                            <button type="button" className="btn btn-register w-100">
                                <Link to="/register" className="register">Register</Link>
                            </button>
                        </div>
                        <div className="col-6">
                            <button type="submit" className="btn btn-login w-100" >
                                Login
                            </button>
                        </div>


                    </div>
                    <br />
                    <input type="checkbox" className="form-check-input" name="rememberPass" id="rememberPass" value="checkedValue" />
                    <label className="form-check-label">Remember password</label>
                </div>
            </form>
        </div>
    );
};

Login.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default Login;