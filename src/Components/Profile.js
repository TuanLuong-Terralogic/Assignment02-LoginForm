import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import Input from './Input';
import jwt from 'jsonwebtoken';
import Loading from './Loading';


const Profile = ({ user }) => {

    if (user) {
        const profile = localStorage.getItem('token');
        const userProfile = jwt.decode(profile);
        console.log(userProfile);

        return (
            <div className="profile-wrapper">
                <Avatar userProfile={userProfile.displayName} />
                <div className="detail">
                    <Input clName="form-group full-name" labelName="Full Name" type="text" value={userProfile.name} />
                    <div className="row">
                        <div className=" col-md-12 col-lg-6 col-xl-6">
                            <Input clName="form-group w-100" labelName="Email" type="text" value={userProfile.email} />
                        </div>
                        <div className=" col-md-12 col-lg-6 col-xl-6">
                            <Input clName="form-group w-100" labelName="Phone" type="text" value={userProfile.phone} />
                        </div>


                    </div>
                </div>

                <div className="change-pass detail">
                    <p>Change password</p>

                    <Input clName="form-group full-name" labelName="Current Password" type="password" value={userProfile.password} />
                    <div className="row">
                        <div className="col-md-12 col-lg-6  col-xl-6">
                            <Input clName="form-group w-100" labelName="New Password" type="password" />
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-6">
                            <Input clName="form-group w-100" labelName="Confirm Password" type="password" />
                        </div>
                    </div>
                </div>

                <div className="btn-profile row">
                    <div className="col-11 col-sm-4 col-md-4 col-lg-2 col-xl-1">
                        <button type="button" className="btn btn-save w-100">
                            Save
                </button>
                    </div>
                    <div className="col-11 col-sm-6 col-md-6 col-lg-2 col-xl-2">
                        <button type="button" className="btn btn-logout w-100" >
                            Logout
                </button>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <Loading />
        );
    }
};

Profile.propTypes = {
    user: PropTypes.object.isRequired,
};

export default Profile;