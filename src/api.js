import axios from 'axios';

const API_BASE_URL =
    window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost'
        ? 'http://127.0.0.1:8000/api/web'
        : 'https://peleka-api.up.railway.app/api/web';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getRiders = async () => {
    try {
        // Use the public endpoint and remove Authorization header
        const response = await api.get('/riders/');
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
        const response = await api.get(`/riders/${id}/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching rider by ID:', error);
        throw error.response && error.response.data
            ? error.response.data
            : new Error('An error occurred while fetching rider details.');
    }
};
