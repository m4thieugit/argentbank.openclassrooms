import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData } from '../../authService';
import { logoutSuccess } from '../../authSlice';

import './Navbar.css';

import AppLogo from '../../assets/img/argentBankLogo.png';

const Navbar = () => {
    const { isAuthenticated, token } = useSelector((state) => state.auth);
    const [userData, setUserData] = useState({ userName: null });

    const dispatch = useDispatch();
    
    const logoutUser = () => { 
        dispatch(logoutSuccess());
    };

    useEffect(() => {
        if (isAuthenticated && token) {
            fetchUserData(token)
                .then((data) => {
                    setUserData({ userName: data?.userName ?? null });
                })
                .catch((error) => {
                    console.error('Erreur lors de la récupération des données utilisateur :', error);
                });
        }
    }, [isAuthenticated, token]);


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
                                {` ${userData.userName} ` || ''}
                            </a>
                            <a className="main-nav-item" onClick={() => logoutUser()} href="#">
                                <i className="fa fa-sign-out"></i>
                                {' Sign Out '}
                            </a>
                        </div>
                    :
                        <a className="main-nav-item" href="/sign-in">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </a>
                    }

            </div>
        </nav>
    )
}

export default Navbar;