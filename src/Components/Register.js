import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Input from './Input';
import eye from '../Assets/img/Suche03.svg';

const Register = props => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [formError, setFormError] = useState({
        emailErr: '',
        passwordErr: '',
        confirmPasswordErr: '',
        fullNameErr: '',
        phoneErr: ''
    });


    const { emailErr, passwordErr, confirmPasswordErr, fullNameErr, phoneErr } = formError;
    const regEx = /^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
    const phoneRegEx = /(09|01[2|6|8|9])+([0-9]{8})\b/;

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleConfirmPasswordChange = e => {
        setConfirmPassword(e.target.value);
    }

    const handleFullNameChange = e => {
        setFullName(e.target.value);
    }

    const handlePhoneChange = e => {
        setPhone(e.target.value);
    }


    const handleOnSubmit = e => {
        e.preventDefault();
        if (email !== "" &&
            password !== "" &&
            confirmPassword !== "" &&
            fullName !== "" &&
            phone !== "") {
            if (!regEx.test(email)) {
                setFormError({ emailErr: 'Invalid mail format' });

            }
            else {
                setFormError({ emailErr: '' });
                if (password.length < 8 || password.length > 16) {
                    setFormError({ passwordErr: 'Password must be from 8 to 16 characters' });
                }
                else {
                    setFormError({ passwordErr: '' });
                    if (confirmPassword !== password) {
                        setFormError({ confirmPasswordErr: 'Confirmation password not match' })
                    }
                    else {
                        setFormError({ confirmPasswordErr: '' });
                        if (phoneRegEx.test(phone)) {
                            console.log(email, password, confirmPassword, fullName, phone);
                            Swal.fire({
                                title: 'Success!',
                                text: 'Register Success',
                                icon: 'success',
                                confirmButtonText: 'Great'
                            });
                        }
                    }


                }

            }
        }


    }

    return (
        <div className="form-container">
            <form onSubmit={handleOnSubmit}>
                <Input clName="form-group" labelName="Email" type="text" plHol="Enter your email" value={email} onChange={handleEmailChange} />

                <Input clName="form-group" labelName="Password" type="password" plHol="Enter your password" value={password} onChange={handlePasswordChange} />
                <Input clName="form-group" labelName="Confirm Password" type="password" plHol="Enter your confirm password" value={confirmPassword} onChange={handleConfirmPasswordChange} />

                <Input clName="form-group" labelName="Full Name" type="text" plHol="Enter your full name" value={fullName} onChange={handleFullNameChange} />

                <Input clName="form-group" labelName="Phone" type="text" plHol="Enter your phone" value={phone} onChange={handlePhoneChange} />


                <div className="form-group">
                    <div className="button-row row">
                        <div className="col-6">
                            <button type="button" className="btn btn-register w-100">
                                <Link to="/" className="register">Back</Link>
                            </button>
                        </div>
                        <div className="col-6">
                            <button type="submit" className="btn btn-login w-100">
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

Register.propTypes = {

};

export default Register;