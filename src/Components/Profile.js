import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import Input from './Input';
import Loading from './Loading';
import { withRouter } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';


const Profile = ({ user: { loading, isAuthenticated }, handleClick, history, handleSubmit }) => {
    const userLocal = localStorage.getItem('user');
    const userData = JSON.parse(userLocal);

    const [image, setImage] = useState('');

    const handleChange = e => {
        // setImage(URL.createObjectURL(e.target.value));
        // console.log(image);
    }

    // Reg Exp
    const passRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // const phoneRegEx = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: userData.name,
            oldPass: '',
            newPass: '',
            confirmPass: ''
        },
        validationSchema: yup.object().shape({
            oldPass: yup.string().required('Required'),
            newPass: yup.string().min(8, 'At least 8 character').max(16, 'Maximum 16 characters').matches(passRegEx, 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'),
            confirmPass: yup.string().oneOf([yup.ref('newPass')], "Password is not match"),
        }),
        onSubmit: values => {
            // await handleSubmit(values.newPass, values.oldPass);
            console.log(values.avatar.files[0])
        },

    })

    const handleOnClick = () => {
        handleClick();
        history.push('/');
    }

    return (
        <>
            {
                loading ? <Fragment><Loading /></Fragment> :
                    <Fragment >
                        {
                            !isAuthenticated ? <Fragment><Loading /></Fragment> :
                                <div className="profile-wrapper">
                                    <form onSubmit={formik.handleSubmit} >
                                        <Avatar userProfile={userData.displayName} value={image} onChange={handleChange} name="avatar" id="avatar" />
                                        <div className="detail">
                                            <div className="row">
                                                <div className="col-md-12 col-lg-6 col-xl-6">
                                                    <Input clName="form-group full-name w-100" labelName="Full Name" id="name" type="text" value={formik.name} defaultValue={formik.name} onChange={formik.handleChange} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className=" col-md-12 col-lg-6 col-xl-6">
                                                    <Input clName="form-group w-100" id="email" name="email" labelName="Email" type="text" value={userData.email} />
                                                </div>
                                                <div className=" col-md-12 col-lg-6 col-xl-6">
                                                    <Input clName="form-group w-100" id="phone" name="phone" labelName="Phone" type="text" value={userData.phone} />
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                    <form onSubmit={formik.handleSubmit} >
                                        <div className="change-pass detail">
                                            <p>Change password</p>
                                            <div className="row">
                                                <div className="col-md-12 col-lg-6 col-xl-6">
                                                    <Input clName="form-group full-name" labelName="Current Password" name="oldPass" type="password" value={formik.oldPass} onChange={formik.handleChange} />

                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 col-lg-6  col-xl-6">
                                                    <Input clName="form-group w-100" labelName="New Password" name="newPass" type="password" value={formik.newPass} onChange={formik.handleChange} />
                                                    {formik.errors.newPass && formik.touched.newPass && (<p className="text-danger">{formik.errors.newPass}</p>)}
                                                </div>
                                                <div className="col-md-12 col-lg-6 col-xl-6">
                                                    <Input clName="form-group w-100" labelName="Confirm Password" name="confirmPass" type="password" value={formik.confirmPass} onChange={formik.handleChange} />
                                                    {formik.errors.confirmPass && formik.touched.confirmPass && (<p className="text-danger">{formik.errors.confirmPass}</p>)}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="btn-profile row">
                                                <div className="col-11 col-sm-4 col-md-4 col-lg-2 col-xl-2 pr-0">
                                                    <button type="submit" className="btn btn-save w-75">
                                                        Save
                                                </button>
                                                </div>
                                                <div className="col-11 col-sm-6 col-md-6 col-lg-2 col-xl-2 pl-0">
                                                    <button type="button" className="btn btn-logout w-100" onClick={handleOnClick}>
                                                        Logout
                                            </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                        }
                    </Fragment>
            }
        </>
    );

};

Profile.propTypes = {
    // isAuthenticated: PropTypes.bool.isRequired,
};

export default withRouter(Profile);