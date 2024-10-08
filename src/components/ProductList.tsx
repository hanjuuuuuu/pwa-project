import { useEffect, useState } from "react";
import { Product as ProductType } from "../vite-env";
import ProductCard from "./ProductCard";
import productsData from "../data/products.json";

const ProductList = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div>
      <h2 className='text-3xl font-bold text-center mb-5'>상품 목록</h2>
      <div className="grid grid-cols-5 gap-5 place-items-center mx-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
