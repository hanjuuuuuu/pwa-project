import React from "react";
import { Product } from "../vite-env";

interface ProductListProps {
    products: Product[];
    addToCart: (product: Product) => void;
}

const formatPrice = (price: number) => {
    return price.toLocaleString(); 
  };

const ProductList: React.FC<ProductListProps> = ({ products, addToCart }) => {
    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product)=> (
                    <li key={product.id}>
                        {product.name} - {formatPrice(product.price)}원
                        <button onClick={() => addToCart(product)}>장바구니</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;