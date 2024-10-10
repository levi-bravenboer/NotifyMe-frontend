import axios from 'axios';
import { API_PREFIX, AXIOS_CONFIG } from './Api';

export const getAllItems = async () => {
  try {
    const items = await axios.get(
      `${API_PREFIX}items/items/all/`,
      {},
      AXIOS_CONFIG
    );
    return items.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};
