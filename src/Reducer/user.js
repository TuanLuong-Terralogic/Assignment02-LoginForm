import * as Types from '../Constant/alert';
import jwt from 'jsonwebtoken';
const initState={
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    msg: '',
    loading: null,
    user: null
};

const user = (state = initState, action) =>{
    const {type, payload} = action
    switch (type) {
        // case Types.GET_USER:
        //     return {
        //         ...state,
        //         // ...payload,
        //         isAuthenticated: true,
        //         loading: false,
        //         user: payload
        //     }
        case Types.USER_LOADED:
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false,
                user: payload
            }
        case Types.REGISTER_SUCCESS:
            localStorage.removeItem('token');
            return{
                ...state,
                ...payload,
                isAuthenticated: true,
                msg: payload.msg,
                loading: false
            };
        case Types.LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                msg: payload.msg,
                loading: false
            };
        
            // case Types.GET_USER_FAIL:
        case Types.REGISTER_FAIL:
        case Types.LOGOUT:
        case Types.AUTH_ERROR:
        case Types.LOGIN_FAIL:
            localStorage.removeItem('token');
            return{
                ...state,
                isAuthenticated: false,
                // msg: payload,
                loading: false,
            }
        default:
            return state;
    }
}

export default user;