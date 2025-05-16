
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Package, ShoppingBag, Home, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { categories } from "@/data/products";

const CategoryIcon = ({ id }: { id: string }) => {
  switch (id) {
    case "electronics":
      return <Zap className="h-5 w-5" />;
    case "household":
      return <Home className="h-5 w-5" />;
    default:
      return <Package className="h-5 w-5" />;
  }
};

const getCategoryColor = (id: string) => {
  switch (id) {
    case "electronics":
      return "bg-blue-100 text-blue-600";
    case "jewelery":
      return "bg-purple-100 text-purple-600";
    case "men's clothing":
      return "bg-green-100 text-green-600";
    case "women's clothing":
      return "bg-pink-100 text-pink-600";
    case "household":
      return "bg-orange-100 text-orange-600";
    case "sale":
      return "bg-red-100 text-red-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const CategoryBrowser = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const handleMouseEnter = (categoryId: string) => {
    setActiveCategory(categoryId);
  };
  
  const handleMouseLeave = () => {
    setActiveCategory(null);
  };
  
  return (
    <div className="w-full">
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-full space-y-4"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Browse Categories</h2>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <Menu className="h-4 w-4" />
              <span className="ml-2 text-sm">{isOpen ? "Hide" : "Show"}</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        
        <CollapsibleContent>
          <AnimatePresence>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {categories
                .filter(cat => cat.id !== "all" && cat.id !== "featured")
                .map((category) => (
                  <motion.div
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    onMouseEnter={() => handleMouseEnter(category.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link 
                      to={`/products?category=${category.id}`}
                      className="block h-full"
                    >
                      <div className="rounded-lg border bg-card h-full overflow-hidden relative">
                        <div className="flex flex-col items-center justify-center space-y-2 p-6 text-center">
                          <div className={`p-3 rounded-full ${getCategoryColor(category.id)}`}>
                            <CategoryIcon id={category.id} />
                          </div>
                          <h3 className="font-medium">{category.name}</h3>
                          <p className="text-xs text-muted-foreground">View Products</p>
                        </div>
                        
                        <motion.div 
                          className="absolute inset-0 bg-primary/5"
                          initial={{ opacity: 0 }}
                          animate={{ 
                            opacity: activeCategory === category.id ? 0.2 : 0
                          }}
                          transition={{ duration: 0.3 }}
                        />
                        
                        <motion.div 
                          className="absolute bottom-0 left-0 right-0 h-1 bg-primary"
                          initial={{ scaleX: 0 }}
                          animate={{ 
                            scaleX: activeCategory === category.id ? 1 : 0
                          }}
                          transition={{ duration: 0.3 }}
                          style={{ transformOrigin: "left" }}
                        />
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </AnimatePresence>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default CategoryBrowser;
