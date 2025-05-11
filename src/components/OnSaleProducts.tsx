
import { Link } from "react-router-dom";
import { getProductsOnSale } from "@/data/products";
import ProductGrid from "./ProductGrid";
import { Button } from "./ui/button";

const OnSaleProducts = () => {
  const saleProducts = getProductsOnSale();

  return (
    <div className="container py-16 bg-muted/30">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold">On Sale</h2>
          <p className="text-muted-foreground">Limited time offers at amazing prices</p>
        </div>
        <Button asChild variant="outline" className="mt-4 sm:mt-0">
          <Link to="/products?category=sale">View All Sales</Link>
        </Button>
      </div>

      <ProductGrid products={saleProducts} />
    </div>
  );
};

export default OnSaleProducts;
