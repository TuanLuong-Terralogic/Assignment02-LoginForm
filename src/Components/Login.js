import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter, Redirect } from 'react-router-dom';
import Input from './Input';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';

const Login = ({ handleSubmit, user: { msg, isAuthenticated, loading }, history }) => {

    const [click, setClick] = useState(false);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email("Invalid email format").required('Required'),
            password: Yup.string().min(8, "Minimum 8 characters").max(16, "Maximum 16 characters").required('Required')
        }),
        onSubmit: async (values) => {
            await handleSubmit(values.email, values.password);
        }
    })

    const submit = event => {
        if (event.keycode === 13) {

            // handleOnSubmit();
        }
    }

    if (isAuthenticated) {
        return <Redirect to='/profile' />
    }

    const handleClick = () => {
        if (loading) {
            setClick(!click);
        }
        return click
    }

    return (

        <div className="form-container">
            {/* <p>{msg}</p> */}
            <form onSubmit={formik.handleSubmit} onKeyDown={e => submit}>

                <Input clName="form-group" labelName="Email" name="email" type="email" plHol="Enter your email" value={formik.values.email} onChange={formik.handleChange} />
                {formik.errors.email && formik.touched.email && (<p className="text-danger">{formik.errors.email}</p>)}

                <Input clName="form-group" labelName="Password" name="password" type="password" eyeType="eye" value={formik.values.password} onChange={formik.handleChange} plHol="Enter your password" />
                {formik.errors.password && formik.errors.password && (<p className="text-danger">{formik.errors.password}</p>)}

                <div className="form-group">
                    <div className="button-row row">
                        <div className="col-6">
                            <button type="button" className="btn btn-register w-100">
                                <Link to="/register" className="register">Register</Link>
                            </button>
                        </div>
                        <div className="col-6">
                            <button type="submit" className="btn btn-login w-100" onClick={handleClick}>
                                {click ? "...Loading" : "Login"}
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

export default withRouter(Login);