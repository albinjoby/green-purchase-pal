
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div 
        className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&q=80')] 
        bg-cover bg-center bg-no-repeat opacity-10"
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 max-w-lg">
            <div className="inline-flex items-center rounded-full border border-eco-200 bg-eco-50 px-3 py-1 text-sm text-eco-800 w-fit animate-fade-in opacity-0">
              <span className="font-medium">Sustainable Shopping</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter animate-slide-up opacity-0 delay-100">
              Shop with <span className="text-eco-600">Purpose</span>, 
              <br /> Impact with <span className="text-eco-600">Choice</span>
            </h1>
            
            <p className="text-lg text-muted-foreground animate-slide-up opacity-0 delay-200">
              Discover eco-friendly products that reduce your carbon footprint. 
              Make conscious choices for a sustainable future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up opacity-0 delay-300">
              <Link 
                to="/products" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-eco-600 text-white font-medium hover:bg-eco-700 transition-colors"
              >
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                to="/about" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-secondary text-foreground font-medium hover:bg-secondary/80 transition-colors"
              >
                Learn More
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-6 animate-slide-up opacity-0 delay-400">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-eco-600">100+</span>
                <span className="text-sm text-muted-foreground">Eco Products</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-eco-600">5k+</span>
                <span className="text-sm text-muted-foreground">Happy Customers</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-eco-600">10k+</span>
                <span className="text-sm text-muted-foreground">Carbon Saved</span>
              </div>
            </div>
          </div>
          
          <div className="relative aspect-square md:aspect-auto animate-fade-in opacity-0 delay-500">
            <img
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Sustainable Product"
              className="rounded-3xl object-cover w-full h-full shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-border animate-slide-up opacity-0 delay-600">
              <div className="flex items-center space-x-2">
                <div className="bg-eco-100 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-eco-600">
                    <path d="M12 2a9 9 0 0 0-9 9c0 4.17 2.84 7.67 6.69 8.69a.5.5 0 0 0 .62-.45V18.2a.5.5 0 0 0-.34-.48C7.13 16.9 5.5 14.44 5.5 11.5a6.5 6.5 0 1 1 13 0c0 2.94-1.66 5.4-4.02 6.22a.5.5 0 0 0-.33.48v1.04a.5.5 0 0 0 .62.45c3.85-1.02 6.69-4.52 6.69-8.69a9 9 0 0 0-9-9z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Carbon Footprint</p>
                  <p className="text-xs text-muted-foreground">73% Less Than Average</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
