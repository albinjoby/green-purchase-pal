
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Search, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glassmorphism py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold text-foreground flex items-center space-x-2"
            onClick={closeMenu}
          >
            <span className="text-eco-600">E</span>
            <span>-Shopy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors hover:text-eco-600 ${
                location.pathname === "/" ? "text-eco-600" : ""
              }`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`transition-colors hover:text-eco-600 ${
                location.pathname === "/products" ? "text-eco-600" : ""
              }`}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors hover:text-eco-600 ${
                location.pathname === "/about" ? "text-eco-600" : ""
              }`}
            >
              About
            </Link>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              className="p-2 rounded-full hover:bg-secondary transition-colors" 
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button 
              className="p-2 rounded-full hover:bg-secondary transition-colors" 
              aria-label="Shopping cart"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glassmorphism animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`transition-colors hover:text-eco-600 ${
                  location.pathname === "/" ? "text-eco-600" : ""
                }`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className={`transition-colors hover:text-eco-600 ${
                  location.pathname === "/products" ? "text-eco-600" : ""
                }`}
                onClick={closeMenu}
              >
                Products
              </Link>
              <Link 
                to="/about" 
                className={`transition-colors hover:text-eco-600 ${
                  location.pathname === "/about" ? "text-eco-600" : ""
                }`}
                onClick={closeMenu}
              >
                About
              </Link>
              <div className="flex items-center space-x-4 pt-2">
                <button 
                  className="p-2 rounded-full hover:bg-secondary transition-colors" 
                  aria-label="Search"
                >
                  <Search className="h-5 w-5" />
                </button>
                <button 
                  className="p-2 rounded-full hover:bg-secondary transition-colors" 
                  aria-label="Shopping cart"
                >
                  <ShoppingCart className="h-5 w-5" />
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
