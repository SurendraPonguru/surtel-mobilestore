
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import OnSaleProducts from "@/components/OnSaleProducts";

const Index = () => {
  return (
    <div className="min-h-screen animate-fade-in">
      <Hero />
      <FeaturedProducts />
      <OnSaleProducts />
    </div>
  );
};

export default Index;
