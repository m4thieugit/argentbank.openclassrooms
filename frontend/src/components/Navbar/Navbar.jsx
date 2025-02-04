import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData } from '../../authService';
import { logoutSuccess } from '../../authSlice';

import './Navbar.css';

import AppLogo from '../../assets/img/argentBankLogo.png';

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isAuthenticated, token, userData } = useSelector((state) => state.auth);
    const uData = JSON.parse(userData);

    const logoutUser = () => { 
        dispatch(logoutSuccess());
        navigate('/sign-in');
    };

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
                {
                    isAuthenticated ?
                        <div>
                            <a className="main-nav-item" href="/user">
                                <i className="fa fa-user-circle"></i>
                                {` ${uData?.firstName ?? '' } `}
                            </a>
                            <a className="main-nav-item" onClick={() => logoutUser()} href="#">
                                <i className="fa fa-sign-out"></i>
                                {' Sign Out '}
                            </a>
                        </div>
                    :
                        <a className="main-nav-item" href="/sign-in">
                            <i className="fa fa-user-circle"></i>
                            {' Sign In '}
                        </a>
                    }

            </div>
        </nav>
    )
}

export default Navbar;