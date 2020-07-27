import React from 'react';
import ProfileHeader from '../Components/ProfileHeader';
import Profile from '../Components/Profile';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ProfileLayout = ({profile, user }) => {
    return (
        <div className="wrapper">
            <div className="login-container">
                <div className="profile">
                    <ProfileHeader />
                    <Profile user={user} profile={profile}/>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user,
        profile: state.profile
    }
}

export default connect(mapStateToProps)(ProfileLayout);