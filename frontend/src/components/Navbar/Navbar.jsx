import React from 'react';
import './Navbar.css';

import AppLogo from '../../assets/img/argentBankLogo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'


const Navbar = () => {
    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href="/">
                <img
                    className="main-nav-logo-image"
                    src={AppLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
                <a className="main-nav-item" href="/sign-in">
                    <FontAwesomeIcon icon={faUserCircle} />
                    Sign In
                </a>
            </div>
        </nav>
    )
}

export default Navbar;