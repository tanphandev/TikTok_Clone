import { httpRequest } from '~/utils/httpRequest';

const tokenRequireAPIs = {
    checkCurrentUser: '/auth/me',
};

const nonTokenRequireAPIs = {
    registerUserByEmail: '/auth/register',
    loginUserByEmail: '/auth/login',
};

const setAuthToken = (token) => {
    httpRequest.interceptors.request.use(function (config) {
        const token = localStorage.getItem('token');
        config.headers.Authorization = token ? `Bearer ${token}` : '';
        return config;
    });
};
export { tokenRequireAPIs, nonTokenRequireAPIs, setAuthToken };
