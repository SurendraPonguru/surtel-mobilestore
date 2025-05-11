
import { useWishlist } from "@/contexts/WishlistContext";
import { getProductById, Product } from "@/data/products";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  
  // Get full product information for each wishlist item
  const wishlistProducts = wishlist
    .map((id) => getProductById(id))
    .filter((product): product is Product => product !== undefined);
  
  if (wishlist.length === 0) {
    return (
      <div className="container py-16 text-center animate-fade-in">
        <h1 className="text-2xl font-bold sm:text-3xl">Your Wishlist</h1>
        <p className="mt-4 text-muted-foreground">Your wishlist is empty.</p>
        <Button asChild className="mt-6">
          <Link to="/products">Browse Products</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="container py-8 animate-fade-in">
      <h1 className="text-2xl font-bold sm:text-3xl">Your Wishlist</h1>
      <p className="mt-2 text-muted-foreground">
        Items you've saved for later. Add them to your cart when you're ready.
      </p>
      
      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {wishlistProducts.map((product) => {
          const discountedPrice = product.onSale && product.discount 
            ? product.price - (product.price * product.discount / 100)
            : product.price;
            
          return (
            <div key={product.id} className="product-card group">
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
                  className="product-card-wishlist text-red-500"
                  onClick={() => removeFromWishlist(product.id, product.title)}
                  aria-label="Remove from wishlist"
                >
                  <Heart className="h-4 w-4" fill="currentColor" />
                </button>
              </div>
              
              <div className="p-4">
                <div className="mb-2">
                  <h3 className="font-medium line-clamp-1">{product.title}</h3>
                </div>
                
                <div className="mb-4 flex items-center">
                  <span className="font-medium">${discountedPrice.toFixed(2)}</span>
                  {product.onSale && (
                    <span className="ml-2 text-sm text-muted-foreground line-through">
                      ${product.price.toFixed(2)}
                    </span>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <Button
                    className="flex-1"
                    size="sm"
                    onClick={() => addToCart({
                      id: product.id,
                      title: product.title,
                      price: discountedPrice,
                      image: product.image
                    })}
                  >
                    <ShoppingCart className="mr-1 h-3.5 w-3.5" />
                    Add to Cart
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeFromWishlist(product.id, product.title)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;
