
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Zap, Package, Home as HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { categories } from "@/data/products";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

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
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                Discover <span className="text-primary">Beyond</span> <br />
                Ordinary Shopping
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Experience products in a new dimension. Interact, explore, and shop 
                in our reimagined digital space.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="sm:w-auto group">
                  <Link to="/products">
                    Explore Products
                    <ShoppingBag className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="sm:w-auto">
                  <Link to="/products?category=sale">View Sale</Link>
                </Button>
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
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.08),transparent_55%)]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-3/4 h-3/4 rounded-full blur-3xl bg-primary/10 animate-pulse" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Animated Categories Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold">Browse Categories</h2>
            <p className="text-muted-foreground mt-2">Explore our unique collection of products</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <motion.div 
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link 
                  to={`/products?category=${category.id}`}
                  className="block"
                  onMouseEnter={() => setActiveCategory(category.id)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <Card className={`transition-all h-full overflow-hidden ${activeCategory === category.id ? 'ring-2 ring-primary' : ''}`}>
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className={`p-3 rounded-full ${
                        category.id === 'electronics' ? 'bg-blue-100 text-blue-600' :
                        category.id === 'jewelery' ? 'bg-purple-100 text-purple-600' :
                        category.id === "men's clothing" ? 'bg-green-100 text-green-600' :
                        category.id === "women's clothing" ? 'bg-pink-100 text-pink-600' :
                        category.id === "sale" ? 'bg-red-100 text-red-600' :
                        'bg-orange-100 text-orange-600'
                      }`}>
                        {category.id === 'electronics' ? <Zap className="h-6 w-6" /> :
                         category.id === 'household' ? <HomeIcon className="h-6 w-6" /> :
                         <Package className="h-6 w-6" />}
                      </div>
                      <div>
                        <h3 className="font-medium">{category.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">Explore Items</p>
                      </div>
                      
                      <motion.div 
                        className="w-full h-1 bg-primary/0"
                        animate={{ 
                          scaleX: activeCategory === category.id ? 1 : 0,
                          backgroundColor: activeCategory === category.id ? 'hsl(var(--primary))' : 'transparent'
                        }}
                        initial={{ scaleX: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ originX: 0 }}
                      />
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Featured Collection</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Trending Products</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Discover our most popular items that everyone is talking about
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
