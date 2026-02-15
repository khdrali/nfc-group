export interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  image: string;
}

export interface CardProductType {
  id: number;
  thumbnail: string;
  color?: string[];
  name: string,
  brand: string,
  price: string,
}