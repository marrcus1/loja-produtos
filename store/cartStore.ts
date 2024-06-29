// store/cartStore.ts
import create from 'zustand';

interface CartProduct {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
}

interface CartState {
  cart: CartProduct[];
  addToCart: (product: CartProduct) => void;
}

const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
}));

export default useCartStore;
