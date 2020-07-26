import React, { useState } from 'react';
import PropTypes from 'prop-types';
import edit from '../Assets/img/edit_photo.svg';

const Avatar = ({ userProfile }) => {

    const [uploadFile, setUploadFile] = useState('');
    const [click, setClick] = useState(false);

    const handleChange = e => {
        setUploadFile(e.target.files[0]);
        console.log(URL.createObjectURL(e.target.files[0]));
    }

    const handleClick = e => {
        setClick(true);
    }


    return (
        <div className="ava-wrapper">
            <div className="ava-container">
                <img src="https://png.pngtree.com/png-clipart/20190906/original/pngtree-520-couple-avatar-girl-avatar-little-dinosaur-cartoon-cute-png-image_4563357.jpg" alt="avatar" className="avatar" />
                <img type="file" src={edit} alt="edit pencil" className="edit" onClick={handleClick} />
                <input type="file" value={uploadFile} onChange={handleChange} />
            </div>
            <div className="user-name">
                <p>{userProfile}</p>
            </div>
        </div>
    );
};

Avatar.propTypes = {
    userProfile: PropTypes.string.isRequired,
};

export default Avatar;