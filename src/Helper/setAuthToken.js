import api from '../Api';

const setAuthToken = token => {
    if (token){
        console.log(api.defaults.headers.common);
    }
}