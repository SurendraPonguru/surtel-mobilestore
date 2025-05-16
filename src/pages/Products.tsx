
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Motion, AnimatePresence, motion } from "framer-motion";
import { categories, getProductsByCategory, Product, products, getProductsOnSale, getFeaturedProducts, searchProducts } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";
import CategoryFilter from "@/components/CategoryFilter";
import SearchForm from "@/components/SearchForm";
import ProductFilterDrawer from "@/components/ProductFilterDrawer";
import CommandSearch from "@/components/CommandSearch";

const Products = () => {
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    const searchQuery = params.get("search");
    const minPrice = params.get("minPrice");
    const maxPrice = params.get("maxPrice");
    const rating = params.get("rating");
    
    setIsLoading(true);
    
    setTimeout(() => {
      let result: Product[] = [];
      
      if (searchQuery) {
        result = searchProducts(searchQuery);
      } else if (category === "sale") {
        result = getProductsOnSale();
      } else if (category === "featured") {
        result = getFeaturedProducts();
      } else if (category) {
        result = getProductsByCategory(category);
      } else {
        result = products;
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
    }, 300); // Simulate loading delay
    
    // Scroll to top when search params change
    window.scrollTo(0, 0);
  }, [location.search]);
  
  const renderTitle = () => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    const searchQuery = params.get("search");
    
    if (searchQuery) {
      return `Search results for "${searchQuery}"`;
    }
    
    if (category === "sale") {
      return "On Sale";
    }
    
    if (category === "featured") {
      return "Featured Products";
    }
    
    if (category) {
      const categoryItem = categories.find(c => c.id === category);
      return categoryItem ? categoryItem.name : "Products";
    }
    
    return "All Products";
  };
  
  return (
    <div className="container py-8 animate-fade-in">
      <motion.div 
        className="mb-8 space-y-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-2xl font-bold sm:text-3xl">{renderTitle()}</h1>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <CommandSearch />
            <ProductFilterDrawer />
          </div>
          <CategoryFilter className="order-first md:order-last" />
        </div>
      </motion.div>
      
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
            location.search.includes("search")
              ? "No products match your search. Try a different term."
              : "No products found with the selected filters."
          }
        />
      )}
    </div>
  );
};

export default Products;
