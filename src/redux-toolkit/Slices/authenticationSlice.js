import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import API from '~/API';
import { httpRequest } from '~/utils/httpRequest';
const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: {
        apiName: '',
        isLoading: false,
        isSuccess: false,
        isCurrentUser: false,
        errorMessage: '',
        isOpenModal: false,
    },
    reducers: {
        changeIsCurrentUser: (state, action) => {
            state.isCurrentUser = action.payload;
        },
        changeIsOpenModal: (state, action) => {
            state.isOpenModal = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUserByEmail.pending, (state, action) => {
                state.apiName = 'registerUserByEmail';
                state.isLoading = true;
            })
            .addCase(registerUserByEmail.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.errorMessage = action.payload;
                toast.error('The account registration failed', { theme: 'colored', autoClose: 2000 });
            })
            .addCase(registerUserByEmail.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isCurrentUser = true;
                localStorage.setItem('currentUser', JSON.stringify(action.payload.data));
                localStorage.setItem('token', `${action.payload.meta.token}`);
                toast.success('Register account was successfull', { theme: 'colored', autoClose: 2000 });
                state.isOpenModal = false;
            })
            .addCase(loginUserByEmail.pending, (state, action) => {
                state.apiName = 'loginUserByEmail';
                state.isLoading = true;
            })
            .addCase(loginUserByEmail.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.errorMessage = action.payload;
                toast.error('Login is failded', { theme: 'colored', autoClose: 2000 });
                state.isOpenModal = false;
            })
            .addCase(loginUserByEmail.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isCurrentUser = true;
                localStorage.setItem('currentUser', JSON.stringify(action.payload.data));
                localStorage.setItem('token', `${action.payload.meta.token}`);
                toast.success('Login is successfull', { theme: 'colored', autoClose: 2000 });
                state.isOpenModal = false;
            });
    },
});

export default authenticationSlice;

export const registerUserByEmail = createAsyncThunk(
    'authentication/registerUserByEmail',
    async ({ email, password, type }, { rejectWithValue }) => {
        try {
            const res = await httpRequest.post(API.registerUserByEmail, {
                email,
                password,
                type,
            });
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

export const loginUserByEmail = createAsyncThunk(
    'authentication/loginUser',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const res = await httpRequest.post(API.loginUserByEmail, {
                email,
                password,
            });
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);
