import React from 'react';
import lsImage from '../../Assets/img/solution-experts.png';

const Images = () => {
    return (
        <div data-testid="images" className="img-container col-md-12 col-lg-12 col-xl-6">
            <img src={lsImage} alt="solution-expert" />
        </div>
    );
};

export default Images;