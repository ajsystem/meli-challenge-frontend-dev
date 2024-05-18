import { getCategoriesAction } from '../actions';
import { ItemsResponse } from '../interfaces';

export const categoriesFromItemsResponse = async (itemsResponse: ItemsResponse) => {
  let baseCategory = '';
  let categories: string[] = [''];

  if (!itemsResponse) return categories;
  if (itemsResponse.results.length === 0) return categories;

  const categoryCounts = itemsResponse.results.reduce((acc, item) => {
    const category = item.category_id;
    if (acc[category]) {
      acc[category]++;
    } else {
      acc[category] = 1;
    }
    return acc;
  }, {} as { [key: string]: number });

  baseCategory = Object.keys(categoryCounts).reduce((a, b) => (categoryCounts[a] > categoryCounts[b] ? a : b));

  const response = await getCategoriesAction(baseCategory);
  categories = response.path_from_root.map((category) => category.name);
  return categories;
};
