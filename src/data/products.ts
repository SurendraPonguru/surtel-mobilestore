
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
    brand?: string;
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
    title: "Apple iPhone 15 Pro",
    price: 999.99,
    description: "Premium device with iOS ecosystem, providing strong performance, excellent cameras, and the signature Apple user experience with long-term software support and strong brand loyalty.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    rating: {
      rate: 4.9,
      count: 487
    },
    featured: true,
    specs: {
      processor: "A17 Pro chip with 6-core CPU",
      ram: "8GB",
      storage: "256GB",
      camera: "Triple Camera: 48MP + 12MP + 12MP",
      battery: "4500mAh",
      display: "6.7 inch Super Retina XDR, 120Hz",
      os: "iOS 17",
      brand: "Apple"
    },
    reviews: [
      {
        id: 1,
        user: "John D.",
        comment: "Amazing iOS ecosystem integration. The display is gorgeous!",
        date: "2023-05-12",
        rating: 5
      },
      {
        id: 2,
        user: "Sarah M.",
        comment: "Premium price but worth every penny. The processor is lightning fast.",
        date: "2023-04-28",
        rating: 4
      },
      {
        id: 3,
        user: "Mike T.",
        comment: "Best smartphone I've ever owned. Apple's brand loyalty is well-deserved!",
        date: "2023-06-03",
        rating: 5
      }
    ]
  },
  {
    id: 7,
    title: "Samsung Galaxy S23 Ultra",
    price: 899.95,
    description: "Flagship Samsung device featuring a stunning AMOLED display, versatile camera system, and innovative features. Part of Samsung's wide range that spans from budget to premium options.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1592286927505-1def25115d1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1592286927505-1def25115d1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560671563-7a75c5fccef9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534462323700-1217c1fa0b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    rating: {
      rate: 4.7,
      count: 352
    },
    featured: true,
    onSale: true,
    discount: 15,
    specs: {
      processor: "Snapdragon 8 Gen 2",
      ram: "12GB",
      storage: "256GB",
      camera: "Quad Camera: 108MP + 12MP + 10MP + 10MP",
      battery: "5000mAh",
      display: "6.8 inch Dynamic AMOLED 2X, 120Hz",
      os: "Android 13 with One UI 5.1",
      brand: "Samsung"
    },
    reviews: [
      {
        id: 1,
        user: "Emma L.",
        comment: "The AMOLED display is simply stunning. Samsung really knows how to make quality screens!",
        date: "2023-03-15",
        rating: 5
      },
      {
        id: 2,
        user: "Robert K.",
        comment: "Great innovation in camera technology but One UI takes some getting used to.",
        date: "2023-02-22",
        rating: 4
      }
    ]
  },
  {
    id: 9,
    title: "Xiaomi 13 Pro",
    price: 699.99,
    description: "Excellent value-for-money with innovative hardware features. This Xiaomi flagship delivers premium specs at a more accessible price point, showcasing their strength in the Asian market.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1529653762956-b0a27278529c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1529653762956-b0a27278529c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565772838667-2a1367ba22e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1606293459209-958d5c67c84f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1543582890-2e394a6a98e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591815302525-756a9bcc3425?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    rating: {
      rate: 4.6,
      count: 298
    },
    specs: {
      processor: "Snapdragon 8 Gen 2",
      ram: "12GB",
      storage: "256GB",
      camera: "Triple Camera: 50MP + 50MP + 50MP (Leica optics)",
      battery: "4820mAh",
      display: "6.73 inch AMOLED, 120Hz",
      os: "Android 13 with MIUI 14",
      brand: "Xiaomi"
    },
    reviews: [
      {
        id: 1,
        user: "Chris P.",
        comment: "Incredible value for the hardware. Xiaomi really delivers on the price-to-performance ratio.",
        date: "2023-01-18",
        rating: 5
      },
      {
        id: 2,
        user: "Lisa N.",
        comment: "Great performance but MIUI can be bloated. Hardware innovation is impressive though.",
        date: "2023-02-05",
        rating: 4
      }
    ]
  },
  {
    id: 19,
    title: "Oppo Find X6 Pro",
    price: 799.99,
    description: "Design-focused smartphone with cutting-edge camera technology and premium build quality. Part of Oppo's aggressive global expansion with emphasis on aesthetics and photography.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1609252924198-d3d798a3b8d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544866092-1935c5ef2a8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    rating: {
      rate: 4.5,
      count: 156
    },
    onSale: true,
    discount: 10,
    specs: {
      processor: "MediaTek Dimensity 9200",
      ram: "12GB",
      storage: "256GB",
      camera: "Triple Camera: 50MP + 50MP + 50MP (Hasselblad tuning)",
      battery: "5000mAh",
      display: "6.82 inch LTPO AMOLED, 120Hz",
      os: "Android 13 with ColorOS 13",
      brand: "Oppo"
    },
    reviews: [
      {
        id: 1,
        user: "Jason T.",
        comment: "The camera system is incredible. Oppo's focus on design and photography really shows.",
        date: "2023-04-02",
        rating: 5
      },
      {
        id: 2,
        user: "Maria G.",
        comment: "Beautiful device with great cameras, though ColorOS takes some getting used to.",
        date: "2023-03-15",
        rating: 4
      }
    ]
  },
  {
    id: 23,
    title: "Vivo X90 Pro",
    price: 749.95,
    description: "Camera-focused smartphone with impressive photography capabilities and strong presence in Asian markets. Features Zeiss optics and specialized portrait photography modes.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1595941069915-4ebc5b29532f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1595941069915-4ebc5b29532f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1623126908029-58cb08a2bddb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560671563-7a75c5fccef9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1533228100845-08145b01de14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1536618621839-12e5193f88a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    rating: {
      rate: 4.4,
      count: 214
    },
    featured: false,
    specs: {
      processor: "MediaTek Dimensity 9200",
      ram: "12GB",
      storage: "256GB",
      camera: "Triple Camera: 50MP + 50MP + 12MP (Zeiss optics)",
      battery: "4870mAh",
      display: "6.78 inch AMOLED, 120Hz",
      os: "Android 13 with FunTouch OS 13",
      brand: "Vivo"
    },
    reviews: [
      {
        id: 1,
        user: "Alex K.",
        comment: "Amazing portrait photos. Vivo really excels in camera technology.",
        date: "2023-05-27",
        rating: 5
      },
      {
        id: 2,
        user: "Daniel R.",
        comment: "Great for photography enthusiasts but FunTouch OS is a bit heavy.",
        date: "2023-04-15",
        rating: 4
      }
    ]
  },
  {
    id: 25,
    title: "Huawei Mate 60 Pro",
    price: 949.99,
    description: "Premium hardware and build quality with exceptional battery life. While facing international challenges, Huawei maintains strong presence in China with cutting-edge technology.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1550367083-9fa5411cb4e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1550367083-9fa5411cb4e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1557244056-110c3f73a350?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1480694313141-fce5e697ee25?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566728595340-911b03f7becc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    rating: {
      rate: 4.7,
      count: 183
    },
    featured: false,
    specs: {
      processor: "Kirin 9000s",
      ram: "12GB",
      storage: "512GB",
      camera: "Triple Camera: 50MP + 13MP + 12MP (XMAGE imaging)",
      battery: "5000mAh",
      display: "6.82 inch OLED, 120Hz",
      os: "HarmonyOS 4.0",
      brand: "Huawei"
    },
    reviews: [
      {
        id: 1,
        user: "Jennifer P.",
        comment: "The hardware quality is outstanding, though app availability is limited outside China.",
        date: "2023-06-22",
        rating: 4
      },
      {
        id: 2,
        user: "Michael B.",
        comment: "Beautiful design and excellent battery life. HarmonyOS is surprisingly good.",
        date: "2023-05-19",
        rating: 5
      }
    ]
  },
  {
    id: 27,
    title: "Realme GT 5 Pro",
    price: 499.99,
    description: "Affordable flagship with youth-oriented features and impressive performance-to-price ratio. Realme continues its fast growth with devices that appeal to younger consumers.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    rating: {
      rate: 4.3,
      count: 156
    },
    onSale: true,
    discount: 12,
    specs: {
      processor: "Snapdragon 8 Gen 3",
      ram: "16GB",
      storage: "256GB",
      camera: "Triple Camera: 50MP + 8MP + 2MP",
      battery: "5400mAh",
      display: "6.78 inch AMOLED, 144Hz",
      os: "Android 14 with Realme UI 5.0",
      brand: "Realme"
    },
    reviews: [
      {
        id: 1,
        user: "Taylor S.",
        comment: "Amazing value for money. Perfect for young users who want flagship features at a reasonable price.",
        date: "2023-07-14",
        rating: 5
      },
      {
        id: 2,
        user: "Kevin M.",
        comment: "Fast charging and great gaming performance. Realme is really growing on me.",
        date: "2023-08-03",
        rating: 4
      }
    ]
  },
  {
    id: 29,
    title: "OnePlus 12",
    price: 799.99,
    description: "Clean, fast software with flagship-level hardware at a competitive price. OnePlus continues its 'flagship killer' approach with excellent performance and user experience.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1560671563-7a75c5fccef9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1560671563-7a75c5fccef9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1480694313141-fce5e697ee25?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    rating: {
      rate: 4.7,
      count: 278
    },
    featured: true,
    specs: {
      processor: "Snapdragon 8 Gen 3",
      ram: "16GB",
      storage: "256GB",
      camera: "Triple Camera: 50MP + 48MP + 64MP (Hasselblad tuning)",
      battery: "5400mAh",
      display: "6.82 inch LTPO AMOLED, 120Hz",
      os: "Android 14 with OxygenOS 14",
      brand: "OnePlus"
    },
    reviews: [
      {
        id: 1,
        user: "Patricia L.",
        comment: "OxygenOS is still one of the cleanest Android experiences. Performance is top-notch!",
        date: "2023-02-18",
        rating: 5
      },
      {
        id: 2,
        user: "Nathan D.",
        comment: "Great flagship killer. OnePlus continues to deliver excellent value for money.",
        date: "2023-03-05",
        rating: 5
      }
    ]
  },
  {
    id: 31,
    title: "Motorola Edge 50 Pro",
    price: 599.99,
    description: "Clean Android experience with minimal bloatware and solid mid-range specifications. Motorola continues to offer reliable phones with good performance at reasonable prices.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1533228100845-08145b01de14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1533228100845-08145b01de14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1557244056-110c3f73a350?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    rating: {
      rate: 4.2,
      count: 145
    },
    specs: {
      processor: "Snapdragon 7 Gen 3",
      ram: "8GB",
      storage: "256GB",
      camera: "Triple Camera: 50MP + 13MP + 10MP",
      battery: "4600mAh",
      display: "6.7 inch pOLED, 120Hz",
      os: "Android 14 (near-stock)",
      brand: "Motorola"
    },
    reviews: [
      {
        id: 1,
        user: "Rachel K.",
        comment: "Clean Android with useful Motorola additions. Great mid-range option!",
        date: "2023-09-12",
        rating: 4
      },
      {
        id: 2,
        user: "Steven H.",
        comment: "Solid performance for the price. The lack of bloatware is refreshing.",
        date: "2023-10-05",
        rating: 4
      }
    ]
  },
  {
    id: 33,
    title: "Google Pixel 8 Pro",
    price: 899.99,
    description: "Pure Android experience with exceptional camera capabilities and deep AI integration. Google's flagship showcases the best of Android with industry-leading computational photography.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607936854279-55e8a4c64888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1592286927505-1def25115d1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    rating: {
      rate: 4.8,
      count: 320
    },
    featured: true,
    specs: {
      processor: "Google Tensor G3",
      ram: "12GB",
      storage: "256GB",
      camera: "Triple Camera: 50MP + 48MP + 48MP with advanced computational photography",
      battery: "5050mAh",
      display: "6.7 inch LTPO OLED, 120Hz",
      os: "Android 14 (Pure Google)",
      brand: "Google"
    },
    reviews: [
      {
        id: 1,
        user: "Amanda W.",
        comment: "The camera system is unbelievable. Google's AI features make a huge difference in photo quality.",
        date: "2023-11-15",
        rating: 5
      },
      {
        id: 2,
        user: "David M.",
        comment: "Clean Android experience with amazing AI features. The best Android phone for photography.",
        date: "2023-12-07",
        rating: 5
      },
      {
        id: 3,
        user: "Sophie L.",
        comment: "Long-term software support and regular feature drops make this a great investment.",
        date: "2024-01-22",
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
      product.category.toLowerCase().includes(searchTerm) ||
      (product.specs?.brand && product.specs.brand.toLowerCase().includes(searchTerm))
  );
}
