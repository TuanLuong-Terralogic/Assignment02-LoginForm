import React, { Fragment, useState } from 'react';
import eye from '../../Assets/img/Suche03.svg';
import eyeFilled from '../../Assets/img/Suche04.svg';

const Input = ({ clName = "", labelName = "", id = "", type = "", plHol = "", name, eyeType, onChange, value, defaultValue }) => {
    const [click, setClick] = useState(false);
    // const [isFocused, setIsFocused] = useState(true);
    const handleClick = () => {
        setClick(!click);
    }

    // const handleFocus = () => {
    //     setIsFocused(!isFocused);
    // }

    return (
        <Fragment>
            {type === "password" ?
                <Fragment>
                    <div className={clName}>
                        <div className="pass-wrapper">
                            <label className="lbl-extend pl-2">{labelName}</label>
                            <input type={click ? "text" : "password"} name={name} className="form-control" value={value} onChange={onChange} placeholder={plHol} />
                            <img src={eyeType === 'eye' ? eye : eyeFilled} alt="Watching eye" className="eye" onClick={handleClick} />
                        </div>
                    </div>
                </Fragment>
                :
                <div className={clName}>
                    <label className="lbl-extend pl-2">{labelName}</label>
                    <input type={type} name={name} id={id} className="form-control text-field" defaultValue={defaultValue} value={value} onChange={onChange} placeholder={plHol} />
                </div>
            }
        </Fragment>

    );
};

export default Input;