export interface Results {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  condition: string;
  shipping: Shipping;
  thumbnail: string;
  category_id: string;
}

interface Shipping {
  store_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  mode: string;
  tags: string[];
  benefits: null;
  promise: null;
}

export interface AvailableFilters {
  id: string;
  name: string;
  type: string;
  values: ValueFilters[];
}

export interface ValueFilters {
  id: string;
  name: string;
  results: number;
}

export interface ItemsResponse {
  results: Results[];
  available_filters?: AvailableFilters[];
}
