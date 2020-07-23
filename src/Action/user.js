import * as Types from '../Constant/alert';
import api from '../Api';

// Login 
export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ email, password });

    try {
        const res = await api.post("login", body, config);

        dispatch({
            type: Types.LOGIN_SUCCESS,
            payload: res.data
        })
        // console.log(res.data);
    } catch (err) {
        // console.error(err.response.data.msg);
        const error = err.response.data.msg;
        console.log(error);
        dispatch({
            type: Types.LOGIN_FAIL
        })
        
    }
}

// 