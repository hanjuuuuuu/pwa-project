import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/store';

const Cart = () => {
    const navigate = useNavigate();
    const { cartItems, removeFromCart, updateQuantity } = useCartStore();

    const goBackHome = () => {
        navigate('/');
    }

    const getImagePath = (imageName: string) => {
        return new URL(`../assets/${imageName}`, import.meta.url).href;
    };

    const totalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleQuantityChange = (productId: number, quantity: number) => {
        if (quantity > 0) {
          updateQuantity(productId, quantity);
        }
      };
    
    return (
        <div>
            <h2 className='text-3xl font-bold text-center mb-7'>장바구니</h2>
            {cartItems.length === 0 ? (
                <p className='mx-10'>장바구니가 비어 있습니다</p>
            ): (
                <div className='mx-10'>
                  <ul>
                    {cartItems.map((item) => (
                      <li key={item.id} className="mb-4 flex items-center justify-between">
                        <div className="flex items-center">
                          <img src={getImagePath(item.image)} alt={item.name} className="w-24 h-24 object-cover mr-4" />
                          <div>
                            <h3 className="text-lg font-semibold">{item.name}</h3>
                            <p>{(item.price * item.quantity).toLocaleString() }원</p>
                            <div className="flex items-center">
                              <button
                                className="px-2 py-1 bg-gray-300"
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              >
                                -
                              </button>
                              <p className="px-2">{item.quantity}</p>
                              <button
                                className="px-2 py-1 bg-gray-300"
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <button 
                          className="bg-gray-300 text-white px-4 py-2 rounded-md hover:bg-gray-500 mx-8" 
                          onClick={() => removeFromCart(item.id)}
                        >
                          삭제
                        </button>
                      </li>
                    ))}
                  </ul>
                
                  <div className="text-right mt-8">
                    <h3 className="text-xl font-semibold">총 금액: {totalPrice().toLocaleString()}원</h3>
                  </div>
                </div>
              )}
            <button onClick={goBackHome} className="bg-purple-800 text-white mt-4 py-2 px-4 rounded hover:bg-purple-900 transition mx-10">계속 쇼핑하기</button>
            <button onClick={goBackHome} className="bg-purple-800 text-white mt-4 py-2 px-4 rounded hover:bg-purple-900 transition">결제하기</button>
        </div>
    );
};

export default Cart;