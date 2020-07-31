import React from 'react';
import PropTypes from 'prop-types';
import edit from '../../Assets/img/edit_photo.svg';
import ModalUpload from './ModalUpload./ModalUpload';

const Avatar = ({ userProfile, value, onChange, name, id, handleUploadImage }) => {

    return (
        <div className="ava-wrapper">
            <div className="ava-container col-6 col-sm-3  col-md-3 col-lg-2 col-xl-1 ml-0 mr-3 mb-4">
                <img src={!value ? "" : value} alt="avatar" className="avatar" />
                <img type="file" src={edit} alt="edit pencil" className="edit" data-toggle="modal" data-target="#modelId" />
                <ModalUpload handleUploadImage={handleUploadImage} name={name} id={id} />
            </div>
            <div className="user-name col-7 col-sm-9 col-xs-10 col-xl-10">
                <p>{userProfile}</p>
            </div>
        </div>
    );
};

Avatar.propTypes = {
    userProfile: PropTypes.string.isRequired,
};

export default Avatar;