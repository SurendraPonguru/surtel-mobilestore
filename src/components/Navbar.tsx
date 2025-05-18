
import { Link } from "react-router-dom";
import { Heart, Moon, ShoppingCart, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { Button } from "./ui/button";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { cartCount } = useCart();
  const { wishlist } = useWishlist();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/96d5b3e8-a2e9-4e56-a3ee-a71a3fe6ff46.png" 
              alt="SurTel Logo" 
              className="h-8 w-auto" 
            />
            <span className="text-xl font-bold">SurTel</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              to="/"
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              Products
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          
          <Link to="/wishlist" className="relative">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Heart className="h-5 w-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                  {wishlist.length}
                </span>
              )}
            </Button>
          </Link>
          
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
      
      <nav className="container flex md:hidden overflow-auto pb-2">
        <Link
          to="/"
          className="mr-4 text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
        >
          Home
        </Link>
        <Link
          to="/products"
          className="mr-4 text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
        >
          Products
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
