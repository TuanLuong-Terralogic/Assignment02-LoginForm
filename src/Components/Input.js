import React, { Fragment, useState } from 'react';
import eye from '../Assets/img/Suche03.svg';

const Input = React.forwardRef(({ clName = "", labelName = "", type = "", plHol = "", onChange, value }, ref) => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }



    return (
        <Fragment>
            {type === "password" ?
                <Fragment>
                    <div className={clName}>
                        <div className="pass-wrapper">
                            <label className="lbl-extend pl-2">{labelName}</label>
                            <input type={click ? "text" : "password"} name={labelName} className="form-control" value={value} onChange={onChange} placeholder={plHol} required />
                            <img src={eye} alt="Watching eye" className="eye" onClick={handleClick} />
                        </div>
                    </div>
                </Fragment>
                :
                <div className={clName}>
                    <label className="lbl-extend pl-2">{labelName}</label>
                    <input type={type} name={labelName} className="form-control text-field" value={value} onChange={onChange} placeholder={plHol} required />
                </div>
            }
        </Fragment>

    );
});

export default Input;