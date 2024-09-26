import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "./store/store";
import { Product as ProductType } from "./vite-env";
import productsData from "./data/products.json";

const App = () => {
  const navigate = useNavigate();
  const { addToCart } = useCartStore();

  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const handleAddToCart = (product: ProductType) => {
    addToCart(product);
  }

  const goToCart = () =>{
    navigate('/cart');
  }

  const getImagePath = (imageName: string) => {
    return new URL(`./assets/${imageName}`, import.meta.url).href;
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">상품 목록</h2>
      <button onClick={()=> goToCart()}>장바구니로 이동</button>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} style={{ margin: '20px' }}>
            <img src={getImagePath(product.image)} alt={product.name} className="w-full h-48 object-cover mb-4"/>
            <h3>{product.name}</h3>
            <p className="text-lg text-gray-600">{product.price.toLocaleString()}원</p>
            <button className="bg-green-500 text-white mt-4 py-2 px-4 rounded w-full hover:bg-green-600 transition" onClick={() => handleAddToCart(product)}>장바구니 담기</button>
          </div>
        ))}
      </div>
    </div>
  )
};

export default App;