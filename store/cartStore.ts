// store/cartStore.ts
import create from 'zustand';

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  updateQuantity: (id: number, quantity: number) => void;
}

const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (product) => set((state) => {
    const itemIndex = state.cart.findIndex((item) => item.id === product.id);
    if (itemIndex > -1) {
      const updatedCart = state.cart.map((item, index) => {
        if (index === itemIndex) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return { cart: updatedCart };
    }
    return { cart: [...state.cart, { ...product, quantity: 1 }] };
  }),
  updateQuantity: (id, quantity) => set((state) => {
    const updatedCart = state.cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity };
      }
      return item;
    });
    return { cart: updatedCart };
  }),
}));

export default useCartStore;
