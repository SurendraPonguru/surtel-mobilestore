
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
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "bags", name: "Bags" },
  { id: "clothing", name: "Clothing" },
  { id: "electronics", name: "Electronics" },
  { id: "home", name: "Home & Decor" },
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
