import React from 'react';
import ProfileHeader from '../Components/ProfileHeader';
import Profile from '../Components/Profile';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ProfileLayout = ({ user }) => {
    return (
        <div className="wrapper">
            <div className="login-container">
                <div className="profile">
                    <ProfileHeader />
                    <Profile user={user} />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(ProfileLayout);