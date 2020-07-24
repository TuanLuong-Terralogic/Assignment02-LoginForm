import React, { useRef, useState } from 'react';
// import eye from '../Assets/img/Suche03.svg';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import Input from './Input';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const Login = ({ handleSubmit, user, isAuthenticated }) => {

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
        handleSubmit(formik.values.email.current.value, formik.values.password.current.value);

    }

    const formik = useFormik({
        initialValues:{
            email: useRef(""),
            password: useRef("")
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email format").required("Email required"),
            password: Yup.string().required("Password required")
        }),
        // onSubmit: 
    })

    const submit = event => {
        if(event.keycode === 13){
            console.log("12323231");
            handleOnSubmit(formik.values.email.current.value, formik.values.password.current.value);
        }
    }

    return (
        <div className="form-container">
            <form onSubmit={handleOnSubmit} onKeyDown={e => submit}>
            <Input clName="form-group" labelName="Email" type="text" plHol="Enter your email" ref={formik.values.email}/>
            {formik.errors.email && formik.touched.email && (
            <p>{formik.errors.email}</p>
          )}
            {/* <div className="pass-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" ref={password} className="form-control form-password" placeholder="Enter your password" required />
                    <img src={eye} className="eye" alt="password display" />
                </div> */}
            <div className="form-group">
                <Input clName="pass-wrapper" labelName="Password" defVal="" type={type} onClick={onClick} plHol="Enter your password" ref={formik.values.password} />

                <div className="button-row">
                    <button type="button" className="btn btn-register">
                        <Link to="/register" className="register">Register</Link>
                    </button>
                    <button type="submit" className="btn btn-login" >
                        Login
                    </button>
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