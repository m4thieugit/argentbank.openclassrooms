import React from 'react';
import './SignInForm.css';

const SignInForm = ({ email, setEmail, password, setPassword, handleLogin }) => {
    return (
        <form onSubmit={handleLogin}>
            <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre adresse e-mail"
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Votre mot de passe"
                />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">
                Sign In
            </button>
        </form>
    );
};

export default SignInForm;
