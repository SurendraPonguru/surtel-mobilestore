
import { motion } from "framer-motion";
import { Product } from "@/data/products";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  emptyMessage?: string;
  currency?: "USD" | "INR";
}

const ProductGrid = ({
  products,
  emptyMessage = "No products found.",
  currency = "USD"
}: ProductGridProps) => {
  if (products.length === 0) {
    return (
      <motion.div 
        className="flex flex-col items-center justify-center py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-lg text-muted-foreground">{emptyMessage}</p>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <ProductCard product={product} currency={currency} />
        </motion.div>
      ))}
    </div>
  );
};

export default ProductGrid;
