import config from '../config.js';

async function loginUser(credentials) {
    try {
        const response = await fetch(config.backend.base_url + config.backend.endpoints.user.signin, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            throw new Error('Une erreur est survenue lors de la tentative de connexion.');
        }

        const data = await response.json();
        return data.body.token;
    } catch (error) {
        throw new Error(error.message || 'Erreur lors de la connexion');
    }
}

async function fetchUserData(token) {
    try {
        const response = await fetch(config.backend.base_url + config.backend.endpoints.user.profile, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });

        if (!response.ok) {
            throw new Error('Une erreur est survenue lors de la tentative de récupération des données utilisateur.');
        }

        const data = await response.json();
        return data.body;
    } catch (error) {
        throw new Error('Une erreur est survenue lors de la tentative de récupération des données utilisateur.');
    }
}

async function updateUsername(token, userName) {
    try {
        const response = await fetch(config.backend.base_url + config.backend.endpoints.user.profile, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({ userName }),
        });

        if (!response.ok) {
            throw new Error('Une erreur est survenue lors de la tentative de récupération des données utilisateur.');
        }

        const data = await response.json();
        return data.body;
    } catch (error) {
        throw new Error('Une erreur est survenue lors de la tentative de récupération des données utilisateur.');
    }
}

export { loginUser, fetchUserData, updateUsername };
