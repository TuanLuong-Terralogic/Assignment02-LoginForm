import React, { useRef } from 'react';
import eye from '../Assets/img/Suche03.svg';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = props => {

    const email = useRef("");
    const password = useRef("");
    const confirmPassword = useRef("");
    const fullName = useRef("");
    const phone = useRef("");

    const handleOnSubmit = () => {
        if(email.current.value === "" &&
        password.current.value === "" &&
        confirmPassword.current.value === "" &&
        fullName.current.value === "" &&
        phone.current.value === ""){
            Swal.fire({
                title: 'Error!',
                text: 'Nhap vo di thang lol',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        }
    }

    return (
        <div className="form-container">
            <div className="form-group" onSubmit={handleOnSubmit}>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" ref={email} className="form-control" placeholder="Enter your email" required />

                <div className="pass-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" ref={password} className="form-control form-password" placeholder="Enter your password" required />
                    <img src={eye} className="eye" alt="password display" />
                </div>

                <div className="pass-wrapper">
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name="password" id="password" ref={confirmPassword} className="form-control form-password" placeholder="Enter your password" required />
                    <img src={eye} className="eye" alt="password display" />
                </div>

                <label htmlFor="email">Full Name</label>
                <input type="text" name="email" id="email" ref={fullName} className="form-control" placeholder="Enter your full name" required />

                <label htmlFor="email">Phone number</label>
                <input type="text" name="email" id="email" ref={phone} className="form-control" placeholder="Enter your phone number" required />

                <div className="button-row">
                    <button type="button" className="btn btn-register">
                        <Link to="/" className="register">Back</Link>
                    </button>
                    <button type="button" className="btn btn-login">
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
};

Register.propTypes = {

};

export default Register;