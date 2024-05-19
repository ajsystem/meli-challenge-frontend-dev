import { ResponseItems } from '../interfaces';

const API_URL = 'http://localhost:3010/api/items';

export const api = {
  search: async (query: string) => {
    const response = await fetch(`${API_URL}?q=${query}`);
    if (!response.ok) {
      throw new Error('No se pudo realizar la búsqueda, intenta de nuevo con otro término');
    }
    return (await response.json()) as Promise<ResponseItems>;
  },
  getItem: async (id: string) => {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`No se pudo realizar la petición por el ID del producto, ID: ${id}, intenta primero realizar una búsqueda.`);
    }
    return await response.json();
  },
};
