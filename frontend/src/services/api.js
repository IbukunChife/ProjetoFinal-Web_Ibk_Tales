import axios from 'axios';

const api = axios.create({
    baseURL: "https://netclothes.herokuapp.com"
});

export default api;