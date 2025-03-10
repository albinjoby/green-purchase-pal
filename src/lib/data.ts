
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
    name: "Eco-Friendly Water Bottle",
    description: "Reusable stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours. Made from recycled materials and is 100% recyclable.",
    price: 35,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    category: "Home",
    sustainabilityScore: 9.5,
    carbonFootprint: 2.3,
    materials: ["Recycled Stainless Steel", "BPA-free Plastic"],
    featured: true
  },
  {
    id: "2",
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
    id: "3",
    name: "Bamboo Toothbrush Set",
    description: "Pack of 4 biodegradable toothbrushes with bamboo handles and plant-based bristles.",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    category: "Personal Care",
    sustainabilityScore: 9.8,
    carbonFootprint: 0.8,
    materials: ["Bamboo", "Plant-based Nylon"],
    featured: true
  },
  {
    id: "4",
    name: "Solar Power Bank",
    description: "10,000mAh power bank with built-in solar panel for eco-friendly charging on the go.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1593941707882-a5bfcf2dd2a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    category: "Electronics",
    sustainabilityScore: 7.9,
    carbonFootprint: 6.2,
    materials: ["Recycled Plastic", "Silicon Solar Cells", "Lithium Ion Battery"]
  },
  {
    id: "5",
    name: "Recycled Paper Notebook",
    description: "A5 notebook made from 100% post-consumer recycled paper with soy-based ink printing.",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    category: "Office",
    sustainabilityScore: 9.2,
    carbonFootprint: 1.5,
    materials: ["Recycled Paper", "Soy-based Ink"]
  },
  {
    id: "6",
    name: "Plant-Based Cleaning Kit",
    description: "Set of 3 all-purpose cleaners made from plant-based ingredients in reusable glass bottles.",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    category: "Home",
    sustainabilityScore: 9.6,
    carbonFootprint: 1.8,
    materials: ["Plant Extracts", "Essential Oils", "Glass", "Silicone"]
  },
  {
    id: "7",
    name: "Biodegradable Phone Case",
    description: "Protective phone case made from biodegradable materials that will break down safely after disposal.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1622467827417-bbe2237067a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    category: "Electronics",
    sustainabilityScore: 8.5,
    carbonFootprint: 3.2,
    materials: ["Bioplastic", "Wheat Straw"]
  },
  {
    id: "8",
    name: "Recycled Wool Blanket",
    description: "Cozy blanket made from recycled wool and organic cotton, perfect for chilly evenings.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1580301762395-83a1d3207511?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    category: "Home",
    sustainabilityScore: 8.8,
    carbonFootprint: 5.4,
    materials: ["Recycled Wool", "Organic Cotton"]
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "home", name: "Home" },
  { id: "clothing", name: "Clothing" },
  { id: "personal-care", name: "Personal Care" },
  { id: "electronics", name: "Electronics" },
  { id: "office", name: "Office" }
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
