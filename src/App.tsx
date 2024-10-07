
import { useNavigate } from "react-router-dom";
import productsData from "./data/products.json";
import ProductList from "./components/ProductList";


const App = () => {
  const navigate = useNavigate();

  const goToCart = () =>{
    navigate('/cart');
  }

  return (
    <div className="grid grid-cols-5 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <h2 className="text-3xl font-bold text-center mb-5">상품 목록</h2>
      <button className="bg-white" 
        onClick={()=> goToCart()}>
        장바구니로 이동
        </button>
      <ProductList products={productsData}/>
    </div>
  )
};

export default App;