
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <img 
                src="/lovable-uploads/96d5b3e8-a2e9-4e56-a3ee-a71a3fe6ff46.png" 
                alt="SurTel Logo" 
                className="h-6 w-auto" 
              />
              <h3 className="text-lg font-medium">SurTel</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              A modern mobile phone store featuring premium smartphones from top global brands.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium">Shop</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-foreground">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=featured" className="text-muted-foreground hover:text-foreground">
                  Featured
                </Link>
              </li>
              <li>
                <Link to="/products?category=sale" className="text-muted-foreground hover:text-foreground">
                  On Sale
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium">Categories</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link to="/products?brand=Apple" className="text-muted-foreground hover:text-foreground">
                  Apple
                </Link>
              </li>
              <li>
                <Link to="/products?brand=Samsung" className="text-muted-foreground hover:text-foreground">
                  Samsung
                </Link>
              </li>
              <li>
                <Link to="/products?brand=Xiaomi" className="text-muted-foreground hover:text-foreground">
                  Xiaomi
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link to="#" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-foreground">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-6">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {currentYear} SurTel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
