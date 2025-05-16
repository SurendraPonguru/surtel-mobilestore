
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
        <DynamicProductFilter />
      </motion.div>
    </div>
  );
};

export default Products;
