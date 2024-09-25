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
    <div>
      <h2>상품 목록</h2>
      <button onClick={()=> goToCart()}>장바구니로 이동</button>
      <div style={{ display: 'flex', flexWrap: 'wrap'}}>
        {products.map((product) => (
          <div key={product.id} style={{ margin: '20px' }}>
            <img src={getImagePath(product.image)} alt={product.name} style={{ width: '200px' }}/>
            <h3>{product.name}</h3>
            <p>{product.price.toLocaleString()}원</p>
            <button onClick={() => handleAddToCart(product)}>장바구니 담기</button>
          </div>
        ))}
      </div>
    </div>
  )
};

export default App;