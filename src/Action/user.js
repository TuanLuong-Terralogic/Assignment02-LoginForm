import * as Types from '../Constant/alert';
import api from '../Api';
import jwt from 'jsonwebtoken';
import Swal from 'sweetalert2';

// user loaded
export const userLoaded = () => dispatch => {
    if (localStorage.token) {
        const profile = jwt.decode(localStorage.token)
        dispatch({
            type: Types.USER_LOADED,
            payload: profile
        })
    }
    else {
        dispatch({
            type: Types.AUTH_ERROR
        })
    }
}

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

        dispatch(Swal.fire({
            icon: 'success',
            title: res.data.msg,
            showConfirmButton: true,
        }));

        dispatch({
            type: Types.LOGIN_SUCCESS,
            payload: res.data
        });

    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            console.log(errors.msg)
        }
        dispatch({
            type: Types.LOGIN_FAIL,
        })

    }
}

// Register
export const register = (email, password, name, phone) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, password, name, phone });

    try {
        const res = await api.post("register", body, config);

        dispatch({
            type: Types.REGISTER_SUCCESS,
            payload: res.data
        });
        dispatch(Swal.fire({
            icon: 'success',
            title: res.data.msg,
            showConfirmButton: true,
        }));
    } catch (err) {
        const errors = err.response.data.msg;
        console.log(errors)
        // if(errors){
        //     errors.forEach(error => dispatch(setAlert(error, 'danger', 5000)));
        // }

        dispatch({
            type: Types.REGISTER_FAIL
        })
    }
}

// logout
export const logout = () => dispatch => {
    dispatch({ type: Types.LOGOUT });
}