
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ArrowRight, Command } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { categories, searchProducts } from "@/data/products";

const CommandSearch = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    if (query.length > 1) {
      setResults(searchProducts(query));
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSelect = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <>
      <Button 
        variant="outline" 
        className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
        onClick={() => setOpen(true)}
      >
        <Search className="h-4 w-4 xl:mr-2" />
        <span className="hidden xl:inline-flex">Search products...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput 
          placeholder="Search products..." 
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          
          {results.length > 0 && (
            <CommandGroup heading="Products">
              {results.slice(0, 5).map((product) => (
                <CommandItem
                  key={product.id}
                  onSelect={() => handleSelect(`/products/${product.id}`)}
                  className="flex items-center"
                >
                  <div className="h-10 w-10 overflow-hidden rounded-md mr-2">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium line-clamp-1">{product.title}</span>
                    <span className="text-sm text-muted-foreground">${product.price.toFixed(2)}</span>
                  </div>
                  <ArrowRight className="ml-auto h-4 w-4 opacity-50" />
                </CommandItem>
              ))}
              {results.length > 5 && (
                <CommandItem 
                  onSelect={() => handleSelect(`/products?search=${encodeURIComponent(query)}`)}
                  className="justify-center text-primary"
                >
                  View all {results.length} results
                </CommandItem>
              )}
            </CommandGroup>
          )}
          
          <CommandGroup heading="Categories">
            {categories.filter(c => c.id !== "all").map((category) => (
              <CommandItem
                key={category.id}
                onSelect={() => handleSelect(`/products?category=${category.id}`)}
              >
                <span>{category.name}</span>
                <ArrowRight className="ml-auto h-4 w-4 opacity-50" />
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default CommandSearch;
