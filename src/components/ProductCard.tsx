import { Product as ProductType } from "../vite-env";
import { useCartStore } from "../store/store";

interface ProductCardProps {
    product: ProductType;
}

const ProductCard = ({ product }: ProductCardProps ) => {
    const { addToCart } = useCartStore();

    const handleAddToCart = () => {
        addToCart(product);
    };

    const getImagePath = (imageName: string) => {
        return new URL(`../assets/${imageName}`, import.meta.url).href;
    };

    return ( 
        <div className="grid grid-cols-5 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <img src={getImagePath(product.image)} alt={product.name} className="w-full h-48 object-cover mb-4"/>
            <h3>{product.name}</h3>
            <p className="text-lg text-gray-600">{product.price.toLocaleString()}원</p>
            <button 
            className="bg-white text-violet-600 border-violet-600 mt-4 py-2 px-4 rounded w-full hover:border-violet-950 hover:text-violet-950 transition" 
            onClick={() => handleAddToCart}>
                장바구니 담기
            </button>
        </div>
    );
}

export default ProductCard;