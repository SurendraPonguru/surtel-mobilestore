
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { categories, getProductsByCategory, Product, products, getProductsOnSale, getFeaturedProducts, searchProducts } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";
import CategoryFilter from "@/components/CategoryFilter";
import SearchForm from "@/components/SearchForm";
import ProductFilterDrawer from "@/components/ProductFilterDrawer";
import CommandSearch from "@/components/CommandSearch";

const DynamicProductFilter = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState("All Products");
  
  useEffect(() => {
    const category = searchParams.get("category");
    const searchQuery = searchParams.get("search");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    const rating = searchParams.get("rating");
    
    setIsLoading(true);
    
    // Simulate loading delay
    const timer = setTimeout(() => {
      let result: Product[] = [];
      
      if (searchQuery) {
        result = searchProducts(searchQuery);
        setTitle(`Search results for "${searchQuery}"`);
      } else if (category === "sale") {
        result = getProductsOnSale();
        setTitle("On Sale");
      } else if (category === "featured") {
        result = getFeaturedProducts();
        setTitle("Featured Products");
      } else if (category) {
        result = getProductsByCategory(category);
        const categoryItem = categories.find(c => c.id === category);
        setTitle(categoryItem ? categoryItem.name : "Products");
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
          <CategoryFilter className="order-first md:order-last" />
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
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default DynamicProductFilter;
