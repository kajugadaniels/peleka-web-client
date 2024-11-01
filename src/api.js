import axios from 'axios';

const API_BASE_URL =
    window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost'
        ? 'http://127.0.0.1:8000/api/web'
        : 'https://eps-api.onrender.com/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetchRiders = async () => {
    try {
        const response = await api.get('/riders/', {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response 
            ? error.response.data 
            : new Error('An error occurred while fetching riders.');
    }
};