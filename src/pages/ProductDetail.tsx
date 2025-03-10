
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products, getLowerImpactAlternatives, getSimilarProducts } from "@/lib/data";
import SustainabilityScore from "@/components/SustainabilityScore";
import { ArrowLeft, ShoppingCart, Leaf, Share2, Heart, BarChart3, Truck, Package, ThumbsUp } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(products.find(p => p.id === id));
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product?.image || "");
  
  // Get both better alternatives and similar products with lower scores
  const betterAlternatives = product ? getLowerImpactAlternatives(product) : [];
  const similarProducts = product ? getSimilarProducts(product) : [];
  
  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setProduct(products.find(p => p.id === id));
    if (product) {
      setActiveImage(product.image);
    }
  }, [id]);

  const handleAddToCart = () => {
    toast.success(`Added ${quantity} × ${product?.name} to your cart`, {
      description: "Your selection has been added to the cart",
      action: {
        label: "View Cart",
        onClick: () => console.log("View cart clicked")
      }
    });
  };

  if (!product) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="mb-6 text-muted-foreground">
            The product you are looking for does not exist or has been removed.
          </p>
          <Link 
            to="/products" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-eco-600 text-white font-medium hover:bg-eco-700 transition-colors"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 md:px-6 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 animate-fade-in opacity-0">
          <Link 
            to="/products" 
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </div>
        
        {/* Product Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4 animate-slide-right opacity-0">
            <div className="aspect-square overflow-hidden rounded-xl border border-border bg-white">
              <img 
                src={activeImage} 
                alt={product.name} 
                className="w-full h-full object-contain p-4"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              <button 
                className={`aspect-square rounded-md overflow-hidden border ${
                  activeImage === product.image ? "border-eco-600" : "border-border"
                }`}
                onClick={() => setActiveImage(product.image)}
              >
                <img 
                  src={product.image} 
                  alt={`${product.name} thumbnail`} 
                  className="w-full h-full object-cover"
                />
              </button>
              {/* Additional image thumbnails would go here */}
            </div>
          </div>
          
          {/* Product Info */}
          <div className="animate-slide-left opacity-0">
            <div className="flex items-center mb-2">
              <Badge variant="outline" className="bg-eco-50 text-eco-800 border-eco-200">
                {product.category}
              </Badge>
              <div className="ml-auto flex items-center space-x-2">
                <button className="p-2 text-muted-foreground hover:text-foreground rounded-full">
                  <Share2 className="h-5 w-5" />
                </button>
                <button className="p-2 text-muted-foreground hover:text-foreground rounded-full">
                  <Heart className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
              <div className="ml-auto">
                <SustainabilityScore score={product.sustainabilityScore} size="lg" />
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6">
              {product.description}
            </p>
            
            {/* Sustainability Info */}
            <div className="bg-secondary/50 rounded-lg p-4 mb-6">
              <h3 className="font-medium mb-2 flex items-center">
                <Leaf className="h-5 w-5 text-eco-600 mr-2" />
                Environmental Impact
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <BarChart3 className="h-4 w-4 text-eco-600 mr-2" />
                  <span className="text-sm">
                    <span className="font-medium">Carbon Footprint:</span> {product.carbonFootprint} kg CO₂
                  </span>
                </div>
                <div className="flex items-center">
                  <Package className="h-4 w-4 text-eco-600 mr-2" />
                  <span className="text-sm">
                    <span className="font-medium">Materials:</span> Sustainable
                  </span>
                </div>
              </div>
            </div>
            
            {/* Quantity Selector */}
            <div className="flex items-center mb-6">
              <span className="mr-3 font-medium">Quantity:</span>
              <div className="flex items-center border border-border rounded-md">
                <button 
                  className="px-3 py-1 text-xl"
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="px-4 py-1 border-l border-r border-border">
                  {quantity}
                </span>
                <button 
                  className="px-3 py-1 text-xl"
                  onClick={() => setQuantity(prev => prev + 1)}
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                className="flex-1 bg-eco-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-eco-700 transition-colors flex items-center justify-center"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </button>
              <button className="flex-1 bg-secondary text-foreground font-medium py-3 px-6 rounded-lg hover:bg-secondary/80 transition-colors">
                Buy Now
              </button>
            </div>
            
            {/* Shipping Info */}
            <div className="flex items-center text-sm text-muted-foreground">
              <Truck className="h-4 w-4 mr-2" />
              <span>Carbon-neutral shipping available</span>
            </div>
          </div>
        </div>
        
        {/* Material Details */}
        <div className="mb-16 animate-slide-up opacity-0" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-2xl font-bold mb-4">Materials</h2>
          <div className="bg-card rounded-lg border border-border p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2">Sustainable Materials</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {product.materials.map((material, index) => (
                    <li key={index}>{material}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Environmental Benefits</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Reduced carbon footprint compared to conventional alternatives</li>
                  <li>Made with renewable or recycled materials</li>
                  <li>Designed for longevity and recyclability</li>
                  <li>Produced using eco-friendly manufacturing processes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Better Alternatives Section */}
        {betterAlternatives.length > 0 && (
          <div className="mb-16 animate-slide-up opacity-0" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold">More Sustainable Options</h2>
              <ThumbsUp className="ml-2 h-5 w-5 text-eco-600" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {betterAlternatives.map((alternative) => (
                <Link key={alternative.id} to={`/products/${alternative.id}`}>
                  <div className="group relative bg-card overflow-hidden rounded-xl border border-eco-200 transition-all duration-300 hover:shadow-lg hover:border-eco-400">
                    <div className="absolute top-0 left-0 z-10 m-2">
                      <Badge className="bg-eco-500 hover:bg-eco-600">Eco Swap Choice</Badge>
                    </div>
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={alternative.image} 
                        alt={alternative.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-2 right-2">
                        <SustainabilityScore score={alternative.sustainabilityScore} size="sm" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium leading-tight transition-colors group-hover:text-eco-600">
                        {alternative.name}
                      </h3>
                      <div className="flex justify-between items-center mt-2">
                        <p className="font-bold">${alternative.price.toFixed(2)}</p>
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <Leaf className="h-4 w-4 text-eco-500" />
                          <span>{alternative.carbonFootprint} kg CO₂</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        
        {/* Similar Products Section */}
        {similarProducts.length > 0 && (
          <div className="animate-slide-up opacity-0" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-2xl font-bold mb-4">Compare With Similar Items</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarProducts.map((similar) => (
                <Link key={similar.id} to={`/products/${similar.id}`}>
                  <div className="group relative bg-card overflow-hidden rounded-xl border border-border transition-all duration-300 hover:shadow-lg">
                    {similar.sustainabilityScore < product.sustainabilityScore && (
                      <div className="absolute top-0 left-0 z-10 m-2">
                        <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                          Higher Impact
                        </Badge>
                      </div>
                    )}
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={similar.image} 
                        alt={similar.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-2 right-2">
                        <SustainabilityScore score={similar.sustainabilityScore} size="sm" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium leading-tight transition-colors group-hover:text-eco-600">
                        {similar.name}
                      </h3>
                      <div className="flex justify-between items-center mt-2">
                        <p className="font-bold">${similar.price.toFixed(2)}</p>
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <Leaf className="h-4 w-4 text-eco-500" />
                          <span>{similar.carbonFootprint} kg CO₂</span>
                        </div>
                      </div>
                      <div className="mt-2 text-sm">
                        {similar.sustainabilityScore < product.sustainabilityScore ? (
                          <div className="text-orange-600 flex items-center">
                            <span>{(product.sustainabilityScore - similar.sustainabilityScore).toFixed(1)} points lower eco score</span>
                          </div>
                        ) : (
                          <div className="text-eco-600 flex items-center">
                            <span>{(similar.sustainabilityScore - product.sustainabilityScore).toFixed(1)} points higher eco score</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
