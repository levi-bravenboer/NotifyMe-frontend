import axios from 'axios';

export const DEBUG = false;

const DOMAIN_URL = DEBUG
  ? 'http://127.0.0.1:8000'
  : 'https://x5wv242dg4.execute-api.eu-central-1.amazonaws.com/dev';

export const apiInstance = axios.create({
  baseURL: `${DOMAIN_URL}/api/`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authApi = axios.create({
  baseURL: `${DOMAIN_URL}/api/`,
  headers: {
    'Content-Type': 'application/json',
  },
});

authApi.interceptors.request.use(
  (config) => {
    const authTokens = localStorage.getItem('authTokens');
    if (authTokens) {
      const { access } = JSON.parse(authTokens);
      config.headers['Authorization'] = `Bearer ${access}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Add response interceptor
authApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('authTokens');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);
