import React from 'react';

const ImageValid = ({ fileValid }) => {

  return (
    <>
      <p data-testid="image" className={`text-danger ${fileValid ? 'invisible ' : 'visible '}`}>
        Invalid type
      </p>
    </>
  );
};

export default ImageValid;