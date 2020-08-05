import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';
import Input from '../Input/Input';
import Loading from '../Loading/Loading';
import { Formik } from 'formik';
import * as Yup from 'yup';

const Profile = ({ profile, user: { loading, isAuthenticated }, handleUpdateProfile, handleUploadImage, handleClick, handleOnSubmit, handleUpdateAll }) => {
    // Reg Exp
    const passRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const phoneRegEx = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    const emailRedEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    const validation = Yup.object().shape({
        email: Yup.string().email("Invalid email").matches(emailRedEx, 'Invalid email'),
        newPass: Yup.string().min(8, "Minimum 8 characters").max(16, "Maximum 16 characters").matches(passRegEx, 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'),
        confirmPass: Yup.string().oneOf([Yup.ref('newPass')], "Password is not match"),
        name: Yup.string(),
        phone: Yup.string().min(10, "Invalid phone").matches(phoneRegEx, 'Invalid phone number')
    })
    // get user from local storage
    const userLocal = localStorage.getItem('user');
    const userData = JSON.parse(userLocal);

    const handleOnClick = () => {
        handleClick();
    }

    return (
        <>
            {
                loading ? <Fragment><Loading /></Fragment> :
                    <Fragment >
                        {
                            !isAuthenticated ? <Fragment><Loading /></Fragment> : 
                                <div className="profile-wrapper">
                                    <Formik
                                        initialValues={{
                                            email: userData.email,
                                            name: userData.name,
                                            phone: userData.phone,
                                            oldPass: '',
                                            newPass: '',
                                            confirmPass: ''
                                        }}
                                        validationSchema={validation}
                                        onSubmit={async (values) => {
                                            if (values.oldPass === '' && values.newPass === '') {
                                                handleUpdateProfile({ email: values.email, name: values.name, phone: values.phone, avatar: profile.dataImg || userData.avatar })
                                            }
                                            else {

                                                // console.log(values.newPass, values.oldPass);
                                                handleUpdateProfile({ email: values.email, name: values.name, phone: values.phone, avatar: profile.dataImg || userData.avatar })
                                                handleOnSubmit({ password: values.newPass, currentPassword: values.oldPass });
                                                // handleUpdateAll({ email: values.email, name: values.name, phone: values.phone, avatar: profile.dataImg || userData.avatar, password: values.newPass, currentPassword: values.oldPass })
                                            }
                                        }
                                        }>
                                        {({ values, errors, handleChange, handleSubmit }) =>
                                            <form onSubmit={handleSubmit} >
                                                <Avatar userProfile={userData.displayName} handleUploadImage={handleUploadImage} name="avatar" id="avatar" value={userData.avatar} profile={profile} />
                                                <div className="detail">
                                                    <div className="row">
                                                        <div className="col-md-12 col-lg-6 col-xl-6">
                                                            <Input clName="form-group full-name w-100" labelName="Full Name" name="name" id="name" type="text" defaultValue={values.name} onChange={handleChange} />
                                                            {errors.name && <p className="text-danger">{errors.name}</p>}
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className=" col-md-12 col-lg-6 col-xl-6">
                                                            <Input clName="form-group w-100" id="email" name="email" labelName="Email" type="text" defaultValue={values.email} onChange={handleChange} />
                                                            {errors.email && <p className="text-danger">{errors.email}</p>}
                                                        </div>
                                                        <div className=" col-md-12 col-lg-6 col-xl-6">
                                                            <Input clName="form-group w-100" id="phone" name="phone" labelName="Phone" type="text" defaultValue={values.phone} onChange={handleChange} />
                                                            {errors.phone && <p className="text-danger">{errors.phone}</p>}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="change-pass detail">
                                                    <p>Change password</p>
                                                    <div className="row">
                                                        <div className="col-md-12 col-lg-6 col-xl-6">
                                                            <Input clName="form-group full-name" labelName="Current Password" name="oldPass" type="password" defaultValue={values.oldPass} onChange={handleChange} />
                                                            {errors.oldPass && <p className="text-danger">{errors.oldPass}</p>}
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12 col-lg-6  col-xl-6">
                                                            <Input clName="form-group full-name" labelName="New Password" name="newPass" type="password" defaultValue={values.newPass} onChange={handleChange} />
                                                            {errors.newPass && <p className="text-danger">{errors.newPass}</p>}
                                                        </div>
                                                        <div className="col-md-12 col-lg-6 col-xl-6">
                                                            <Input clName="form-group full-name" labelName="Confirm Password" name="confirmPass" type="password" defaultValue={values.confirmPass} onChange={handleChange} />
                                                            {errors.confirmPass && <p className="text-danger">{errors.confirmPass}</p>}
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
                                            </form>}
                                    </Formik>
                                </div>
                        }
                    </Fragment>
            }
        </>
    );

};

Profile.propTypes = {
    isAuthenticated: PropTypes.bool,
    loading: PropTypes.bool,
    profile: PropTypes.object,
    handleUpdateProfile: PropTypes.func,
    handleOnSubmit: PropTypes.func,
    handleUploadImage: PropTypes.func,
    handleClick: PropTypes.func,
};



export default (Profile);