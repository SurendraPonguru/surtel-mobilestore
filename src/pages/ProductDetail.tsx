
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Heart, Minus, Plus, ShoppingCart } from "lucide-react";
import { getProductById, Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (id) {
        const foundProduct = getProductById(parseInt(id));
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          toast.error("Product not found");
          navigate("/products");
        }
      }
      setIsLoading(false);
    }, 500);
    
    // Scroll to top when product changes
    window.scrollTo(0, 0);
  }, [id, navigate]);
  
  const handleAddToCart = () => {
    if (product) {
      // Calculate price considering discount if applicable
      const price = product.onSale && product.discount 
        ? product.price - (product.price * product.discount / 100)
        : product.price;
      
      for (let i = 0; i < quantity; i++) {
        addToCart({
          id: product.id,
          title: product.title,
          price,
          image: product.image
        });
      }
    }
  };
  
  if (isLoading) {
    return (
      <div className="container py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="aspect-square rounded-lg bg-muted animate-pulse" />
          <div className="space-y-4">
            <div className="h-8 bg-muted rounded animate-pulse w-3/4" />
            <div className="h-6 bg-muted rounded animate-pulse w-1/2" />
            <div className="space-y-2">
              <div className="h-4 bg-muted rounded animate-pulse" />
              <div className="h-4 bg-muted rounded animate-pulse" />
              <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!product) {
    return null;
  }
  
  const discountedPrice = product.onSale && product.discount 
    ? product.price - (product.price * product.discount / 100)
    : product.price;
  
  const isWishlisted = isInWishlist(product.id);
  
  return (
    <div className="container py-8 md:py-16 animate-fade-in">
      <div className="mb-4">
        <Link to="/products" className="text-sm text-muted-foreground hover:text-foreground">
          &larr; Back to Products
        </Link>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover"
          />
          {product.onSale && (
            <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
              {product.discount}% OFF
            </div>
          )}
        </div>
        
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold sm:text-3xl">{product.title}</h1>
            <div className="mt-2 flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${
                      i < Math.floor(product.rating.rate)
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="ml-2 text-sm text-muted-foreground">
                ({product.rating.count} reviews)
              </span>
            </div>
          </div>
          
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold">
              ${discountedPrice.toFixed(2)}
            </span>
            {product.onSale && (
              <span className="text-lg text-muted-foreground line-through">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
          
          <p className="text-muted-foreground">{product.description}</p>
          
          <div className="space-y-4 pt-4">
            <div className="flex items-center">
              <span className="mr-4 text-sm">Quantity:</span>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="flex-1" size="lg" onClick={handleAddToCart}>
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
              
              <Button
                variant={isWishlisted ? "secondary" : "outline"}
                size="lg"
                onClick={() => toggleWishlist(product.id, product.title)}
              >
                <Heart
                  className="mr-2 h-4 w-4"
                  fill={isWishlisted ? "currentColor" : "none"}
                />
                {isWishlisted ? "Saved" : "Save"}
              </Button>
            </div>
          </div>
          
          <div className="border-t pt-6">
            <div className="text-sm">
              <span className="font-medium">Category:</span>{" "}
              <Link
                to={`/products?category=${product.category}`}
                className="text-primary hover:underline"
              >
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
