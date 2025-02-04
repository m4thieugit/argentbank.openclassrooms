import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: sessionStorage.getItem('isAuthenticated') || localStorage.getItem('isAuthenticated') || false,
    token: sessionStorage.getItem('token') || localStorage.getItem('token') || null,
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
        logoutSuccess: (state) => {
            state.token = null;
            state.isAuthenticated = false;

            if (!sessionStorage.getItem('isAuthenticated')) {
                localStorage.removeItem('token');
                localStorage.removeItem('isAuthenticated');
            } else {
                sessionStorage.removeItem('token');
                sessionStorage.removeItem('isAuthenticated');
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

export const { loginSuccess, logoutSuccess, loginFailure } = authSlice.actions;
export default authSlice.reducer;