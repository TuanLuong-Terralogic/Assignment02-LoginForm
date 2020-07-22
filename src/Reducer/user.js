import * as Types from '../Constant/alert';
const initState={
    token: localStorage.getItem('token'),
    // msg: "",
    isAuthenticated: null,
    loading: false,
    user: null
};

const user = (state = initState, action) =>{
    switch (action.type) {
        case Types.LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                // msg: action.payload,
                isAuthenticated: true,
                loading: false
            }
        default:
            return state;
    }
}

export default user;