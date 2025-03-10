
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  sustainabilityScore: number;
  carbonFootprint: number;
  materials: string[];
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Organic Cotton T-Shirt",
    description: "Classic fit t-shirt made from 100% organic cotton. Grown without harmful pesticides and chemicals.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    category: "Clothing",
    sustainabilityScore: 8.7,
    carbonFootprint: 4.1,
    materials: ["Organic Cotton"],
    featured: true
  },
  {
    id: "2",
    name: "Recycled Denim Jeans",
    description: "Stylish jeans made from recycled denim and organic cotton blend. Helps reduce textile waste.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    category: "Clothing",
    sustainabilityScore: 7.9,
    carbonFootprint: 5.6,
    materials: ["Recycled Denim", "Organic Cotton"],
    featured: true
  },
  {
    id: "3",
    name: "Sustainable Wool Sweater",
    description: "Cozy sweater made from ethically sourced wool with a focus on animal welfare and sustainable farming.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    category: "Clothing",
    sustainabilityScore: 8.2,
    carbonFootprint: 4.8,
    materials: ["Ethical Wool", "Recycled Polyester"],
    featured: true
  },
  {
    id: "4",
    name: "Vegan Leather Jacket",
    description: "Stylish leather alternative jacket made from plant-based materials with a lower environmental impact.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    category: "Clothing",
    sustainabilityScore: 7.5,
    carbonFootprint: 6.7,
    materials: ["Plant-based Leather", "Organic Cotton Lining"],
    featured: false
  },
  {
    id: "5",
    name: "Hemp Canvas Sneakers",
    description: "Casual sneakers made from durable hemp canvas and natural rubber. Biodegradable and stylish.",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    category: "Footwear",
    sustainabilityScore: 9.0,
    carbonFootprint: 3.2,
    materials: ["Hemp Canvas", "Natural Rubber", "Organic Cotton"],
    featured: false
  },
  {
    id: "6",
    name: "Bamboo Fiber Socks",
    description: "Ultra-soft socks made from bamboo fiber that requires less water and no pesticides to grow.",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    category: "Clothing",
    sustainabilityScore: 9.4,
    carbonFootprint: 1.9,
    materials: ["Bamboo Fiber", "Organic Cotton"],
    featured: false
  },
  {
    id: "7",
    name: "Recycled Polyester Backpack",
    description: "Durable backpack made from recycled plastic bottles with waterproof finish.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    category: "Accessories",
    sustainabilityScore: 8.1,
    carbonFootprint: 5.0,
    materials: ["Recycled Polyester", "Organic Cotton Trim"],
    featured: false
  },
  {
    id: "8",
    name: "Tencel Lyocell Dress",
    description: "Flowing summer dress made from Tencel, a sustainable fabric derived from wood pulp from managed forests.",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1612722432474-b971cdcea546?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    category: "Clothing",
    sustainabilityScore: 8.9,
    carbonFootprint: 3.5,
    materials: ["Tencel Lyocell", "Organic Cotton"],
    featured: false
  },
  {
    id: "9",
    name: "Cork Wallet",
    description: "Slim, durable wallet made from sustainable cork - a renewable resource that doesn't require tree cutting.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1606922130735-261735e1b48c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    category: "Accessories",
    sustainabilityScore: 9.7,
    carbonFootprint: 1.2,
    materials: ["Cork", "Organic Cotton"],
    featured: false
  },
  {
    id: "10",
    name: "Linen Button-Up Shirt",
    description: "Breathable linen shirt that requires less water and energy to produce than conventional cotton.",
    price: 74.99,
    image: "https://images.unsplash.com/photo-1598961942613-ba897716405b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    category: "Clothing",
    sustainabilityScore: 8.6,
    carbonFootprint: 3.9,
    materials: ["Linen", "Corozo Nut Buttons"],
    featured: false
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "clothing", name: "Clothing" },
  { id: "footwear", name: "Footwear" },
  { id: "accessories", name: "Accessories" }
];

export const filterByCategory = (products: Product[], category: string): Product[] => {
  if (category === "all") return products;
  return products.filter((product) => 
    product.category.toLowerCase() === category.toLowerCase()
  );
};

export const sortProducts = (products: Product[], sortBy: string): Product[] => {
  const productsCopy = [...products];
  
  switch (sortBy) {
    case "price-low":
      return productsCopy.sort((a, b) => a.price - b.price);
    case "price-high":
      return productsCopy.sort((a, b) => b.price - a.price);
    case "sustainability":
      return productsCopy.sort((a, b) => b.sustainabilityScore - a.sustainabilityScore);
    case "carbon-footprint":
      return productsCopy.sort((a, b) => a.carbonFootprint - b.carbonFootprint);
    default:
      return productsCopy;
  }
};

// Get more sustainable alternatives to a product
export const getLowerImpactAlternatives = (product: Product): Product[] => {
  if (!product) return [];
  
  return products
    .filter(p => 
      // Same category but different product
      p.id !== product.id && 
      p.category === product.category &&
      // Better or equal sustainability score
      p.sustainabilityScore >= product.sustainabilityScore
    )
    .sort((a, b) => b.sustainabilityScore - a.sustainabilityScore)
    .slice(0, 3);
};

// Get similar products with lower scores for comparison
export const getSimilarProducts = (product: Product): Product[] => {
  if (!product) return [];
  
  return products
    .filter(p => 
      // Same category but different product
      p.id !== product.id && 
      p.category === product.category
    )
    .sort((a, b) => {
      // First prioritize products with lower scores
      if (a.sustainabilityScore < product.sustainabilityScore && 
          b.sustainabilityScore >= product.sustainabilityScore) {
        return -1;
      }
      if (b.sustainabilityScore < product.sustainabilityScore && 
          a.sustainabilityScore >= product.sustainabilityScore) {
        return 1;
      }
      // Then sort by score difference (closest first)
      return Math.abs(a.sustainabilityScore - product.sustainabilityScore) - 
             Math.abs(b.sustainabilityScore - product.sustainabilityScore);
    })
    .slice(0, 3);
};
