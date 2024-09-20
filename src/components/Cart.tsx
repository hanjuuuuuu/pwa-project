import React from 'react';
import { Product } from '../vite-env';

interface CartProps {
    cartItems: Product[];
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
}

const formatPrice = (price: number) => {
    return price.toLocaleString();  
  };

const Cart: React.FC<CartProps> = ({ cartItems, removeFromCart, updateQuantity}) => {
    const handleQuantityChange = (productId: number, quantity: number) => {
        if (quantity > 0){
            updateQuantity(productId, quantity);
        }
    };

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cartItems.map((item)=>(
                    <li key={item.id}>
                        {item.name} - {formatPrice(item.price)}원 x {item.quantity}개 = {formatPrice(item.price * item.quantity)}원
                        <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                        <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                        <button onClick={() => removeFromCart(item.id)}>삭제</button>
                    </li>
                ))}
            </ul>
            <h3>총 계: {formatPrice(cartItems.reduce((total, item) => total + item.price * item.quantity, 0))} 원</h3>
        </div>
    );
};

export default Cart;