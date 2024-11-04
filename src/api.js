import axios from 'axios';

const API_BASE_URL =
    window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost'
        ? 'http://127.0.0.1:8000/api'
        : 'https://peleka-api.up.railway.app/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const login = async (email, password) => {
    try {
        const response = await api.post('/auth/login/', { email, password });
        return {
            success: true,
            data: response.data,
        };
    } catch (error) {
        let message = 'An error occurred during login. Please try again.';
        if (error.response) {
            message = error.response.data.error || error.response.data.detail || message;
        }
        return {
            success: false,
            message,
        };
    }
};

export const getRiders = async () => {
    try {
        // Use the public endpoint and remove Authorization header
        const response = await api.get('/web/riders/');
        return response.data;
    } catch (error) {
        console.error('Error fetching riders:', error);
        throw error.response 
            ? error.response.data 
            : new Error('An error occurred while fetching riders.');
    }
};

export const getRiderById = async (id) => {
    try {
        // Use the public endpoint and remove Authorization header
        const response = await api.get(`/web/riders/${id}/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching rider by ID:', error);
        throw error.response && error.response.data
            ? error.response.data
            : new Error('An error occurred while fetching rider details.');
    }
};
