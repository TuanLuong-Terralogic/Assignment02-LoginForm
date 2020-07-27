import * as Types from '../Constant/alert';
import {v4 as uuidv4} from 'uuid';

export const setAlert = (msg, alertType, timeOut) => dispatch =>{
    const id = uuidv4();
    dispatch({
        type: Types.SET_ALERT,
        payload: {msg, alertType, timeOut}
    })

    setTimeout(dispatch => dispatch({type: Types.REMOVE_ALERT, payload:id}));
}