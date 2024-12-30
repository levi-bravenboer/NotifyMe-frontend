import { authApi } from './Api';

export const getAllItems = async () => {
  try {
    const { data } = await authApi.get('items/all/');
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
