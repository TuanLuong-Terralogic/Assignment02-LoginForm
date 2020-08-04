import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import Input from '../Input/Input';
import * as Yup from 'yup';
import { Formik } from 'formik';

const emailRedEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const passRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const phoneRegEx = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required('Required').matches(emailRedEx, 'Invalid email'),
    password: Yup.string().min(8, "Minimum 8 characters").max(16, "Maximum 16 characters").required('Required').matches(passRegEx, 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password is not match").required('Required'),
    name: Yup.string().required('Required'),
    phone: Yup.string().min(10, "Invalid phone").matches(phoneRegEx, 'Invalid phone number').required('Required')
})

const Register = ({ handleSubmit, user: { msg, isAuthenticated } }) => {

if (isAuthenticated) {
    return <Redirect to='/' />
}


const submit = e => {
    if (e.keycode === 13) {
        console.log(true);
    }
}

return (
    <div className="form-container">
        {/* <p>{msg}</p> */}
        <Formik
            initialValues={{
                email: '',
                password: '',
                confirmPassword: '',
                name: '',
                phone: ''
            }}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
                handleSubmit(values.email, values.password, values.name, values.phone);
            }}
        >
            {({values, errors, handleSubmit, handleChange}) => 
            <form onSubmit={handleSubmit} onKeyDown={submit}>
                <Input clName="form-group" labelName="Email" name="email" type="text" plHol="Enter your email" value={values.email} onChange={handleChange} />
                {errors.email  && (<p className="text-danger">{errors.email}</p>)}

                <Input clName="form-group" labelName="Password" name="password" type="password" plHol="Enter your password" value={values.password} onChange={handleChange} />
                {errors.password && (<p className="text-danger">{errors.password}</p>)}

                <Input clName="form-group" labelName="Confirm Password" name="confirmPassword" type="password" plHol="Enter your confirm password" value={values.confirmPassword} onChange={handleChange} />
                {errors.confirmPassword && (<p className="text-danger">{errors.confirmPassword}</p>)}

                <Input clName="form-group" labelName="Full Name" name="name" type="text" plHol="Enter your full name" value={values.name} onChange={handleChange} />
                {errors.name && (<p className="text-danger">{errors.name}</p>)}

                <Input clName="form-group" labelName="Phone" name="phone" type="text" plHol="Enter your phone" value={values.phone} onChange={handleChange} />
                {errors.phone && (<p className="text-danger">{errors.phone}</p>)}


                <div className="form-group mb-0">
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
            }
        </Formik>
    </div>
);
};

Register.propTypes = {
    handleSubmit: PropTypes.func,
    isAuthenticated: PropTypes.bool,
};

export default Register;