import { authApi } from './Api';

export const getAllItems = async () => {
  try {
    const { data } = await authApi.get('items/all/');
    return data;
  } catch (e) {
    console.error(e);
    return [];
  }
};
