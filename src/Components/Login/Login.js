import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter, Redirect } from 'react-router-dom';
import Input from '../Input/Input';
import * as Yup from 'yup';
// import { useFormik } from 'formik';
import { Formik } from 'formik';
// import Swal from 'sweetalert2';

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required('Required'),
    password: Yup.string().min(8, "Minimum 8 characters").max(16, "Maximum 16 characters").required('Required')
});

const Login = ({ handleSubmit }) => {

    const submit = event => {
        if (event.keycode === 13) {

            // handleOnSubmit();
        }
    }


    return (

        <div className="form-container">
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={validationSchema}
                onSubmit={async (values) => {
                    handleSubmit(values.email, values.password);
                }}
            >
                {({ values, errors, touched, handleChange, handleSubmit }) =>
                    <form onSubmit={handleSubmit} onKeyDown={e => submit}>

                        <Input clName="form-group" labelName="Email" name="email" type="email" plHol="Enter your email" value={values.email} onChange={handleChange} />
                        {errors.email && touched.email && (<p className="text-danger">{errors.email}</p>)}

                        <Input clName="form-group" labelName="Password" name="password" type="password" eyeType="eye" value={values.password} onChange={handleChange} plHol="Enter your password" />
                        {errors.password && errors.password && (<p className="text-danger">{errors.password}</p>)}

                        <div className="form-group">
                            <div className="button-row row">
                                <div className="col-6">
                                    <button type="button" className="btn btn-register w-100">
                                        <a href="/register" className="register">Register</a>
                                    </button>
                                </div>
                                <div className="col-6">
                                    <button type="submit" className="btn btn-login w-100">
                                        Login
                                    </button>
                                </div>
                            </div>
                            <br />
                            <input type="checkbox" className="form-check-input" name="rememberPass" id="rememberPass" value="checkedValue" />
                            <label className="form-check-label">Remember password</label>
                        </div>
                    </form>
                }

            </Formik>

        </div>
    );
};

Login.propTypes = {
    handleSubmit: PropTypes.func,
};

export default Login;