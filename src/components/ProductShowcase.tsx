
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Eye, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { getFeaturedProducts, Product } from "@/data/products";

const ProductShowcase = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(getFeaturedProducts().slice(0, 5));
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.onSale && product.discount
        ? product.price - (product.price * product.discount / 100)
        : product.price,
      image: product.image,
    });
  };

  if (!isLoaded) {
    return (
      <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-muted/50 rounded-lg animate-pulse"></div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 to-primary/10">
      <Carousel
        className="w-full"
        onSelect={(api) => {
          setActiveIndex(api?.selectedScrollSnap() || 0);
        }}
      >
        <CarouselContent>
          {products.map((product, index) => (
            <CarouselItem key={product.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-10 items-center">
                <motion.div 
                  className="relative aspect-square overflow-hidden rounded-lg bg-background"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {product.onSale && (
                    <Badge className="absolute top-3 right-3 z-10 bg-primary">
                      {product.discount}% OFF
                    </Badge>
                  )}
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain p-4"
                    initial={{ scale: 0.9 }}
                    animate={{ 
                      scale: activeIndex === index ? 1 : 0.9,
                      rotate: activeIndex === index ? [0, -2, 0, 2, 0] : 0
                    }}
                    transition={{ 
                      scale: { duration: 0.5 },
                      rotate: { repeat: Infinity, duration: 5, ease: "easeInOut" }
                    }}
                  />
                </motion.div>
                
                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl font-bold md:text-3xl">{product.title}</h2>
                    <p className="text-muted-foreground mt-2">{product.description}</p>
                  </div>
                  
                  <div className="flex items-baseline space-x-3">
                    {product.onSale && product.discount ? (
                      <>
                        <span className="text-2xl font-bold">
                          ${(product.price - (product.price * product.discount / 100)).toFixed(2)}
                        </span>
                        <span className="text-lg text-muted-foreground line-through">
                          ${product.price.toFixed(2)}
                        </span>
                      </>
                    ) : (
                      <span className="text-2xl font-bold">
                        ${product.price.toFixed(2)}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span 
                        key={i} 
                        className={`text-lg ${
                          i < Math.floor(product.rating.rate) ? 'text-yellow-500' : 'text-gray-300'
                        }`}
                      >
                        ★
                      </span>
                    ))}
                    <span className="text-sm text-muted-foreground">
                      ({product.rating.count} reviews)
                    </span>
                  </div>
                  
                  <div className="flex flex-col xs:flex-row gap-3 pt-4">
                    <Button 
                      className="flex-1"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => navigate(`/products/${product.id}`)}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {products.map((_, index) => (
          <motion.div
            key={index}
            className={`h-1.5 rounded-full ${
              activeIndex === index ? 'w-6 bg-primary' : 'w-1.5 bg-primary/40'
            }`}
            animate={{ width: activeIndex === index ? 24 : 6 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;
