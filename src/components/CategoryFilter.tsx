
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { categories } from "@/data/products";
import { cn } from "@/lib/utils";

const CategoryFilter = ({ className }: { className?: string }) => {
  const [searchParams] = useSearchParams();
  const currentCategory = searchParams.get("category") || "all";
  
  return (
    <div className={cn("flex overflow-auto pb-2 no-scrollbar", className)}>
      {categories.map((category, index) => {
        // Create a new URLSearchParams object to preserve other params
        const newSearchParams = new URLSearchParams(searchParams);
        if (category.id === "all") {
          newSearchParams.delete("category");
        } else {
          newSearchParams.set("category", category.id);
        }
        
        const isActive = currentCategory === category.id;
        
        return (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={`?${newSearchParams.toString()}`}
              className={cn(
                "whitespace-nowrap px-4 py-2 text-sm transition-colors mr-2 rounded-full border relative overflow-hidden",
                isActive
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background hover:bg-secondary border-border"
              )}
            >
              {isActive && (
                <motion.div 
                  className="absolute inset-0 bg-primary/20"
                  initial={{ scale: 0, borderRadius: "100%" }}
                  animate={{ scale: 1.5, borderRadius: "100%" }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                />
              )}
              <span className="relative z-10">{category.name}</span>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
