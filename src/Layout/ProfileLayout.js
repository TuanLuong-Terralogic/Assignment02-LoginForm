import React from 'react';
import ProfileHeader from '../Components/ProfileHeader';
import Profile from '../Components/Profile';

const ProfileLayout = () => {
    return (
        <div className="wrapper">
            <div className="login-container">
                <div className="profile">
                    <ProfileHeader />
                    <Profile />
                 </div>
            </div>
        </div>
    );
};

export default ProfileLayout;