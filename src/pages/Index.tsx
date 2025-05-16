
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { categories } from "@/data/products";
import ProductShowcase from "@/components/ProductShowcase";
import CategoryBrowser from "@/components/CategoryBrowser";
import FeaturedProducts from "@/components/FeaturedProducts";
import OnSaleProducts from "@/components/OnSaleProducts";
import CommandSearch from "@/components/CommandSearch";
import DynamicProductFilter from "@/components/DynamicProductFilter";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("featured");

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen animate-fade-in">
      {/* Hero Section with Dynamic Elements */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/20 py-24">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.span 
                className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                Welcome to our store
              </motion.span>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                Discover <span className="text-primary relative">
                  Beyond
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-1 bg-primary/50 rounded"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </span> <br />
                Ordinary Shopping
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Experience products in a new dimension. Interact, explore, and shop 
                in our reimagined digital space.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="sm:w-auto group relative overflow-hidden">
                  <Link to="/products">
                    <motion.span
                      className="absolute inset-0 bg-primary/20"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    />
                    <span className="relative">Explore Products</span>
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="sm:w-auto">
                  <Link to="/products?category=sale">View Sale</Link>
                </Button>
              </div>
              <div className="pt-4">
                <CommandSearch />
              </div>
            </motion.div>
            
            {/* Interactive 3D-like Product Showcase */}
            <motion.div 
              className="relative h-[400px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="absolute w-full h-full flex items-center justify-center">
                <div className="relative w-80 h-80">
                  {/* Floating products effect */}
                  {isLoaded && (
                    <>
                      <motion.div 
                        className="absolute top-0 left-0 w-48 h-48 rounded-lg overflow-hidden shadow-xl"
                        animate={{ 
                          y: [0, -15, 0], 
                          rotate: [0, 2, 0],
                          scale: [1, 1.02, 1]
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 6,
                          ease: "easeInOut" 
                        }}
                      >
                        <img 
                          src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80" 
                          alt="Laptop" 
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      
                      <motion.div 
                        className="absolute bottom-0 right-0 w-40 h-40 rounded-lg overflow-hidden shadow-xl"
                        animate={{ 
                          y: [0, 15, 0], 
                          rotate: [0, -3, 0],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 7,
                          ease: "easeInOut",
                          delay: 0.5
                        }}
                      >
                        <img 
                          src="https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2680&q=80" 
                          alt="Mobile phone" 
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      
                      <motion.div 
                        className="absolute top-10 right-5 w-36 h-36 rounded-lg overflow-hidden shadow-xl"
                        animate={{ 
                          y: [0, 10, 0], 
                          x: [0, -5, 0],
                          rotate: [0, 5, 0]
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 8,
                          ease: "easeInOut",
                          delay: 1
                        }}
                      >
                        <img 
                          src="https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2692&q=80" 
                          alt="Headphones" 
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </>
                  )}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.12),transparent_55%)]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-3/4 h-3/4 rounded-full blur-3xl bg-primary/10 animate-pulse" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Product Showcase Section */}
      <section className="py-12 bg-background">
        <div className="container">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <p className="text-muted-foreground mt-2">Discover our best selections</p>
          </motion.div>
          
          <ProductShowcase />
        </div>
      </section>

      {/* Dynamic Product Filter Section */}
      <section className="py-12 bg-muted/20">
        <div className="container">
          <motion.div 
            className="mb-8 flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {[
              { id: 'featured', label: 'Featured' },
              { id: 'sale', label: 'On Sale' },
              { id: 'all', label: 'Browse All' },
            ].map((section) => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? "default" : "outline"}
                onClick={() => setActiveSection(section.id)}
                className="min-w-[100px]"
              >
                {section.label}
              </Button>
            ))}
          </motion.div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <DynamicProductFilter />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Animated Categories Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <CategoryBrowser />
        </div>
      </section>

      {/* Shopping Experience Highlights */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold">Why Shop With Us</h2>
            <p className="text-muted-foreground mt-2 max-w-lg mx-auto">
              Experience shopping reimagined with our unique approach to online retail
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Interactive Shopping",
                description: "Explore products in a new dimension with our interactive showcase",
                icon: "🔍",
                color: "from-blue-500/20 to-blue-600/20",
                border: "border-blue-500/30",
              },
              {
                title: "Smart Filters",
                description: "Find exactly what you need with our intuitive filtering system",
                icon: "🧠",
                color: "from-purple-500/20 to-purple-600/20",
                border: "border-purple-500/30",
              },
              {
                title: "Exclusive Deals",
                description: "Get access to members-only discounts and early bird offers",
                icon: "🏷️",
                color: "from-green-500/20 to-green-600/20",
                border: "border-green-500/30",
              },
              {
                title: "Seamless Experience",
                description: "Enjoy a smooth shopping journey from browsing to checkout",
                icon: "✨",
                color: "from-amber-500/20 to-amber-600/20",
                border: "border-amber-500/30",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${item.color} border ${item.border} rounded-lg p-6 text-center`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="text-4xl mb-4"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    delay: index * 0.5
                  }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
