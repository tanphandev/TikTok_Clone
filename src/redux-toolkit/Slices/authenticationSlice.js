import { fas } from '@fortawesome/free-solid-svg-icons';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { nonTokenRequireAPIs, setAuthToken, tokenRequireAPIs } from '~/API';
import { httpRequest } from '~/utils/httpRequest';
const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: {
        isLoading: false,
        isSuccess: false,
        isCurrentUser: false,
        error: null,
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
                state.isLoading = true;
            })
            .addCase(registerUserByEmail.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.error = action.payload;
            })
            .addCase(registerUserByEmail.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isCurrentUser = true;
                state.error = null;
                localStorage.setItem('currentUser', JSON.stringify(action.payload.data));
                localStorage.setItem('token', `${action.payload.meta.token}`);
            })
            .addCase(loginUserByEmail.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(loginUserByEmail.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.error = action.payload;
            })
            .addCase(loginUserByEmail.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isCurrentUser = true;
                state.error = null;
                localStorage.setItem('currentUser', JSON.stringify(action.payload.data));
                localStorage.setItem('token', `${action.payload.meta.token}`);
            })
            .addCase(checkCurrentUser.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(checkCurrentUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isCurrentUser = true;
                state.error = null;
                localStorage.setItem('currentUser', JSON.stringify(action.payload.data));
            })
            .addCase(checkCurrentUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isCurrentUser = false;
                state.error = action.payload;
                localStorage.removeItem('token');
                localStorage.removeItem('currentUser');
            });
    },
});

export default authenticationSlice;

export const registerUserByEmail = createAsyncThunk(
    'authentication/registerUserByEmail',
    async ({ email, password, type }, { rejectWithValue, dispatch }) => {
        try {
            const res = await httpRequest.post(nonTokenRequireAPIs.registerUserByEmail, {
                email,
                password,
                type,
            });
            toast.success('Register account was successfull', { theme: 'colored', autoClose: 500 });
            setTimeout(() => {
                dispatch(authenticationSlice.actions.changeIsOpenModal(false));
            }, 1100);
            return res.data;
        } catch (error) {
            toast.error('The account registration failed', { theme: 'colored', autoClose: 2000 });
            return rejectWithValue(error.response.data);
        }
    },
);

export const loginUserByEmail = createAsyncThunk(
    'authentication/loginUser',
    async ({ email, password }, { rejectWithValue, dispatch }) => {
        try {
            const res = await httpRequest.post(nonTokenRequireAPIs.loginUserByEmail, {
                email,
                password,
            });
            toast.success('Login is successfull', { theme: 'colored', autoClose: 500 });
            setTimeout(() => {
                dispatch(authenticationSlice.actions.changeIsOpenModal(false));
            }, 1100);
            return res.data;
        } catch (error) {
            toast.error('Login is failded', { theme: 'colored', autoClose: 2000 });
            return rejectWithValue(error.response.data);
        }
    },
);

export const checkCurrentUser = createAsyncThunk(
    'authentication/checkCurrentUser',
    async ({ token }, { rejectWithValue }) => {
        try {
            setAuthToken(token);
            const res = await httpRequest.get(tokenRequireAPIs.checkCurrentUser, {});
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);
