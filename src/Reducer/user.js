import * as Types from '../Constant/alert';
const initState={
    token: localStorage.getItem('token'),
    // msg: "",
    isAuthenticated: null,
    loading: false,
    user: null
};

const user = (state = initState, action) =>{
    const {type, payload} = action
    switch (type) {
        case Types.LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                // msg: action.payload,
                isAuthenticated: true,
                loading: false
            };
        
        case Types.LOGIN_FAIL:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }
        default:
            return state;
    }
}

export default user;