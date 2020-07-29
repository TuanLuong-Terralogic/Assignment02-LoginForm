import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import edit from '../Assets/img/edit_photo.svg';

const Avatar = ({ userProfile, value, onChange, name, id }) => {

    const handleClick = () => {
        inpRef.current.click();
    }

    const inpRef = useRef(null);

    return (
        <div className="ava-wrapper">
            <div className="ava-container">
                <img src={!value ? "" : value } alt="avatar" className="avatar" />
                <img type="file" src={edit} alt="edit pencil" className="edit" onClick={handleClick} />
                <input type="file" className="form-control-file" onChange={onChange} id={id} name={name} ref={inpRef} style={{ "display": "none" }} />
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