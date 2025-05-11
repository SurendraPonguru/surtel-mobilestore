
import { Link } from "react-router-dom";
import { getFeaturedProducts } from "@/data/products";
import ProductGrid from "./ProductGrid";
import { Button } from "./ui/button";

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="container py-16">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <p className="text-muted-foreground">Our handpicked favorites just for you</p>
        </div>
        <Button asChild variant="outline" className="mt-4 sm:mt-0">
          <Link to="/products">View All Products</Link>
        </Button>
      </div>

      <ProductGrid products={featuredProducts} />
    </div>
  );
};

export default FeaturedProducts;
