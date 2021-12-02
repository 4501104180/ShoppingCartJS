import axios from 'axios';

import { getToken, setToken } from '../utils/jwt';

const axiosInstance = axios.create({
    baseURL: "https://cv-api-nodejs.herokuapp.com/api"
});

axiosInstance.interceptors.request.use(
    config => config,
    error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    response => response && response.data,
    async error => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            const tokens = getToken();
            if (!tokens) {
                window.location.href = '/auth/login';
                return Promise.reject(error);
            }
            try {
                originalRequest._retry = true;
                const newTokens = await axiosInstance.post('/accounts/refreshToken', {
                    refreshToken: tokens.refreshToken
                });
                setToken(newTokens);
                originalRequest.headers['Authorization'] = `Bearer ${newTokens.accessToken}`;
                return axiosInstance(originalRequest);
            } catch (error) {
                setToken(null);
                window.location.href = '/auth/login';
                return Promise.reject(error);
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;