import { API, API_PATHS } from '../api';

interface Picture {
  id: string;
  url: string;
  secure_url: string;
  size: string;
  max_size: string;
  quality: string;
}
interface Shipping {
  mode: string;
  methods: unknown[];
  tags: string[];
  dimensions: null;
  local_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  store_pick_up: boolean;
}

interface Item {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  thumbnail: string;
  pictures: Picture[];
  condition: string;
  shipping: Shipping;
  category_id: string;
  //Does not appears in the response without an proprietary token ref: https://developers.mercadolibre.com.ar/es_ar/publica-productos
  sold_quantity?: number;
}

export const getItemAction = async (itemID: string): Promise<Item> => {
  const { data } = await API.get<Item>(`${API_PATHS.items}${itemID}`);
  return data;
};
