import * as Types from '../Constant/alert';

const initState = [];

export const alert = (state = initState, action) => {
    switch(action.type){
        case Types.SET_ALERT:
            return [...state, action.payload];
        case Types.REMOVE_ALERT:
            return state.filter(alert => alert.id !== action.payload);
        default: 
            return state;
    }
}

export default alert;