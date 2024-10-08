import { create } from 'zustand';
import { Product } from '../vite-env';

interface CartItem extends Product {
  quantity: number; 
}

interface CartStore {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  
  // 장바구니 추가 
  addToCart: (product: Product) => {
    set((state) => {
      const existingItem = state.cartItems.find((item) => item.id === product.id);
      if (existingItem) {
        // 이미 장바구니에 있으면, 수량 증가
        return {
          cartItems: state.cartItems.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        // 새로운 상품이면 추가
        return {
          cartItems: [...state.cartItems, { ...product, quantity: 1 }],
        };
      }
    });
  },

  // 장바구니에서 삭제
  removeFromCart: (productId: number) => {
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== productId),
    }));
  },

  // 상품 수량 업데이트
  updateQuantity: (productId: number, quantity: number) => {
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      ),
    }));
  },
}));
