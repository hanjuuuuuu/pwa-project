import { create } from "zustand"
import { Product } from "../vite-env";

interface CartState{
    cartItems: Product[];
    addToCart:(product: Product) => void;
    removeFromCart: (productId: number) => void;
}

export const useCartStore = create<CartState>()((set) => ({
  cartItems: [],
  addToCart: (product: Product) => set((state) => ({
    cartItems: [...state.cartItems, product],
  })),
  removeFromCart: (productId: number) => set((state) => ({
    cartItems: state.cartItems.filter((item) => item.id !== productId)
  })),
}));


