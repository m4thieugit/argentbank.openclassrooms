import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './SignIn.css';

import { loginSuccess, loginFailure } from '../../authSlice';
import { loginUser } from '../../authService';
import SignInForm from '../../components/SignInForm';

const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            let loginData = {
                email: e.target.email.value,
                password: e.target.password.value
            }

            const token = await loginUser(loginData);
            dispatch(loginSuccess({ token, rememberMe: e.target['remember-me'].checked }));
            navigate('/user');
        } catch (error) {
            dispatch(loginFailure(error.message || 'Erreur de connexion'));
            alert('Erreur.');
            console.error(error);
        }
    };

    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle"></i>
            <h1>Sign In</h1>
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