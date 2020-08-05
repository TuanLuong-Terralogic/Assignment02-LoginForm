import * as Types from '../Constant/alert';
import api from '../../Api';
import jwt from 'jsonwebtoken';
import Swal from 'sweetalert2';

// user loaded
export const userLoaded = () => dispatch => {
    if (localStorage.token) {
        const profile = jwt.decode(localStorage.token)
        const profileData = JSON.stringify(profile);
        const user = localStorage.setItem('user', profileData);
        dispatch({
            type: Types.USER_LOADED,
            payload: user
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
        const res = await api.post('login', body, config);
        
        dispatch(() => {
            Swal.fire({
                icon: 'success',
                title: res.data.msg,
                showConfirmButton: true,
            })
        });
        dispatch({
            type: Types.LOGIN_SUCCESS,
            payload: res.data
        });
        
        dispatch(() => userLoaded());
        
        
    } catch (err) {
        const errors = err.response;
        if (errors) {
            dispatch(() => Swal.fire({
                icon: 'error',
                title: errors.data.msg,
                showConfirmButton: true,
            }));
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

        dispatch(() => {
            Swal.fire({
                icon: 'success',
                title: res.data.msg,
                showConfirmButton: true,
            })
        });
        dispatch({
            type: Types.REGISTER_SUCCESS,
            payload: res.data
        });
        // dispatch(userLoaded());
    } catch (err) {
        const errors = err.response;
        if (errors) {
            dispatch(() => Swal.fire({
                icon: 'error',
                title: errors.data.msg,
                showConfirmButton: true,
            }));
        }
        dispatch({
            type: Types.REGISTER_FAIL,
        });
    }
}

// logout
export const logout = () => dispatch => {
    dispatch({ type: Types.LOGOUT });
}