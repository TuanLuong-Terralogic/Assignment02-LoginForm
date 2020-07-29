import React from 'react';
import ProfileHeader from '../Components/ProfileHeader';
import Profile from '../Components/Profile';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../Action/user';
import { uploadAvatar, changePassword, updateProfile, updateAll } from '../Action/profile';
import { withRouter } from 'react-router-dom';

const ProfileLayout = ({ profile, user, changePassword, logout, uploadAvatar, updateProfile, updateAll }) => {

    const handleOnSubmit = async ({password, currentPassword}) => {
        changePassword({password, currentPassword});
    }

    const handleUploadImage = async (file) => {
        uploadAvatar(file);
    }

    const handleUpdateProfile = async ({email, name, phone, avatar}) => {
        updateProfile({email, name, phone, avatar});
    }

    const handleUpdateAll = async ({email, name, phone, avatar, password, currentPassword}) => {
        console.log(email, name, phone, avatar, password, currentPassword)
        updateAll({email, name, phone, avatar, password, currentPassword});
    }

    const handleClick = () => {
        logout();
    }

    return (
        <div className="wrapper">
            <div className="login-container">
                <div className="profile">
                    <ProfileHeader />
                    <Profile user={user} profile={profile} handleOnSubmit={handleOnSubmit} handleClick={handleClick} handleUploadImage={handleUploadImage} handleUpdateProfile={handleUpdateProfile} handleUpdateAll={handleUpdateAll}/>
                </div>
            </div>
        </div>
    );
};

Profile.propTypes = {
    user: PropTypes.object.isRequired,
    changePassword: PropTypes.func,
    logout: PropTypes.func,
    uploadAvatar: PropTypes.func,
    updateProfile: PropTypes.func,
    updateAll: PropTypes.func
}

const mapStateToProps = state => {
    return {
        user: state.user,
        profile: state.profile
    }
}

export default withRouter(connect(mapStateToProps, { updateAll, updateProfile, uploadAvatar, changePassword, logout })(ProfileLayout));