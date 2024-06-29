// services/api.ts
import axios from 'axios';

const BASE_URL = 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=6&sortBy=name&orderBy=ASC';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data.products;
  } catch (error) {
    throw new Error('Erro ao buscar produtos: ' + error.message);
  }
};