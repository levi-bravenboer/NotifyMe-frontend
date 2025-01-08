import { afterAuthApi } from './Api';

export const getAllItems = async () => {
  try {
    const { data } = await afterAuthApi.get('items/all/');
    return data.map((product) => {
      const priceFormatted = new Intl.NumberFormat('en-IE', {
        style: 'currency',
        currency: 'EUR',
      }).format(product.price);

      return {
        ...product,
        priceFormatted,
      };
    });
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const createItem = async (data) => {
  try {
    await afterAuthApi.post('items/item/', data);
  } catch (e) {
    console.error(e);
  }
};
