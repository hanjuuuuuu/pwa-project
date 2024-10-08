import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  const goToProductList = () => {
    navigate('/productlist');
  };

  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-4xl font-bold">Welcome to the Shop</h1>
      <div className="space-x-4">
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" 
          onClick={goToProductList}
        >
          상품 목록 보기
        </button>
        <button 
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600" 
          onClick={goToCart}
        >
          장바구니 보기
        </button>
      </div>
    </div>
  );
};

export default App;
