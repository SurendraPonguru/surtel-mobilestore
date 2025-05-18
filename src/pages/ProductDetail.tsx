
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate, useSearchParams } from "react-router-dom";
import { Heart, Minus, Plus, ShoppingCart, Star } from "lucide-react";
import { getProductById, Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Exchange rate for USD to INR (approximate)
const USD_TO_INR = 75;

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");
  const [activeTab, setActiveTab] = useState("about");
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  
  useEffect(() => {
    setIsLoading(true);
    
    const currencyParam = searchParams.get("currency") as "USD" | "INR" | null;
    if (currencyParam) {
      setCurrency(currencyParam);
    } else {
      setCurrency("USD");
    }
    
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
  }, [id, navigate, searchParams]);
  
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
  
  // Convert price based on selected currency
  const displayPrice = currency === "INR" 
    ? discountedPrice * USD_TO_INR 
    : discountedPrice;
  
  const originalDisplayPrice = currency === "INR"
    ? product.price * USD_TO_INR
    : product.price;
    
  const currencySymbol = currency === "INR" ? "₹" : "$";
  
  const isWishlisted = isInWishlist(product.id);
  
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = "/lovable-uploads/96d5b3e8-a2e9-4e56-a3ee-a71a3fe6ff46.png";
    target.className = "h-full w-full object-contain p-8 bg-background/80";
    console.log("Product image failed to load, displaying SurTel logo instead");
  };
  
  return (
    <div className="container py-8 md:py-16 animate-fade-in">
      <div className="mb-4">
        <Link to="/products" className="text-sm text-muted-foreground hover:text-foreground">
          &larr; Back to Products
        </Link>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          {product.images && product.images.length > 1 ? (
            <Carousel className="w-full">
              <CarouselContent>
                {product.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
                      <img
                        src={image}
                        alt={`${product.title} view ${index + 1}`}
                        className="h-full w-full object-cover"
                        onError={handleImageError}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex items-center justify-center mt-2">
                <CarouselPrevious className="relative transform-none translate-y-0 left-0 mr-2" />
                <CarouselNext className="relative transform-none translate-y-0 right-0 ml-2" />
              </div>
            </Carousel>
          ) : (
            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-cover"
                onError={handleImageError}
              />
              {product.onSale && (
                <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                  {product.discount}% OFF
                </div>
              )}
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
              {currencySymbol}{displayPrice.toFixed(2)}
            </span>
            {product.onSale && (
              <span className="text-lg text-muted-foreground line-through">
                {currencySymbol}{originalDisplayPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          <Tabs defaultValue="about" className="w-full" onValueChange={setActiveTab} value={activeTab}>
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="py-4">
              <p className="text-muted-foreground">{product.description}</p>
            </TabsContent>
            <TabsContent value="specs" className="py-4">
              {product.specs ? (
                <div className="space-y-2">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="grid grid-cols-2 border-b py-2 last:border-b-0">
                      <span className="font-medium capitalize">{key}</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No specifications available for this product.</p>
              )}
            </TabsContent>
            <TabsContent value="reviews" className="py-4">
              {product.reviews && product.reviews.length > 0 ? (
                <div className="space-y-4">
                  {product.reviews.map(review => (
                    <div key={review.id} className="border-b pb-4 last:border-b-0">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">{review.user}</h4>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < review.rating ? "fill-yellow-500 text-yellow-500" : "fill-gray-200 text-gray-200"}`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">{review.date}</div>
                      <p className="mt-2">{review.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No reviews yet for this product.</p>
              )}
            </TabsContent>
          </Tabs>
          
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
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
