import axios from 'axios';
import { DOMAIN_URL, AXIOS_CONFIG } from './api';

export const euroToDollarRate = async () => {
  try {
    const {
      data: {
        data: { EUR },
      },
    } = await axios.get(`${DOMAIN_URL}&currencies=EUR`, {}, AXIOS_CONFIG);

    return EUR || 1;
  } catch (e) {
    console.error(e);
    return null;
  }
};
