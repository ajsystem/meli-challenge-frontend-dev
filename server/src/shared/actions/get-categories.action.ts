import { API, API_PATHS } from '../api';

interface PathFromRoot {
  id: string;
  name: string;
}

interface CategoriesResponse {
  path_from_root: PathFromRoot[];
}

export const getCategoriesAction = async (categoryID: string): Promise<CategoriesResponse> => {
  const { data } = await API.get<CategoriesResponse>(`${API_PATHS.categories}${categoryID}`);
  return data;
};
