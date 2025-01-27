import React from 'react';
import './SignIn.css';

import SignInForm from '../../components/SignInForm';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'

const SignIn = () => {
    return (
        <>
            <section className="sign-in-content">
                <FontAwesomeIcon icon={faUserCircle} />
                <h1>Sign In</h1>
                <SignInForm></SignInForm>
            </section>
        </>
    )
}

export default SignIn;