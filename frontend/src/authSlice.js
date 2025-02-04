import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: sessionStorage.getItem('isAuthenticated') || localStorage.getItem('isAuthenticated') || false,
    token: sessionStorage.getItem('token') || localStorage.getItem('token') || null,
    userData: sessionStorage.getItem('userData') || localStorage.getItem('userData') || null,
    error: null,
    rememberMe: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.token = action.payload.token;
            state.isAuthenticated = true;

            if (!action.payload.rememberMe || action.payload.rememberMe === 'false') {
                localStorage.setItem('token', action.payload.token);
                localStorage.setItem('isAuthenticated', true);
            } else {
                sessionStorage.setItem('token', action.payload.token);
                sessionStorage.setItem('isAuthenticated', true);
                state.rememberMe = false;
            }
        },
        updateUserData: (state, action) => {
            const userData = JSON.stringify(action.payload);
            state.userData = userData;
            if (!sessionStorage.getItem('isAuthenticated')) {
                localStorage.setItem('userData', userData);
            } else {
                sessionStorage.setItem('userData', userData);
            }
        },
        logoutSuccess: (state) => {
            state.token = null;
            state.isAuthenticated = false;

            if (!sessionStorage.getItem('isAuthenticated')) {
                localStorage.removeItem('token');
                localStorage.removeItem('isAuthenticated');
                localStorage.removeItem('userData');
            } else {
                sessionStorage.removeItem('token');
                sessionStorage.removeItem('isAuthenticated');
                sessionStorage.removeItem('userData');
                state.rememberMe = false;
            }
        },
        loginFailure: (state, action) => {
            state.error = action.payload;
            state.token = null;
            state.isAuthenticated = false;
            state.rememberMe = false;
        }
    },
});

export const { loginSuccess, updateUserData, logoutSuccess, loginFailure } = authSlice.actions;
export default authSlice.reducer;