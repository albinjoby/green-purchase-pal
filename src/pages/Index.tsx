
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";
import { ArrowRight, Leaf, Truck, Recycle, BarChart3 } from "lucide-react";

const Index = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredProducts = products.filter(product => product.featured).slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Products */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
              <p className="text-muted-foreground">
                Our selection of sustainable products with the lowest environmental impact.
              </p>
            </div>
            <Link 
              to="/products" 
              className="inline-flex items-center text-eco-600 hover:text-eco-700 mt-4 md:mt-0 font-medium"
            >
              View All Products
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <div 
                key={product.id} 
                className="animate-fade-in opacity-0"
                style={{ animationDelay: `${parseInt(product.id) * 0.2}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose E-Shopy?</h2>
            <p className="text-muted-foreground">
              We're committed to making sustainable shopping easy, transparent, and impactful.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card rounded-xl p-6 border border-border flex flex-col items-center text-center animate-slide-up opacity-0" style={{ animationDelay: "0.1s" }}>
              <div className="w-14 h-14 rounded-full bg-eco-100 flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-eco-600" />
              </div>
              <h3 className="text-xl font-medium mb-2">Eco-Friendly</h3>
              <p className="text-muted-foreground">
                All products are carefully vetted for their environmental impact and sustainability.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 border border-border flex flex-col items-center text-center animate-slide-up opacity-0" style={{ animationDelay: "0.2s" }}>
              <div className="w-14 h-14 rounded-full bg-eco-100 flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-eco-600" />
              </div>
              <h3 className="text-xl font-medium mb-2">Carbon Tracking</h3>
              <p className="text-muted-foreground">
                We calculate and display the carbon footprint for every product we sell.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 border border-border flex flex-col items-center text-center animate-slide-up opacity-0" style={{ animationDelay: "0.3s" }}>
              <div className="w-14 h-14 rounded-full bg-eco-100 flex items-center justify-center mb-4">
                <Truck className="h-6 w-6 text-eco-600" />
              </div>
              <h3 className="text-xl font-medium mb-2">Carbon-Neutral Shipping</h3>
              <p className="text-muted-foreground">
                We offset the carbon emissions from all of our shipments at no extra cost to you.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 border border-border flex flex-col items-center text-center animate-slide-up opacity-0" style={{ animationDelay: "0.4s" }}>
              <div className="w-14 h-14 rounded-full bg-eco-100 flex items-center justify-center mb-4">
                <Recycle className="h-6 w-6 text-eco-600" />
              </div>
              <h3 className="text-xl font-medium mb-2">Circular Economy</h3>
              <p className="text-muted-foreground">
                We promote products designed for longevity, repairability, and recyclability.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="leafPattern" patternUnits="userSpaceOnUse" width="80" height="80" patternTransform="rotate(45)">
                <path d="M20,10 Q30,0 40,10 Q50,20 40,30 Q30,40 20,30 Q10,20 20,10 Z" fill="currentColor" className="text-eco-600" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#leafPattern)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 animate-slide-up opacity-0">
              Join the Sustainable Shopping Movement
            </h2>
            <p className="text-lg text-muted-foreground mb-8 animate-slide-up opacity-0" style={{ animationDelay: "0.1s" }}>
              Together, we can make a difference. Start your sustainable shopping journey today.
            </p>
            <Link 
              to="/products" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-eco-600 text-white font-medium hover:bg-eco-700 transition-colors animate-slide-up opacity-0"
              style={{ animationDelay: "0.2s" }}
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
