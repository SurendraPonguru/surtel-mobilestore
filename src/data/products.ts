export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  featured?: boolean;
  onSale?: boolean;
  discount?: number;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Modern Minimalist Backpack",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the city. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday essentials in the main compartment, and keep small items organized in the front pocket.",
    category: "bags",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
    rating: {
      rate: 4.8,
      count: 421
    },
    featured: true
  },
  {
    id: 2,
    title: "Premium Slim Fit T-Shirt",
    price: 29.95,
    description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. The perfect casual shirt for everyday wear.",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80",
    rating: {
      rate: 4.5,
      count: 290
    },
    onSale: true,
    discount: 20
  },
  {
    id: 3,
    title: "Cotton Casual Jacket",
    price: 89.95,
    description: "Great outerwear jacket for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors.",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=736&q=80",
    rating: {
      rate: 4.2,
      count: 187
    }
  },
  {
    id: 4,
    title: "Handcrafted Ceramic Mug",
    price: 24.99,
    description: "The premium ceramic mug is designed to be durable and long-lasting. It's perfect for your morning coffee, afternoon tea, or any hot beverage of choice.",
    category: "home",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    rating: {
      rate: 4.7,
      count: 162
    }
  },
  {
    id: 5,
    title: "Minimalist Gold Bracelet",
    price: 59.99,
    description: "From our Legends Collection, the Classic Gold Bracelet for her features a minimal design that adds a touch of elegance to any outfit.",
    category: "jewelry",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    rating: {
      rate: 4.9,
      count: 214
    },
    featured: true
  },
  {
    id: 6,
    title: "Leather Crossbody Bag",
    price: 129.95,
    description: "100% high quality leather construction featuring a spacious main compartment, multiple interior pockets, and adjustable shoulder strap.",
    category: "bags",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=876&q=80",
    rating: {
      rate: 4.6,
      count: 352
    },
    onSale: true,
    discount: 15
  },
  {
    id: 7,
    title: "Smart Digital Watch",
    price: 199.95,
    description: "Track your fitness goals, receive notifications, and stay connected on the go with this premium smartwatch featuring health monitoring and long battery life.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80",
    rating: {
      rate: 4.7,
      count: 562
    },
    featured: true
  },
  {
    id: 8,
    title: "Modern Wall Clock",
    price: 49.95,
    description: "Add a touch of elegance to your home with this modern, minimalist wall clock featuring a silent quartz movement and clean design.",
    category: "home",
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    rating: {
      rate: 4.4,
      count: 312
    }
  },
  {
    id: 9,
    title: "Wireless Earbuds",
    price: 129.99,
    description: "Experience crystal clear sound with these premium wireless earbuds featuring noise cancellation, long battery life, and comfortable fit.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1606741965730-8616bbd577f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
    rating: {
      rate: 4.8,
      count: 412
    }
  },
  {
    id: 10,
    title: "Contemporary Desk Lamp",
    price: 79.95,
    description: "This adjustable LED desk lamp provides perfect lighting for work or reading, with multiple brightness levels and a modern design.",
    category: "home",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    rating: {
      rate: 4.3,
      count: 186
    },
    onSale: true,
    discount: 25
  },
  {
    id: 11,
    title: "Linen Summer Dress",
    price: 69.95,
    description: "A lightweight, breathable linen dress perfect for warm weather, featuring a comfortable fit and timeless design.",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
    rating: {
      rate: 4.5,
      count: 267
    }
  },
  {
    id: 12,
    title: "Leather Wallet",
    price: 45.99,
    description: "Crafted from genuine leather, this slim wallet features multiple card slots, a bill compartment, and RFID blocking technology.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
    rating: {
      rate: 4.6,
      count: 329
    },
    featured: true
  },
  {
    id: 13,
    title: "Premium Smartphone Pro",
    price: 899.99,
    description: "The latest smartphone with an edge-to-edge display, powerful camera system, long battery life, and blazing-fast processor. Perfect for photography, gaming, and productivity.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: {
      rate: 4.9,
      count: 487
    },
    featured: true
  },
  {
    id: 14,
    title: "Ultra-thin Laptop",
    price: 1299.99,
    description: "Professional-grade laptop featuring a stunning display, all-day battery life, and powerful performance in an incredibly thin and light package.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: {
      rate: 4.8,
      count: 352
    },
    featured: true
  },
  {
    id: 15,
    title: "Wireless Noise-Cancelling Headphones",
    price: 249.95,
    description: "Premium wireless headphones with industry-leading noise cancellation, incredible sound quality, and comfortable design for all-day listening.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: {
      rate: 4.7,
      count: 298
    },
    onSale: true,
    discount: 15
  },
  {
    id: 16,
    title: "Smart LED TV - 55 inch",
    price: 649.99,
    description: "4K Ultra HD Smart TV with vibrant colors, crystal clear picture quality, and built-in streaming services for an immersive entertainment experience.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1593784991095-a205069533cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: {
      rate: 4.6,
      count: 214
    }
  },
  {
    id: 17,
    title: "Robot Vacuum Cleaner",
    price: 299.95,
    description: "Smart robot vacuum with advanced mapping, powerful suction, and app control to keep your floors clean without lifting a finger.",
    category: "household",
    image: "https://images.unsplash.com/photo-1629672845350-ecbaefe5de3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: {
      rate: 4.5,
      count: 176
    },
    onSale: true,
    discount: 20
  },
  {
    id: 18,
    title: "Smart Coffee Maker",
    price: 129.99,
    description: "WiFi-enabled coffee maker that lets you brew the perfect cup from your smartphone. Schedule brewing times and customize your coffee strength.",
    category: "household",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: {
      rate: 4.4,
      count: 142
    }
  },
  {
    id: 19,
    title: "Tablet Pro with Stylus",
    price: 549.99,
    description: "Powerful tablet with a high-resolution display, responsive stylus support, and all-day battery life for creative professionals and students.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: {
      rate: 4.7,
      count: 231
    }
  },
  {
    id: 20,
    title: "Smart Home Security Camera",
    price: 89.99,
    description: "HD security camera with night vision, motion detection alerts, and two-way audio. Monitor your home from anywhere using the smartphone app.",
    category: "household",
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: {
      rate: 4.5,
      count: 187
    }
  },
  {
    id: 21,
    title: "Ergonomic Office Chair",
    price: 249.95,
    description: "Premium office chair with adjustable lumbar support, breathable mesh back, and customizable settings for all-day comfort while working.",
    category: "household",
    image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: {
      rate: 4.6,
      count: 193
    }
  },
  {
    id: 22,
    title: "Gaming Console Pro",
    price: 499.99,
    description: "Next-generation gaming console delivering stunning graphics, lightning-fast load times, and an extensive library of games for immersive entertainment.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: {
      rate: 4.9,
      count: 432
    },
    featured: true
  },
  {
    id: 23,
    title: "Smart Fitness Watch",
    price: 199.95,
    description: "Advanced fitness tracker with heart rate monitoring, GPS, workout tracking, and smartphone notifications to help you stay connected and reach your fitness goals.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: {
      rate: 4.7,
      count: 287
    },
    onSale: true,
    discount: 10
  },
  {
    id: 24,
    title: "Air Purifier",
    price: 179.99,
    description: "HEPA air purifier that removes 99.97% of allergens, dust, and pollutants for cleaner, fresher air in your home. Ideal for allergies and asthma sufferers.",
    category: "household",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: {
      rate: 4.6,
      count: 163
    }
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "bags", name: "Bags" },
  { id: "clothing", name: "Clothing" },
  { id: "electronics", name: "Electronics" },
  { id: "home", name: "Home & Decor" },
  { id: "household", name: "Household" },
  { id: "jewelry", name: "Jewelry" },
  { id: "accessories", name: "Accessories" }
];

export function getProductById(id: number): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter(product => product.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}

export function getProductsOnSale(): Product[] {
  return products.filter(product => product.onSale);
}

export function searchProducts(query: string): Product[] {
  const searchTerm = query.toLowerCase().trim();
  if (!searchTerm) return products;
  
  return products.filter(
    product => 
      product.title.toLowerCase().includes(searchTerm) || 
      product.description.toLowerCase().includes(searchTerm) || 
      product.category.toLowerCase().includes(searchTerm)
  );
}
