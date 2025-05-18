
import { motion } from "framer-motion";
import DynamicProductFilter from "@/components/DynamicProductFilter";

const Products = () => {
  return (
    <div className="container py-8 animate-fade-in">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6">
          <h1 className="text-3xl font-bold">SurTel Mobile Collection</h1>
          <p className="text-muted-foreground mt-2">
            Browse our selection of premium smartphones from top global brands
          </p>
        </div>
        <DynamicProductFilter />
      </motion.div>
    </div>
  );
};

export default Products;
