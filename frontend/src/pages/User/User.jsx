import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData } from '../../authService';

import './User.css';

import EditButton from '../../components/EditButton';

const User = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isAuthenticated, token } = useSelector((state) => state.auth);
    const [userData, setUserData] = useState({ id: null, firstName: null, lastName: null, userName: null, email: null, createdAt: null, updatedAt: null });

    useEffect(() => {
        if (isAuthenticated && token) {
            fetchUserData(token)
                .then((data) => {
                    setUserData({ data });
                })
                .catch((error) => {
                    console.error('Erreur lors de la récupération des données utilisateur :', error);
                });
        }
    }, [isAuthenticated, token]);


    return (
        <div class="header">
            <h1>Welcome back<br />Tony Jarvis!</h1>
            <EditButton />
        </div>
    )
}

export default User;