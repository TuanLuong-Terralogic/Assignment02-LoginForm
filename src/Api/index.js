import axios from 'axios';
const api = axios.create({
    baseURL: "http://api.terralogic.ngrok.io/api/"
});

export default api;