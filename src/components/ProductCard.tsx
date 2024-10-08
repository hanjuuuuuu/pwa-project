import { Product as ProductType } from "../vite-env";
import { useCartStore } from "../store/store";

interface ProductCardProps {
    product: ProductType;
}

const ProductCard = ({ product }: ProductCardProps ) => {
    const { addToCart } = useCartStore();

    const handleAddToCart = (product: ProductType) => {
        addToCart(product);
    };

    const getImagePath = (imageName: string) => {
        return new URL(`../assets/${imageName}`, import.meta.url).href;
    }

    return ( 
        <div className="flex flex-col">
            <img src={getImagePath(product.image)} alt={product.name} className="object-contain"/>
            <h3 >{product.name}</h3>
            <del className="text-lg text-gray-300 ">{product.price.toLocaleString()}원</del>
            <div className="text-lg text-red-500">{product.percent}%</div>
            <div className="text-lg text-neutral-950">{product.discount.toLocaleString()}원</div>
            <button 
                className="bg-white text-purple-700 border-purple-700 mt-4 py-2 px-4 rounded w-full hover:border-purple-950 hover:text-purple-950 transition" 
                onClick={() => handleAddToCart(product)}>
                    장바구니 담기
            </button>
        </div>
    )
}

export default ProductCard;