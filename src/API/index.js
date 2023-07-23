const API = {
    registerUserByEmail: process.env.REACT_APP_BASE_URL + '/auth/register',
    loginUserByEmail: process.env.REACT_APP_BASE_URL + '/auth/login',
};

export default API;
