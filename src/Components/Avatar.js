import React from 'react';
import PropTypes from 'prop-types';
import edit from '../Assets/img/edit_photo.svg';

const Avatar = () => {
    return (
        <div className="ava-wrapper">
                <div className="ava-container">
                    <img src="https://png.pngtree.com/png-clipart/20190906/original/pngtree-520-couple-avatar-girl-avatar-little-dinosaur-cartoon-cute-png-image_4563357.jpg" alt="avatar" className="avatar"/>
                    <img src={edit} alt="edit pencil" className="edit"/>
                </div>
                <div className="user-name">
                    <p>Tuan Luong</p>
                </div>
            </div>
    );
};

Avatar.propTypes = {
    
};

export default Avatar;