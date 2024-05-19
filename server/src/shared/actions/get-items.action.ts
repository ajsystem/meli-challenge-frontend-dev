import { API, API_PATHS } from '../api';
import { ItemsResponse } from '../interfaces';

export const getItemsAction = async (queryString: string): Promise<ItemsResponse> => {
  const params = new URLSearchParams();
  params.append('q', queryString);
  params.append('limit', '4');
  const { data } = await API.get<ItemsResponse>(API_PATHS.search, { params });

  return data;
};

//https://api.mercadolibre.com/categories/MLA1152
