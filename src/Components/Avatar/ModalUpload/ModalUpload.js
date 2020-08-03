import React, { useState, useEffect } from 'react';
import { validateImage } from '../../../Utils/ImageValid/ValidateImage'
import ImageValid from '../../../Utils/ImageValid';


const ModalUpload = ({ id, name, handleUploadImage }) => {

  const [fileValid, setFileValid] = useState(null);
  const [image, setImage] = useState(null);

  const handleOnImageChange = async e => {
    e.preventDefault();
    setImage(e.target.files[0]);
  }

  const handleSubmit = async e => {
    await handleUploadImage(image);
  }

  useEffect(() => {
    if (image) {
      if (validateImage(image)) {
        setFileValid(true);
      } else {
        setFileValid(false);
      }
    }

  }, [image]);
  return (
    <div>

      <div className="modal fade" id="modelId" tabIndex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Upload your avatar</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input type="file" className="form-control-file" onChange={handleOnImageChange} id={id} name={name} />
              <ImageValid fileValid={fileValid} />
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary" disabled={fileValid ? false : true} onClick={handleSubmit} data-dismiss="modal">Save</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default ModalUpload;