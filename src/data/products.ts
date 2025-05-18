
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  images?: string[]; // Additional images for product view
  rating: {
    rate: number;
    count: number;
  };
  featured?: boolean;
  onSale?: boolean;
  discount?: number;
  specs?: {
    processor?: string;
    ram?: string;
    storage?: string;
    camera?: string;
    battery?: string;
    display?: string;
    os?: string;
  };
  reviews?: {
    id: number;
    user: string;
    comment: string;
    date: string;
    rating: number;
  }[];
}

export const products: Product[] = [
  {
    id: 13,
    title: "Premium Smartphone Pro",
    price: 899.99,
    description: "The latest smartphone with an edge-to-edge display, powerful camera system, long battery life, and blazing-fast processor. Perfect for photography, gaming, and productivity.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    rating: {
      rate: 4.9,
      count: 487
    },
    featured: true,
    specs: {
      processor: "Octa-core (1x3.0 GHz & 3x2.4 GHz & 4x1.8 GHz)",
      ram: "8GB",
      storage: "256GB",
      camera: "Triple Camera: 48MP + 12MP + 8MP",
      battery: "4500mAh",
      display: "6.7 inch AMOLED, 120Hz",
      os: "Android 13"
    },
    reviews: [
      {
        id: 1,
        user: "John D.",
        comment: "Amazing camera quality and battery life. The display is gorgeous!",
        date: "2023-05-12",
        rating: 5
      },
      {
        id: 2,
        user: "Sarah M.",
        comment: "Great phone but a bit expensive. The processor is super fast.",
        date: "2023-04-28",
        rating: 4
      },
      {
        id: 3,
        user: "Mike T.",
        comment: "Best smartphone I've ever owned. The battery lasts all day!",
        date: "2023-06-03",
        rating: 5
      }
    ]
  },
  {
    id: 7,
    title: "UltraPhone 5G",
    price: 799.95,
    description: "Experience lightning-fast 5G connectivity with this premium smartphone featuring AI-powered cameras and an all-day battery life.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1592286927505-1def25115d1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1592286927505-1def25115d1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    rating: {
      rate: 4.7,
      count: 352
    },
    featured: true,
    onSale: true,
    discount: 15,
    specs: {
      processor: "Octa-core (2x2.8 GHz & 6x1.8 GHz)",
      ram: "6GB",
      storage: "128GB",
      camera: "Quad Camera: 64MP + 12MP + 5MP + 5MP",
      battery: "5000mAh",
      display: "6.5 inch LCD, 90Hz",
      os: "Android 12"
    },
    reviews: [
      {
        id: 1,
        user: "Emma L.",
        comment: "Great phone for the price. Battery life is excellent!",
        date: "2023-03-15",
        rating: 5
      },
      {
        id: 2,
        user: "Robert K.",
        comment: "Camera could be better but overall good performance.",
        date: "2023-02-22",
        rating: 4
      }
    ]
  },
  {
    id: 9,
    title: "Compact Elite Phone",
    price: 699.99,
    description: "A compact yet powerful smartphone with premium features including an exceptional camera system and fast charging capability.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1529653762956-b0a27278529c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1529653762956-b0a27278529c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565772838667-2a1367ba22e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1606293459209-958d5c67c84f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    rating: {
      rate: 4.6,
      count: 298
    },
    specs: {
      processor: "Hexa-core (2x2.65 GHz & 4x1.8 GHz)",
      ram: "4GB",
      storage: "64GB",
      camera: "Dual Camera: 12MP + 8MP",
      battery: "3800mAh",
      display: "5.8 inch OLED, 60Hz",
      os: "Android 12"
    },
    reviews: [
      {
        id: 1,
        user: "Chris P.",
        comment: "Perfect size and excellent build quality. Not too big, not too small.",
        date: "2023-01-18",
        rating: 5
      },
      {
        id: 2,
        user: "Lisa N.",
        comment: "Good performance but battery life could be better.",
        date: "2023-02-05",
        rating: 4
      }
    ]
  },
  {
    id: 19,
    title: "Budget Friendly Phone",
    price: 299.99,
    description: "Affordable smartphone with all the essential features you need including a capable camera, decent performance, and good battery life.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1609252924198-d3d798a3b8d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544866092-1935c5ef2a8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    rating: {
      rate: 4.3,
      count: 156
    },
    onSale: true,
    discount: 10,
    specs: {
      processor: "Octa-core 2.0 GHz",
      ram: "3GB",
      storage: "32GB",
      camera: "Dual Camera: 13MP + 2MP",
      battery: "4000mAh",
      display: "6.2 inch LCD, 60Hz",
      os: "Android 11"
    },
    reviews: [
      {
        id: 1,
        user: "Jason T.",
        comment: "Great value for money. Does everything I need without breaking the bank.",
        date: "2023-04-02",
        rating: 5
      },
      {
        id: 2,
        user: "Maria G.",
        comment: "Good budget phone, but camera struggles in low light.",
        date: "2023-03-15",
        rating: 3
      }
    ]
  },
  {
    id: 23,
    title: "Gaming Smartphone Ultra",
    price: 1099.95,
    description: "Designed specifically for mobile gaming with a high refresh rate display, advanced cooling system, and shoulder triggers for immersive gaming experience.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1595941069915-4ebc5b29532f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1595941069915-4ebc5b29532f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1623126908029-58cb08a2bddb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560671563-7a75c5fccef9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    rating: {
      rate: 4.8,
      count: 214
    },
    featured: true,
    specs: {
      processor: "Octa-core (1x3.2 GHz & 3x2.8 GHz & 4x2.0 GHz)",
      ram: "16GB",
      storage: "512GB",
      camera: "Triple Camera: 64MP + 16MP + 8MP",
      battery: "6000mAh",
      display: "6.8 inch AMOLED, 165Hz",
      os: "Android 13"
    },
    reviews: [
      {
        id: 1,
        user: "Alex K.",
        comment: "Best gaming phone on the market. The shoulder triggers are a game changer!",
        date: "2023-05-27",
        rating: 5
      },
      {
        id: 2,
        user: "Daniel R.",
        comment: "Amazing for gaming but the battery drains quickly at high settings.",
        date: "2023-04-15",
        rating: 4
      }
    ]
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "electronics", name: "Electronics" }
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
