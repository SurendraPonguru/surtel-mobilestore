
import { useState } from "react";
import { Filter, Sliders, X, Check } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { categories } from "@/data/products";
import { cn } from "@/lib/utils";

const ProductFilterDrawer = ({ className }: { className?: string }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  const [open, setOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "all"
  );
  const [selectedRating, setSelectedRating] = useState("");
  
  const applyFilters = () => {
    const params = new URLSearchParams();
    
    if (selectedCategory !== "all") {
      params.set("category", selectedCategory);
    }
    
    if (priceRange[0] > 0 || priceRange[1] < 1000) {
      params.set("minPrice", priceRange[0].toString());
      params.set("maxPrice", priceRange[1].toString());
    }
    
    if (selectedRating) {
      params.set("rating", selectedRating);
    }
    
    const search = searchParams.get("search");
    if (search) {
      params.set("search", search);
    }
    
    navigate(`/products?${params.toString()}`);
    setOpen(false);
  };
  
  const clearFilters = () => {
    setPriceRange([0, 1000]);
    setSelectedCategory("all");
    setSelectedRating("");
  };
  
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button 
          variant="outline" 
          size="icon"
          className={cn("relative", className)}
        >
          <Sliders className="h-4 w-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="flex items-center justify-between">
              <span>Filter Products</span>
              <DrawerClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-4 w-4" />
                </Button>
              </DrawerClose>
            </DrawerTitle>
          </DrawerHeader>
          <div className="px-4 pb-4">
            <div className="space-y-5">
              <div>
                <h3 className="mb-3 text-sm font-medium">Categories</h3>
                <RadioGroup 
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  {categories.map((category) => (
                    <div 
                      key={category.id} 
                      className="flex items-center space-x-2 py-1"
                    >
                      <RadioGroupItem value={category.id} id={`category-${category.id}`} />
                      <label htmlFor={`category-${category.id}`} className="text-sm">
                        {category.name}
                      </label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              
              <Separator />
              
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-medium">Price Range</h3>
                  <span className="text-xs text-muted-foreground">
                    ${priceRange[0]} - ${priceRange[1]}
                  </span>
                </div>
                <Slider
                  defaultValue={[0, 1000]}
                  min={0}
                  max={1000}
                  step={10}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="py-4"
                />
              </div>
              
              <Separator />
              
              <div>
                <h3 className="mb-3 text-sm font-medium">Rating</h3>
                <RadioGroup 
                  value={selectedRating}
                  onValueChange={setSelectedRating}
                >
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div 
                      key={rating} 
                      className="flex items-center space-x-2 py-1"
                    >
                      <RadioGroupItem value={rating.toString()} id={`rating-${rating}`} />
                      <label htmlFor={`rating-${rating}`} className="text-sm flex items-center">
                        {Array.from({ length: rating }).map((_, i) => (
                          <span key={i} className="text-yellow-500">★</span>
                        ))}
                        {Array.from({ length: 5 - rating }).map((_, i) => (
                          <span key={i} className="text-gray-300">★</span>
                        ))}
                        <span className="ml-1">& Up</span>
                      </label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>
          </div>
          <DrawerFooter>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={clearFilters}
              >
                Clear All
              </Button>
              <Button 
                className="flex-1"
                onClick={applyFilters}
              >
                Apply Filters
              </Button>
            </div>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ProductFilterDrawer;
