
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  currency?: "USD" | "INR";
}

// Exchange rate for USD to INR (approximate)
const USD_TO_INR = 75;

const ProductCard = ({ product, currency = "USD" }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id);
  
  const discountedPrice = product.onSale && product.discount 
    ? product.price - (product.price * product.discount / 100)
    : product.price;
  
  // Convert price based on selected currency
  const displayPrice = currency === "INR" 
    ? discountedPrice * USD_TO_INR 
    : discountedPrice;
  
  const originalDisplayPrice = currency === "INR"
    ? product.price * USD_TO_INR
    : product.price;
    
  const currencySymbol = currency === "INR" ? "₹" : "$";
  
  return (
    <div className="product-card group rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-md">
      <div className="relative overflow-hidden rounded-t-lg">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        
        <button
          className="absolute right-2 top-2 rounded-full bg-background/80 p-2 backdrop-blur-sm transition-colors hover:bg-background"
          onClick={() => toggleWishlist(product.id, product.title)}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className="h-4 w-4" fill={isWishlisted ? "currentColor" : "none"} stroke={isWishlisted ? "currentColor" : "currentColor"} />
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
            {currencySymbol}{displayPrice.toFixed(2)}
          </span>
          {product.onSale && (
            <span className="ml-2 text-sm text-muted-foreground line-through">
              {currencySymbol}{originalDisplayPrice.toFixed(2)}
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
