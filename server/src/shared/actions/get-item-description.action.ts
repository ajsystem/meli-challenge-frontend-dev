import { API, API_PATHS } from '../api';

interface ItemDescription {
  text: string;
  plain_text: string;
  last_updated: string;
  date_created: string;
  snapshot: Snapshot;
}

interface Snapshot {
  url: string;
  width: number;
  height: number;
  status: string;
}
export const getItemDescriptionAction = async (itemID: string): Promise<ItemDescription> => {
  const { data } = await API.get<ItemDescription>(`${API_PATHS.items}${itemID}/description`);
  return data;
};
