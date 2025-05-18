
import { useSearchParams } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { IndianRupee, SlidersHorizontal, DollarSign, Star } from "lucide-react";
import { useState, useEffect } from "react";

const ProductFilterDrawer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Price filter state
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1500]);
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  
  // Rating filter state
  const [rating, setRating] = useState<number>(0);
  
  // Currency state
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");
  
  // Sort state
  const [sort, setSort] = useState<string>("");
  
  // Initialize state from URL params
  useEffect(() => {
    const minPriceParam = searchParams.get("minPrice");
    const maxPriceParam = searchParams.get("maxPrice");
    const ratingParam = searchParams.get("rating");
    const sortParam = searchParams.get("sort");
    const currencyParam = searchParams.get("currency") as "USD" | "INR" | null;
    
    if (minPriceParam) setMinPrice(minPriceParam);
    if (maxPriceParam) setMaxPrice(maxPriceParam);
    if (ratingParam) setRating(parseFloat(ratingParam));
    if (sortParam) setSort(sortParam);
    if (currencyParam) setCurrency(currencyParam);
  }, [searchParams]);
  
  // Apply filters
  const applyFilters = () => {
    // Create a new URLSearchParams object
    const newParams = new URLSearchParams(searchParams);
    
    // Update price filters
    if (minPrice !== '') {
      newParams.set("minPrice", minPrice);
    } else {
      newParams.delete("minPrice");
    }
    
    if (maxPrice !== '') {
      newParams.set("maxPrice", maxPrice);
    } else {
      newParams.delete("maxPrice");
    }
    
    // Update rating filter
    if (rating > 0) {
      newParams.set("rating", rating.toString());
    } else {
      newParams.delete("rating");
    }
    
    // Update sort
    if (sort) {
      newParams.set("sort", sort);
    } else {
      newParams.delete("sort");
    }
    
    // Update currency
    newParams.set("currency", currency);
    
    // Update URL with new search params
    setSearchParams(newParams);
  };
  
  // Reset all filters
  const resetFilters = () => {
    setMinPrice('');
    setMaxPrice('');
    setRating(0);
    setSort("");
    setCurrency("USD");
    
    // Remove all filter params from URL, preserve search term if present
    const newParams = new URLSearchParams();
    const searchTerm = searchParams.get("search");
    if (searchTerm) newParams.set("search", searchTerm);
    
    setSearchParams(newParams);
  };
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="gap-1">
          <SlidersHorizontal className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Filter</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Filter Mobile Phones</SheetTitle>
        </SheetHeader>
        <div className="py-6 space-y-8">
          {/* Price Range Filter */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Price Range</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Min Price</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2">
                    {currency === "USD" ? "$" : "₹"}
                  </span>
                  <input
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    placeholder="0"
                    className="w-full rounded-md border border-input bg-background px-8 py-2 text-sm"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Max Price</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2">
                    {currency === "USD" ? "$" : "₹"}
                  </span>
                  <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    placeholder="1500"
                    className="w-full rounded-md border border-input bg-background px-8 py-2 text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Rating Filter */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">Min Rating</h3>
              <span className="flex items-center text-sm">
                {rating > 0 ? rating : "Any"} {rating > 0 && <Star className="ml-1 h-3 w-3 fill-yellow-500 text-yellow-500" />}
              </span>
            </div>
            <Slider
              value={[rating]}
              min={0}
              max={5}
              step={0.5}
              onValueChange={(value) => setRating(value[0])}
              className="py-2"
            />
          </div>
          
          {/* Currency Selector */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Currency</h3>
            <div className="flex gap-2">
              <Button
                variant={currency === "USD" ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrency("USD")}
                className="flex-1"
              >
                <DollarSign className="mr-1 h-3.5 w-3.5" />
                USD
              </Button>
              <Button
                variant={currency === "INR" ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrency("INR")}
                className="flex-1"
              >
                <IndianRupee className="mr-1 h-3.5 w-3.5" />
                INR
              </Button>
            </div>
          </div>
          
          {/* Sort Options */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Sort By</h3>
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant={sort === "price_asc" ? "default" : "outline"}
                size="sm"
                onClick={() => setSort("price_asc")}
              >
                Price: Low to High
              </Button>
              <Button
                variant={sort === "price_desc" ? "default" : "outline"}
                size="sm"
                onClick={() => setSort("price_desc")}
              >
                Price: High to Low
              </Button>
              <Button
                variant={sort === "rating" ? "default" : "outline"}
                size="sm"
                onClick={() => setSort("rating")}
              >
                Best Rating
              </Button>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-2 pt-4">
            <Button variant="outline" onClick={resetFilters} className="flex-1">
              Reset
            </Button>
            <Button onClick={applyFilters} className="flex-1">
              Apply Filters
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ProductFilterDrawer;
