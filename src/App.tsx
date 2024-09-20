import React, { useState } from 'react'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import { Product } from './vite-env'

const initialProducts: Product[] = [
  { id: 1, name: '커피', price: 3000, quantity: 1},
  { id: 2, name: '물', price: 2000, quantity: 1},
  { id: 3, name: '콜라', price: 2000, quantity: 1},
];


const App: React.FC = () => {
  const [products] = useState<Product[]>(initialProducts);
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if(existingProduct){
      setCart(
        cart.map((item)=>
          item.id === product.id ? {...item, quantity: item.quantity + 1}: item
        )
      );
    } else {
      setCart([...cart, {...product, quantity: 1}]);
    }
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter((item) => item.id !== productId));
  }

  const updateQuantity = (productId: number, quantity: number) => {
    setCart(
      cart.map((item) => 
        item.id === productId ? {...item, quantity} : item
      )
    );
  };

  return (
    <div>
      <h2>장바구니</h2>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
    </div>
  );
};

export default App;
