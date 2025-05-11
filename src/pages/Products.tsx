
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { categories, getProductsByCategory, Product, products, getProductsOnSale, getFeaturedProducts, searchProducts } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";
import CategoryFilter from "@/components/CategoryFilter";
import SearchForm from "@/components/SearchForm";

const Products = () => {
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    const searchQuery = params.get("search");
    
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
      <div className="mb-8 space-y-4">
        <h1 className="text-2xl font-bold sm:text-3xl">{renderTitle()}</h1>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <SearchForm />
          <CategoryFilter className="order-first md:order-last" />
        </div>
      </div>
      
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="aspect-[3/4] rounded-lg bg-muted animate-pulse"
            />
          ))}
        </div>
      ) : (
        <ProductGrid 
          products={filteredProducts}
          emptyMessage={
            location.search.includes("search")
              ? "No products match your search. Try a different term."
              : "No products found in this category."
          }
        />
      )}
    </div>
  );
};

export default Products;
