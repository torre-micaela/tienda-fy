export interface Product {
  sku: string;
  name: string;
  description: string;
  image: string;
  category?: {
    id: string;
    name: string;
  };
  brand: string;
  price: number;
  stock: number;
  specifications?: Specification[];
}

export interface Specification {
  name: string;
  value: string;
}
