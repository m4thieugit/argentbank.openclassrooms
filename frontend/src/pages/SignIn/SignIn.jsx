import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './SignIn.css';

import { loginSuccess, updateUserData, loginFailure } from '../../authSlice';
import { loginUser, fetchUserData } from '../../authService';
import SignInForm from '../../components/SignInForm';

const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { error } = useSelector((state) => state.auth);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            let loginData = {
                email: e.target.email.value,
                password: e.target.password.value
            }

            const token = await loginUser(loginData);
            const userData = await fetchUserData(token);

            await dispatch(loginSuccess({ token, rememberMe: e.target['remember-me'].checked }));
            await dispatch(updateUserData(userData));

            navigate('/user');
        } catch (error) {
            dispatch(loginFailure(error.message || 'Erreur de connexion'));
            console.error(error);
        }
    };

    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle"></i>
            <h1>Sign In</h1>
            { error && <p style={{ marginBottom: '10px' }}>{error}</p>}
            <SignInForm
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleLogin={handleLogin}
            />
        </section>
    );
};

export default SignIn;