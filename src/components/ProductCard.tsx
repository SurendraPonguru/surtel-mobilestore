
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id);
  
  const discountedPrice = product.onSale && product.discount 
    ? product.price - (product.price * product.discount / 100)
    : product.price;
  
  return (
    <div className="product-card group animate-fade-in">
      <div className="product-card-image-container">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        
        {product.onSale && (
          <div className="product-card-badge">
            {product.discount}% OFF
          </div>
        )}
        
        <button
          className={`product-card-wishlist ${
            isWishlisted ? "text-red-500" : ""
          }`}
          onClick={() => toggleWishlist(product.id, product.title)}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className="h-4 w-4" fill={isWishlisted ? "currentColor" : "none"} />
        </button>
      </div>
      
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-medium line-clamp-1">{product.title}</h3>
          <div className="flex items-center">
            <span className="text-sm">★</span>
            <span className="ml-1 text-xs">{product.rating.rate}</span>
          </div>
        </div>
        
        <div className="mb-4 flex items-center">
          <span className="font-medium">
            ${discountedPrice.toFixed(2)}
          </span>
          {product.onSale && (
            <span className="ml-2 text-sm text-muted-foreground line-through">
              ${product.price.toFixed(2)}
            </span>
          )}
        </div>
        
        <Button
          className="w-full"
          onClick={() => addToCart({
            id: product.id,
            title: product.title,
            price: discountedPrice,
            image: product.image
          })}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
