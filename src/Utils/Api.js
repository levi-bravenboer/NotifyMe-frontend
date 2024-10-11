import axios from 'axios';

export const DEBUG = false;

const DOMAIN_URL = DEBUG
  ? 'http://127.0.0.1:8000/api'
  : 'https://notifyme-be-staging.herokuapp.com/api';

export const apiInstance = axios.create({
  baseURL: DOMAIN_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
