
import { useState } from "react";
import { Filter, Sliders, X, Check, ArrowUpDown, SortAsc, SortDesc, IndianRupee } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu";
import { categories } from "@/data/products";
import { cn } from "@/lib/utils";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipTrigger, 
  TooltipProvider 
} from "@/components/ui/tooltip";
import { Toggle } from "@/components/ui/toggle";

const ProductFilterDrawer = ({ className }: { className?: string }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  const [open, setOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "all"
  );
  const [selectedRating, setSelectedRating] = useState(
    searchParams.get("rating") || ""
  );
  const [sortBy, setSortBy] = useState(searchParams.get("sort") || "");
  const [currency, setCurrency] = useState<"USD" | "INR">(
    (searchParams.get("currency") as "USD" | "INR") || "USD"
  );
  
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
    
    if (sortBy) {
      params.set("sort", sortBy);
    }
    
    if (currency !== "USD") {
      params.set("currency", currency);
    }
    
    const search = searchParams.get("search");
    if (search) {
      params.set("search", search);
    }
    
    navigate(`/products?${params.toString()}`);
    setOpen(false);
    setFilterOpen(false);
  };
  
  const clearFilters = () => {
    setPriceRange([0, 1000]);
    setSelectedCategory("all");
    setSelectedRating("");
    setSortBy("");
    setCurrency("USD");
    
    const params = new URLSearchParams();
    const search = searchParams.get("search");
    if (search) {
      params.set("search", search);
    }
    
    navigate(`/products?${params.toString()}`);
    setOpen(false);
    setFilterOpen(false);
  };

  const activeFiltersCount = [
    selectedCategory !== "all",
    priceRange[0] > 0 || priceRange[1] < 1000,
    !!selectedRating,
    !!sortBy,
    currency !== "USD"
  ].filter(Boolean).length;
  
  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        <Popover open={filterOpen} onOpenChange={setFilterOpen}>
          <PopoverTrigger asChild>
            <Button 
              variant="outline" 
              size="icon"
              className="relative"
            >
              <Filter className="h-4 w-4" />
              {activeFiltersCount > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-0" align="start">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Filters</h3>
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear all
                </Button>
              </div>
            </div>
            
            <div className="p-4 max-h-[60vh] overflow-auto space-y-5">
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

              <Separator />
              
              <div>
                <h3 className="mb-3 text-sm font-medium">Currency</h3>
                <div className="flex gap-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Toggle
                          pressed={currency === "USD"}
                          onPressedChange={() => setCurrency("USD")}
                          aria-label="Toggle USD currency"
                        >
                          <span className="flex items-center">$</span>
                        </Toggle>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>US Dollar</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Toggle
                          pressed={currency === "INR"}
                          onPressedChange={() => setCurrency("INR")}
                          aria-label="Toggle INR currency"
                        >
                          <span className="flex items-center">₹</span>
                        </Toggle>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Indian Rupee</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t">
              <Button 
                className="w-full"
                onClick={applyFilters}
              >
                Apply Filters
              </Button>
            </div>
          </PopoverContent>
        </Popover>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              size="icon"
              className="relative"
            >
              <ArrowUpDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Sort By</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              onClick={() => {
                setSortBy("price_asc");
                applyFilters();
              }}
              className={cn(sortBy === "price_asc" && "bg-accent text-accent-foreground")}
            >
              <SortAsc className="mr-2 h-4 w-4" /> 
              Price: Low to High
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => {
                setSortBy("price_desc");
                applyFilters();
              }}
              className={cn(sortBy === "price_desc" && "bg-accent text-accent-foreground")}
            >
              <SortDesc className="mr-2 h-4 w-4" /> 
              Price: High to Low
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => {
                setSortBy("rating");
                applyFilters();
              }}
              className={cn(sortBy === "rating" && "bg-accent text-accent-foreground")}
            >
              <span className="mr-2">★</span> 
              Best Rating
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default ProductFilterDrawer;
