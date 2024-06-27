import create from 'zustand';

interface CartProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  cart: CartProduct[];
  addToCart: (product: CartProduct) => void;
  updateQuantity: (id: string, quantity: number) => void;
}

const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === product.id);
      if (existingProduct) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      }
    }),
  updateQuantity: (id, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    })),
}));

export default useCartStore;