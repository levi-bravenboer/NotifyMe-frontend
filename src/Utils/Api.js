export const DEBUG = false;
export const FRONT_URL = '';
const DOMAIN_URL = DEBUG
  ? 'http://127.0.0.1:8000'
  : 'https://notifyme-be-staging.herokuapp.com';
export const API_PREFIX = `${DOMAIN_URL}/api/`;
export const AXIOS_CONFIG = {
  headers: {
    'Content-Type': 'application/json',
  },
};
