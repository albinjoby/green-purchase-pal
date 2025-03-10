
import { useState } from "react";
import { Link } from "react-router-dom";
import { type Product } from "@/lib/data";
import SustainabilityScore from "./SustainabilityScore";
import { motion } from "framer-motion";
import { ShoppingCart, Leaf } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-card overflow-hidden rounded-xl border border-border transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square overflow-hidden relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-2 right-2">
          <SustainabilityScore score={product.sustainabilityScore} size="sm" />
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-lg leading-tight transition-colors group-hover:text-eco-600">
            {product.name}
          </h3>
        </div>
        
        <div className="flex justify-between items-center">
          <p className="font-bold">${product.price.toFixed(2)}</p>
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <Leaf className="h-4 w-4 text-eco-500" />
            <span>{product.carbonFootprint} kg CO₂</span>
          </div>
        </div>
      </div>
      
      <div className={`absolute inset-0 bg-card/80 backdrop-blur-sm flex flex-col justify-center items-center p-4 transition-opacity duration-300 ${
        isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}>
        <p className="text-center mb-4 line-clamp-3">{product.description}</p>
        <div className="flex space-x-2">
          <Link
            to={`/products/${product.id}`}
            className="px-4 py-2 bg-eco-600 text-white rounded-md hover:bg-eco-700 transition-colors"
          >
            View Details
          </Link>
          <button 
            className="p-2 bg-secondary rounded-md hover:bg-secondary/80 transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
