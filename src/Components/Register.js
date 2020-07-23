import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import Input from './Input';

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
                text: 'Please fill in the field',
                icon: 'error',
                confirmButtonText: 'OK'
              })
        }
        else if(password.current.value === confirmPassword.current.value){
            console.log(email.current.value, password.current.value, fullName.current.value, phone.current.value)
        Swal.fire({
            title: 'Success!',
            text: 'Register Success',
            icon: 'success',
            confirmButtonText: 'Great'
        });

        //reset form
        email.current.value = ""
        password.current.value = "" 
        confirmPassword.current.value = ""
        fullName.current.value = ""
        phone.current.value = ""
        }

    }

    return (
        <div className="form-container">
            <div className="form-group" onSubmit={handleOnSubmit}>
                <Input clName="form-group" labelName="Email" type="text" plHol="Enter your email" ref={email}/>

               
                <Input clName="pass-wrapper" labelName="Password" defVal="" type="password" plHol="Enter your password" ref={password} />
                <Input clName="pass-wrapper" labelName="Confirm Password" defVal="" type="password" plHol="Enter your password" ref={confirmPassword} />

                

                
                <Input clName="form-group" labelName="Full name" type="text" plHol="Enter your name" ref={fullName}/>

               
                <Input clName="form-group" labelName="Phone number" type="text" plHol="Enter your phone" ref={phone}/>

                <div className="button-row">
                    <button type="button" className="btn btn-register">
                        <Link to="/" className="register">Back</Link>
                    </button>
                    <button type="button" className="btn btn-login" onClick={handleOnSubmit}>
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