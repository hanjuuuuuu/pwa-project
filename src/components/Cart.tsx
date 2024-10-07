import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/store';

const Cart = () => {
    const navigate = useNavigate();
    const { cartItems, removeFromCart } = useCartStore();

    const goBackHome = () => {
        navigate('/');
    }

    const getImagePath = (imageName: string) => {
        return new URL(`../assets/${imageName}`, import.meta.url).href;
    };
    
    return (
        <div>
            <h2 className='text-3xl font-bold text-center mb-5'>장바구니</h2>
            {cartItems.length === 0 ? (
                <p>장바구니가 비어 있습니다</p>
            ): (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            <img src={getImagePath(item.image)} alt={item.name} style={{ width: '100px', height: '100px', marginRight: '10px' }}/>
                            {item.name} : {item.price.toLocaleString()}원
                            <button onClick={() => removeFromCart(item.id)}>삭제</button>
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={goBackHome}>계속 쇼핑하기</button>
        </div>
    );
};





// interface CartProps {
//     cartItems: Product[];
//     removeFromCart: (productId: number) => void;
//     updateQuantity: (productId: number, quantity: number) => void;
// }

// const formatPrice = (price: number) => {
//     return price.toLocaleString();  
//   };

// const Cart: React.FC<CartProps> = ({ cartItems, removeFromCart, updateQuantity}) => {
//     const handleQuantityChange = (productId: number, quantity: number) => {
//         if (quantity > 0){
//             updateQuantity(productId, quantity);
//         }
//     };

//     return (
//         <div>
//             <h2>Cart</h2>
//             <ul>
//                 {cartItems.map((item)=>(
//                     <li key={item.id}>
//                         {item.name} - {formatPrice(item.price)}원 x {item.quantity}개 = {formatPrice(item.price * item.quantity)}원
//                         <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
//                         <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
//                         <button onClick={() => removeFromCart(item.id)}>삭제</button>
//                     </li>
//                 ))}
//             </ul>
//             <h3>총 금액: {formatPrice(cartItems.reduce((total, item) => total + item.price * item.quantity, 0))} 원</h3>
//         </div>
//     );
// };

export default Cart;