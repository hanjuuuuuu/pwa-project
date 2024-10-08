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
      <h2>상품 목록</h2>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
