import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import Input from './Input';
import { logout } from '../Action/user';
import Loading from './Loading';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


const Profile = ({ user: { loading, user }, logout, history, profile }) => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const handleChange = e => {
        e.preventDefault();
        // setName(e.target.value = profile.displayName)
    }

    const handleClick = () =>{
        logout();
        history.push('/');
    }

    return (
        <>
            {
                !loading ? <Fragment><Loading /></Fragment> :
                    (
                        <div className="profile-wrapper">
                            <Avatar userProfile={profile.displayName} />
                            <div className="detail">
                                <div className="row">
                                    <div className="col-md-12 col-lg-6 col-xl-6">
                                        <Input clName="form-group full-name w-100" labelName="Full Name" type="text" value={name} onchange={handleChange}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className=" col-md-12 col-lg-6 col-xl-6">
                                        <Input clName="form-group w-100" labelName="Email" type="text" value={email} onChange={handleChange}/>
                                    </div>
                                    <div className=" col-md-12 col-lg-6 col-xl-6">
                                        <Input clName="form-group w-100" labelName="Phone" type="text" value={phone} onChange={handleChange}/>
                                    </div>
                                </div>
                            </div>

                            <div className="change-pass detail">
                                <p>Change password</p>

                                <div className="row">
                                    <div className="col-md-12 col-lg-6 col-xl-6">
                                        <Input clName="form-group full-name" labelName="Current Password" type="password" value={oldPass} onChange={handleChange}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 col-lg-6  col-xl-6">
                                        <Input clName="form-group w-100" labelName="New Password" type="password" value={newPass} onChange={handleChange}/>
                                    </div>
                                    <div className="col-md-12 col-lg-6 col-xl-6">
                                        <Input clName="form-group w-100" labelName="Confirm Password" type="password" value={confirmPass} onChange={handleChange}/>
                                    </div>
                                </div>
                            </div>

                            <div className="btn-user row">
                                <div className="col-11 col-sm-4 col-md-4 col-lg-2 col-xl-1">
                                    <button type="button" className="btn btn-save w-100">
                                        Save
                </button>
                                </div>
                                <div className="col-11 col-sm-6 col-md-6 col-lg-2 col-xl-2">
                                    <button type="button" className="btn btn-logout w-100" onClick={handleClick}>
                                        Logout
                </button>
                                </div>
                            </div>
                        </div>
                    )
            }
        </>
    );

};

Profile.propTypes = {
    profile: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
};

export default withRouter(connect(null, { logout })(Profile));