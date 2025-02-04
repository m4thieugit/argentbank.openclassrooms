import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './EditButton.css';

import { updateUserData } from '../../authSlice';
import { updateUsername } from '../../authService';

const EditButton = () => {
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);

    const handleUsername = async (e) => {
        e.preventDefault();

        try {
            const enterUsername = prompt('Entrez votre nouveau surnom :');
            if (!enterUsername || enterUsername.trim() === '') {
                return alert('Entrez un surnom valide !');
            }

            const updateData = await updateUsername(token, enterUsername);
            await dispatch(updateUserData(updateData));
        } catch (error) {
            alert('Erreur lors de la modification du surnom.');
            console.error(error);
        }
    };

    return (
        <button className="edit-button" onClick={handleUsername}>Edit Name</button>
    )
}

export default EditButton;