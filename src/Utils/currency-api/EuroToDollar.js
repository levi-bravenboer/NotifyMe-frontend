import axios from 'axios';
import { DOMAIN_URL, AXIOS_CONFIG } from './Api';

export const getEuroToDollarExchangeRate = async () => {
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

export const getMonthlyPrice = (price) => price * 0.01;

export const formatPrice = (price, prefix) => `${prefix} ${price.toFixed(2)}`;
