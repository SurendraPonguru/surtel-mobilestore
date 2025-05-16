
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { getProductsByCategory, Product, products, getProductsOnSale, getFeaturedProducts, searchProducts } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";
import SearchForm from "@/components/SearchForm";
import ProductFilterDrawer from "@/components/ProductFilterDrawer";
import CommandSearch from "@/components/CommandSearch";

const DynamicProductFilter = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState("All Products");
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");
  
  useEffect(() => {
    const searchQuery = searchParams.get("search");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    const rating = searchParams.get("rating");
    const sort = searchParams.get("sort");
    const currencyParam = searchParams.get("currency") as "USD" | "INR" | null;
    
    if (currencyParam) {
      setCurrency(currencyParam);
    } else {
      setCurrency("USD");
    }
    
    setIsLoading(true);
    
    // Simulate loading delay
    const timer = setTimeout(() => {
      let result: Product[] = [];
      
      if (searchQuery) {
        result = searchProducts(searchQuery);
        setTitle(`Search results for "${searchQuery}"`);
      } else {
        result = products;
        setTitle("All Products");
      }
      
      // Apply price filter if present
      if (minPrice || maxPrice) {
        const min = minPrice ? parseFloat(minPrice) : 0;
        const max = maxPrice ? parseFloat(maxPrice) : Infinity;
        
        result = result.filter(product => {
          const finalPrice = product.onSale && product.discount
            ? product.price - (product.price * product.discount / 100)
            : product.price;
          
          return finalPrice >= min && finalPrice <= max;
        });
      }
      
      // Apply rating filter if present
      if (rating) {
        const minRating = parseFloat(rating);
        result = result.filter(product => product.rating.rate >= minRating);
      }
      
      // Apply sorting if present
      if (sort) {
        if (sort === "price_asc") {
          result = [...result].sort((a, b) => {
            const priceA = a.onSale && a.discount ? a.price - (a.price * a.discount / 100) : a.price;
            const priceB = b.onSale && b.discount ? b.price - (b.price * b.discount / 100) : b.price;
            return priceA - priceB;
          });
        } else if (sort === "price_desc") {
          result = [...result].sort((a, b) => {
            const priceA = a.onSale && a.discount ? a.price - (a.price * a.discount / 100) : a.price;
            const priceB = b.onSale && b.discount ? b.price - (b.price * b.discount / 100) : b.price;
            return priceB - priceA;
          });
        } else if (sort === "rating") {
          result = [...result].sort((a, b) => b.rating.rate - a.rating.rate);
        }
      }
      
      setFilteredProducts(result);
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [searchParams]);
  
  return (
    <div className="w-full animate-fade-in">
      <motion.div 
        className="mb-8 space-y-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <CommandSearch />
            <ProductFilterDrawer />
          </div>
        </div>
      </motion.div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={title + searchParams.toString()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="aspect-[3/4] rounded-lg bg-muted"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                />
              ))}
            </div>
          ) : (
            <ProductGrid 
              products={filteredProducts}
              emptyMessage={
                searchParams.toString().includes("search")
                  ? "No products match your search. Try a different term."
                  : "No products found with the selected filters."
              }
              currency={currency}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default DynamicProductFilter;
