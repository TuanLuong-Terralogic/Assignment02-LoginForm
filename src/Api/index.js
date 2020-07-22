import axios from 'axios';
const api = axios.create({
    baseURL: "https://api-terralogic-training.firebaseapp.com/api"
});

export default api;