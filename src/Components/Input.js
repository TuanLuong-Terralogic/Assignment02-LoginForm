import React, { Fragment, useState} from 'react';
import eye from '../Assets/img/Suche03.svg';

const Input = React.forwardRef(({ clName = "", labelName = "", defVal = "", type = "", onClick, plHol = ""}, ref) => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        onClick(setClick(!click));
    }

    return (
        <Fragment>
            {type === "password" ?
                <div className={clName}>
                    <label className="lbl-extend">{labelName}</label>
                    <input type={type} name={labelName} className="form-control" defaultValue={defVal} placeholder={plHol} ref={ref}/>
                    <img src={eye} alt="Watching eye" className="eye" onClick={handleClick}  />
                </div>
                :
                <div className={clName}>
                    <label className="lbl-extend">{labelName}</label>
                    <input type={type} name={labelName} className="form-control text-field" defaultValue={defVal} placeholder={plHol} ref={ref} />
                </div>
            }
        </Fragment>

    );
});

export default Input;