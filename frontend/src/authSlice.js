import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: sessionStorage.getItem('isAuthenticated') || localStorage.getItem('isAuthenticated') || false,
    token: sessionStorage.getItem('token') || localStorage.getItem('token') || null,
    error: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.token = action.payload;
            state.isAuthenticated = true;
        },
        logoutSuccess: (state) => {
            state.token = null;
            state.isAuthenticated = false;
        },
        loginFailure: (state, action) => {
            state.error = action.payload;
            state.token = null;
            state.isAuthenticated = false;
        }
    },
});

export const { loginSuccess, logoutSuccess, loginFailure } = authSlice.actions;
export default authSlice.reducer;