
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
import useEmblaCarousel from "embla-carousel-react";

const ProductShowcase = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: true,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(getFeaturedProducts().slice(0, 5));
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        setActiveIndex(emblaApi.selectedScrollSnap());
      };

      emblaApi.on("select", onSelect);
      return () => {
        emblaApi.off("select", onSelect);
      };
    }
    return () => {};
  }, [emblaApi]);

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
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-secondary/20 shadow-lg border border-primary/10">
      <Carousel
        ref={emblaRef}
        className="w-full"
        opts={{
          loop: true,
          align: "center",
        }}
      >
        <CarouselContent>
          {products.map((product, index) => (
            <CarouselItem key={product.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-10 items-center">
                <motion.div 
                  className="relative aspect-square overflow-hidden rounded-lg bg-gradient-to-tr from-background to-muted"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {product.onSale && (
                    <Badge className="absolute top-3 right-3 z-10 bg-primary animate-pulse">
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
                      rotate: activeIndex === index ? [0, -3, 0, 3, 0] : 0
                    }}
                    transition={{ 
                      scale: { duration: 0.5 },
                      rotate: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                    }}
                  />
                  
                  {/* Interactive glow effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-30 blur-3xl"
                    animate={{ 
                      x: ['-100%', '100%'],
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 3,
                      ease: "linear",
                    }}
                  />
                </motion.div>
                
                <div className="space-y-4">
                  <div>
                    <motion.h2 
                      className="text-xl font-bold md:text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      {product.title}
                    </motion.h2>
                    <motion.p 
                      className="text-muted-foreground mt-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      {product.description}
                    </motion.p>
                  </div>
                  
                  <motion.div 
                    className="flex items-baseline space-x-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
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
                  </motion.div>
                  
                  <motion.div 
                    className="flex space-x-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.span 
                        key={i} 
                        className={`text-lg ${
                          i < Math.floor(product.rating.rate) ? 'text-yellow-500' : 'text-gray-300'
                        }`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + i * 0.1, duration: 0.2 }}
                      >
                        ★
                      </motion.span>
                    ))}
                    <span className="text-sm text-muted-foreground">
                      ({product.rating.count} reviews)
                    </span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex flex-col xs:flex-row gap-3 pt-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <Button 
                      className="flex-1 bg-primary hover:bg-primary/90"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 border-primary text-primary hover:bg-primary/10 hover:text-primary"
                      onClick={() => navigate(`/products/${product.id}`)}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </motion.div>
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
