import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import Input from './Input';


const Profile = props => {


    return (
        <div className="profile-wrapper">
            <Avatar />
            <div className="detail">
                <Input clName="form-group full-name" labelName="Full Name" type="text" defVal="Tuan Luong" />
                <div className="row">
                    <Input clName="form-group col-md-12 col-xl-6" labelName="Email" type="text" defVal="tuan.luong@terralogic.com" />
                    <Input clName="form-group col-md-12 col-xl-6" labelName="Phone" type="text" defVal="0398448546" />
                </div>
            </div>

            <div className="change-pass detail">
                <p>Change password</p>

                <Input clName="form-group full-name" labelName="Current Password" type="password" defVal="" />
                <div className="row">
                    <Input clName="form-group col-md-12 col-xl-6" labelName="New Password" type="password" defVal="" />
                    <Input clName="form-group col-md-12 col-xl-6" labelName="Confirm Password" type="password" defVal="" />
                </div>
            </div>

            <div className="btn-profile">
                <button type="button" className="btn btn-save">
                    Save
                </button>
                <button type="button" className="btn btn-logout" >
                    Logout
                </button>
            </div>
        </div>
    );
};

Profile.propTypes = {

};

export default Profile;