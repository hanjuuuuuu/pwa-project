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
                            {item.name} : {item.price.toLocaleString()}원 {item.percent}% {item.discount.toLocaleString()}원
                            <button onClick={() => removeFromCart(item.id)}>삭제</button>
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={goBackHome}>계속 쇼핑하기</button>
        </div>
    );
};

export default Cart;