export interface ResponseItems {
  author: Author;
  categories: string[];
  items: Item[];
}

export interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
}

interface Price {
  currency: string;
  amount: number;
  decimals: number;
}

interface Author {
  name: string;
  lastname: string;
}
