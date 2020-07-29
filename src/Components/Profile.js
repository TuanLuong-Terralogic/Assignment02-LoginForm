import React, { Fragment, useState, useEffect, isValidElement } from 'react';
// import PropTypes from 'prop-types';
import Avatar from './Avatar';
import Input from './Input';
import Loading from './Loading';
import { withRouter } from 'react-router-dom';
// import { useFormik } from 'formik';
import * as yup from 'yup';


const Profile = ({ profile, user: { loading, isAuthenticated }, handleUpdateProfile, handleUploadImage, handleClick, history, handleSubmit, handleUpdateAll }) => {
    
    // Reg Exp
    const passRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const phoneRegEx = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    const emailRedEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    const validationSchema = yup.object().shape({
        email: yup.string().email('Invalid email format').matches(emailRedEx, 'Invalid email'),
        phone: yup.string().matches(phoneRegEx, 'Invalid phone').min(10, 'Invalid phone'),
        oldPass: yup.string().required('Required'),
        newPass: yup.string().min(8, 'At least 8 character').max(16, 'Maximum 16 characters').matches(passRegEx, 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'),
        confirmPass: yup.string().oneOf([yup.ref('newPass')], "Password is not match"),
    })

   
    
    // get user from local storage
    const userLocal = localStorage.getItem('user');
    const userData = JSON.parse(userLocal);

    // Profile info
    const [image, setImage] = useState(null);
    const [email, setEmail] = useState(userData.email);
    const [name, setName] = useState(userData.name);
    const [phone, setPhone] = useState(userData.phone);
    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [isError, setIsError] = useState({
        email: '',
        name: '',
        phone: '',
        newPassword:'',
        confirmPassword:''
    });
    
    const handleImageChange = async e => {
        e.preventDefault();
        setImage(e.target.files[0]);
        await handleUploadImage(e.target.files[0]);
    }

    const handleEmailChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
        if(validationSchema.isValidSync(email)){
            console.log(validationSchema.isValid())
        }
    }

    const handleNameChange = e => {
        e.preventDefault();
        setName(e.target.value);
    }
    const handlePhoneChange = e => {
        e.preventDefault();
        setPhone(e.target.value);
    }
    const handleOldPassChange = e => {
        e.preventDefault();
        setOldPass(e.target.value);
    }
    const handleNewPassChange = e => {
        e.preventDefault();
        setNewPass(e.target.value);
    }
    const handleConfirmPassChange = e => {
        e.preventDefault();
        setConfirmPass(e.target.value);
    }

    const handleOnSubmit = async e => {
        e.preventDefault(); 

        await handleUpdateAll({email:email, name:name, phone:phone, avatar: profile.dataImg, password: newPass, currentPassword: oldPass});
    }

    const handleOnClick = () => {
        handleClick();
        history.push('/');
    }

    const formValid = ({isError, ...rest}) => {
        let isValid = false;

        Object.values(isError).forEach(val => {
            if(isValidElement.length > 0){
                isValid = false;
            } else {
                isValid = true;
            }
        });

        Object.values(rest).forEach(val => {
            if(val === null){
                isValid = false;
            } else {
                isValid = true;
            }
        });

        return isValid;
    }

    const formValChange = e => {
        e.preventDefault();
        const {value} = e.target;
        let isErrors = {...isError};

        switch(name){
            case 'name':
                isErrors.name = value.length === 0 ? "Required" : "";
                break;
            case 'email':
                isErrors.email = emailRedEx.test(value) ? "" : "Invalid email";
                break;
            case 'phone':
                isErrors.phone = phoneRegEx.test(value) ? "" : "Invalid phone";
                break;
            case 'newPass':
                isErrors.newPassword = passRegEx.test(value) ? "" : "Invalid password";
                break;
            case 'confirmPass':
                isErrors.confirmPassword = value === newPass ? "" : "Password does not match";
                break;
            default: 
                break; 
        }

        setIsError({isError, value});
    }

    return (
        <>
            {
                loading ? <Fragment><Loading /></Fragment> :
                    <Fragment >
                        {/* {
                            !isAuthenticated ? <Fragment><Loading /></Fragment> : */}
                        <div className="profile-wrapper">
                            <form onSubmit={handleOnSubmit} >
                                <Avatar userProfile={userData.displayName} onChange={handleImageChange} name="avatar" id="avatar" value={userData.avatar}/>

                                <div className="detail">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-6 col-xl-6">
                                            <Input clName="form-group full-name w-100" labelName="Full Name" id="name" type="text" value={name} onChange={formValChange} />
                                            
                                            {isError.name.length > 0 && (<span className="invalid-feedback">{isError.name}</span>)}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className=" col-md-12 col-lg-6 col-xl-6">
                                            <Input clName="form-group w-100" id="email" name="email" labelName="Email" type="text" value={email} onChange={formValChange} />
                                            {isError.email.length > 0 && (<span className="invalid-feedback">{isError.email}</span>)}
                                        </div>
                                        <div className=" col-md-12 col-lg-6 col-xl-6">
                                            <Input clName="form-group w-100" id="phone" name="phone" labelName="Phone" type="text" value={phone} onChange={formValChange} />
                                            {isError.phone.length > 0 && (<span className="invalid-feedback">{isError.phone}</span>)}
                                        </div>
                                    </div>
                                </div>

                                <div className="change-pass detail">
                                    <p>Change password</p>
                                    <div className="row">
                                        <div className="col-md-12 col-lg-6 col-xl-6">
                                            <Input clName="form-group full-name" labelName="Current Password" name="oldPass" type="password" value={oldPass} onChange={handleOldPassChange} />

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 col-lg-6  col-xl-6">
                                            <Input clName="form-group w-100" labelName="New Password" name="newPass" type="password" value={newPass} onChange={formValChange} />
                                            {isError.newPassword.length > 0 && (<span className="invalid-feedback">{isError.newPassword}</span>)}
                                        </div>
                                        <div className="col-md-12 col-lg-6 col-xl-6">
                                            <Input clName="form-group w-100" labelName="Confirm Password" name="confirmPass" type="password" value={confirmPass} onChange={formValChange} />
                                            {isError.confirmPassword.length > 0 && (<span className="invalid-feedback">{isError.confirmPassword}</span>)}

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
                        {/* } */}
                    </Fragment>
            }
        </>
    );

};

// Profile.propTypes = {
//     // isAuthenticated: PropTypes.bool.isRequired,
// };

export default withRouter(Profile);