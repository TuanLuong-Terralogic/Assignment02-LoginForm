import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import Input from '../Input/Input';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const Register = ({ handleSubmit, user: { msg, isAuthenticated } }) => {

    const passRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const phoneRegEx = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            name: '',
            phone: ''
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email("Invalid email").required('Required'),
            password: Yup.string().min(8, "Minimum 8 characters").max(16, "Maximum 16 characters").required('required').matches(passRegEx, 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'),
            confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password is not match").required('Required'),
            name: Yup.string().required('Required'),
            phone: Yup.string().min(10, "Invalid phone").matches(phoneRegEx, 'Invalid phone number').required('Required')
        }),
        onSubmit: async values => {
            await handleSubmit(values.email, values.password, values.name, values.phone);
        }
    })

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
            <form onSubmit={formik.handleSubmit} onKeyDown={submit}>
                <Input clName="form-group" labelName="Email" name="email" type="text" plHol="Enter your email" value={formik.values.email} onChange={formik.handleChange} />
                {formik.errors.email && formik.touched.email && (<p className="text-danger">{formik.errors.email}</p>)}

                <Input clName="form-group" labelName="Password" name="password" type="password" plHol="Enter your password" value={formik.values.password} onChange={formik.handleChange} />
                {formik.errors.password && formik.touched.password && (<p className="text-danger">{formik.errors.password}</p>)}

                <Input clName="form-group" labelName="Confirm Password" name="confirmPassword" type="password" plHol="Enter your confirm password" value={formik.values.confirmPassword} onChange={formik.handleChange} />
                {formik.errors.confirmPassword && formik.touched.confirmPassword && (<p className="text-danger">{formik.errors.confirmPassword}</p>)}

                <Input clName="form-group" labelName="Full Name" name="name" type="text" plHol="Enter your full name" value={formik.values.name} onChange={formik.handleChange} />
                {formik.errors.name && formik.touched.name && (<p className="text-danger">{formik.errors.name}</p>)}

                <Input clName="form-group" labelName="Phone" name="phone" type="text" plHol="Enter your phone" value={formik.values.phone} onChange={formik.handleChange} />
                {formik.errors.phone && formik.touched.phone && (<p className="text-danger">{formik.errors.phone}</p>)}


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
    handleSubmit: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
};

export default Register;