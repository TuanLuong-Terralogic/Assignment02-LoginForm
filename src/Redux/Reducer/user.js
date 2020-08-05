import * as Types from '../Constant/alert';
import jwt from 'jsonwebtoken'

const initState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    msg: '',
    loading: null,
    user: null
};

const user = (state = initState, action) => {
    const { type, payload } = action
    switch (type) {
        case Types.USER_LOADED:
            const data = JSON.stringify(jwt.decode(localStorage.getItem('token')));
            localStorage.setItem('user', data);
            return {
                ...state,
                // ...payload,
                isAuthenticated: true,
                loading: false,
                user: payload
            }
        case Types.REGISTER_SUCCESS:
            localStorage.removeItem('token');
            return {
                ...state,
                ...payload,
                // isAuthenticated: false,
                msg: payload.msg,
                // loading: false
            };
        case Types.LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            const userData = JSON.stringify(jwt.decode(localStorage.getItem('token')));
            localStorage.setItem('user', userData);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                msg: payload.msg,
                loading: false
            };

        // case Types.GET_USER_FAIL:
        case Types.REGISTER_FAIL: 
        case Types.AUTH_ERROR:
        case Types.LOGIN_FAIL:
        case Types.LOGOUT:
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
            }
        
       
        default:
            return state;
    }
}

export default user;