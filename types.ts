export interface Product {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
  }
  
  export interface ProductProps {
    product: Product;
    addToCart: (product: Product) => void;
  }