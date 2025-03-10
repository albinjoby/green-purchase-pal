
import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { products, categories, filterByCategory, sortProducts } from "@/lib/data";
import { ChevronDown, Search, SlidersHorizontal } from "lucide-react";

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter and sort products when dependencies change
  useEffect(() => {
    let result = [...products];
    
    // Apply category filter
    if (activeCategory !== "all") {
      result = filterByCategory(result, activeCategory);
    }
    
    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }
    
    // Apply sorting
    if (sortBy !== "default") {
      result = sortProducts(result, sortBy);
    }
    
    setFilteredProducts(result);
  }, [activeCategory, sortBy, searchQuery]);

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 md:px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 animate-slide-down opacity-0">Sustainable Products</h1>
          <p className="text-muted-foreground animate-slide-down opacity-0" style={{ animationDelay: "0.1s" }}>
            Browse our curated selection of eco-friendly products
          </p>
        </div>
        
        {/* Search & Filters */}
        <div className="mb-8 animate-slide-down opacity-0" style={{ animationDelay: "0.2s" }}>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="search"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-eco-600 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <select
                  className="appearance-none w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-eco-600 focus:border-transparent pr-10"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="default">Sort by</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="sustainability">Highest Eco Score</option>
                  <option value="carbon-footprint">Lowest Carbon Footprint</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 pointer-events-none" />
              </div>
              
              <button
                className="inline-flex items-center justify-center px-4 py-2 border border-border rounded-lg lg:hidden"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Category Filters - Desktop */}
          <div className="hidden lg:block animate-slide-right opacity-0" style={{ animationDelay: "0.3s" }}>
            <div className="bg-card rounded-lg border border-border p-4">
              <h3 className="font-medium text-lg mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                      activeCategory === category.id
                        ? "bg-eco-100 text-eco-800 font-medium"
                        : "hover:bg-secondary"
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Category Filters - Mobile */}
          {isFilterOpen && (
            <div className="lg:hidden mb-4 animate-slide-down opacity-0">
              <div className="bg-card rounded-lg border border-border p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-lg">Categories</h3>
                  <button onClick={() => setIsFilterOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className={`px-3 py-2 rounded-md text-sm transition-colors ${
                        activeCategory === category.id
                          ? "bg-eco-100 text-eco-800 font-medium"
                          : "bg-secondary hover:bg-secondary/80"
                      }`}
                      onClick={() => {
                        setActiveCategory(category.id);
                        setIsFilterOpen(false);
                      }}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Product Grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="animate-fade-in opacity-0"
                    style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your filters or search query
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
