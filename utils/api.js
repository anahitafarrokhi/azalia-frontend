import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,// "http://localhost:7002", // Use the backend URL from .env.local
});

export default api;