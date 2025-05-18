
import { Link } from "react-router-dom";
import { Heart, Star } from "lucide-react";
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
        
        {product.onSale && (
          <div className="absolute left-2 top-2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
            {product.discount}% OFF
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-medium line-clamp-1">{product.title}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
            <span className="ml-1 text-xs">{product.rating.rate}</span>
          </div>
        </div>
        
        {/* Mobile specs summary */}
        <div className="mb-3 text-xs text-muted-foreground">
          {product.specs && (
            <div className="space-y-1">
              {product.specs.display && <p>Display: {product.specs.display}</p>}
              {product.specs.camera && <p>Camera: {product.specs.camera}</p>}
              {product.specs.processor && <p>Processor: {product.specs.processor.split(' ')[0]}</p>}
            </div>
          )}
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
        
        <div className="flex gap-2">
          <Button
            className="flex-1"
            onClick={() => addToCart({
              id: product.id,
              title: product.title,
              price: discountedPrice,
              image: product.image
            })}
          >
            Add to Cart
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className={isWishlisted ? "bg-primary/10" : ""}
            onClick={() => toggleWishlist(product.id, product.title)}
          >
            <Heart
              className="h-4 w-4"
              fill={isWishlisted ? "currentColor" : "none"}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
