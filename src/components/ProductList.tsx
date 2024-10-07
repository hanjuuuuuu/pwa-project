import ProductCard from "./ProductCard";
import { Product as ProductType } from "../vite-env";

interface ProductListProps {
    products: ProductType[];
}

const ProductList = ({ products } : ProductListProps ) => {
    return (
        <div>
            {products.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    );
};

export default ProductList;