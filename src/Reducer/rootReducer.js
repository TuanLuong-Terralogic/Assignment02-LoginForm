import {combineReducers} from 'redux';
import user from './user';
import alert from './alert';
import profile from './profile';
const rootReducer = combineReducers({
    user,
    alert,
    profile
});
export default rootReducer;