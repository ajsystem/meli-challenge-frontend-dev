import axios from 'axios';

// for the challenge purpose we are setting the MELI_API_URL here, but in a real world scenario we would use environment variables.
const MELI_API_URL = 'https://api.mercadolibre.com/';

const API_PATHS = {
  search: 'sites/MLA/search',
  items: 'items/',
  categories: 'categories/',
};

const API = axios.create({
  baseURL: MELI_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { API, API_PATHS };
