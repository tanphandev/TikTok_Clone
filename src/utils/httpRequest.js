import axios from 'axios';
const defaultConfig = {
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
};
export const httpRequest = axios.create(defaultConfig);
