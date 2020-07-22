import React, { Fragment, useState } from 'react';
import eye from '../Assets/img/Suche03.svg';

const Input = ({ clName = "", labelName = "", defVal = "", type = "", onClick, plHol = "" }) => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        onClick(setClick(!click));
    }
    

    return (
        <Fragment>
            {type === "password" ?
                <div className={clName}>
                    <label className="lbl-extend">{labelName}</label>
                    <input type={type} name={labelName} className="form-control" defaultValue={defVal} placeholder={plHol} />
                    <img src={eye} alt="Watching eye" className="eye" onClick={handleClick} />
                </div> 
                && click === true ?
                    <div className={clName}>
                        <label className="lbl-extend">{labelName}</label>
                        <input type="text" name={labelName} className="form-control" defaultValue={defVal} placeholder={plHol} />
                        <img src={eye} alt="Watching eye" className="eye" onClick={handleClick} />
                    </div>
                    :
                    <div className={clName}>
                        <label className="lbl-extend">{labelName}</label>
                        <input type="password" name={labelName} className="form-control" defaultValue={defVal} placeholder={plHol}/>
                        <img src={eye} alt="Watching eye" className="eye" onClick={handleClick} />
                        
                    </div>:
                    <div className={clName}>
                    <label className="lbl-extend">{labelName}</label>
                    <input type={type} name={labelName} className="form-control text-field" defaultValue={defVal} />
                    
                </div>
            }
        </Fragment>

    );
};

export default Input;