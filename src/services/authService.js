import { httpRequest } from '~/utils/httpRequest';

export const registerUser = async (email, password, type) => {
    try {
        const res = await httpRequest.post('/auth/register', {
            email,
            password,
            type,
        });
        return res.data;
    } catch (error) {
        console.log(error);
        return error.message;
    }
};

export const loginUser = async (email, password) => {
    try {
        const res = await httpRequest.post('/auth/login', {
            email,
            password,
        });
        return res.data;
    } catch (error) {
        return {
            data: '',
            status: 'Login faild',
        };
    }
};
export const getProfile = async (token) => {
    try {
        const res = await httpRequest.get('/auth/me', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res;
    } catch (error) {
        return { data: '', status: 'authentication unsuccess' };
    }
};
