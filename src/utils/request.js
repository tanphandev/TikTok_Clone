import axios from 'axios';
export const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api',
});
