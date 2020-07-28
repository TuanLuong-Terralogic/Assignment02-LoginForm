import React from 'react';
import ProfileHeader from '../Components/ProfileHeader';
import Profile from '../Components/Profile';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {changePassword} from '../Action/profile';
import {logout} from '../Action/user';
import {withRouter} from 'react-router-dom';

const ProfileLayout = ({profile, user, changePassword, logout }) => {

    const handleSubmit = async (password, currentPassword) => {
        changePassword(password, currentPassword);
    }

    const handleClick = () => {
        logout();
    }

    return (
        <div className="wrapper">
            <div className="login-container">
                <div className="profile">
                    <ProfileHeader />
                    <Profile user={user} profile={profile} handleSubmit={handleSubmit} handleClick={handleClick}/>
                </div>
            </div>
        </div>
    );
};

Profile.propTypes = {
    user: PropTypes.object.isRequired,
    changePassword: PropTypes.func,
    logout: PropTypes.func,
}

const mapStateToProps = state => {
    return {
        user: state.user,
        profile: state.profile
    }
}

export default withRouter(connect(mapStateToProps, {changePassword, logout})(ProfileLayout));