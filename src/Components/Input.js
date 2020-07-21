import React, { Fragment } from 'react';
import eye from '../Assets/img/Suche03.svg';

const Input = ({ clName = "", labelName = "", defVal = "", type = "" }) => {
    return (
        <Fragment>
            {type === "password" ?
                <div className={clName}>
                    <label className="lbl-extend">{labelName}</label>
                    <input type={type} name={labelName} className="form-control" defaultValue={defVal} />
                    <img src={eye} alt="Watching eye" className="eye" />
                </div>
                :
                <div className={clName}>
                    <label className="lbl-extend">{labelName}</label>
                    <input type={type} name={labelName} className="form-control" defaultValue={defVal} />
                </div>
            }
        </Fragment>

    );
};

export default Input;