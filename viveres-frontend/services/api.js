import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.clarifai.com',
    headers: {
        "Authorization": "Key 1b0fa6df38df43f6a633733780210a2b",
        "Content-Type": "application/json",
    },
});

export default api;