import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-card/95 backdrop-blur-md shadow-soft py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className={`text-2xl font-display font-bold transition-colors ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}>
              edu<span className="text-primary">Mentor</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#curriculum" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-foreground/70" : "text-primary-foreground/80"
              }`}
            >
              Curriculum
            </a>
            <a 
              href="#selection" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-foreground/70" : "text-primary-foreground/80"
              }`}
            >
              Selection
            </a>
            <a 
              href="#testimonials" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-foreground/70" : "text-primary-foreground/80"
              }`}
            >
              Testimonials
            </a>
            <a 
              href="#faq" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-foreground/70" : "text-primary-foreground/80"
              }`}
            >
              FAQ
            </a>
            <Button 
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            >
              Apply Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-card shadow-elevated border-t border-border animate-fade-in">
            <nav className="flex flex-col p-6 gap-4">
              <a 
                href="#curriculum" 
                className="text-foreground/80 font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Curriculum
              </a>
              <a 
                href="#selection" 
                className="text-foreground/80 font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Selection
              </a>
              <a 
                href="#testimonials" 
                className="text-foreground/80 font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#faq" 
                className="text-foreground/80 font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium mt-2">
                Apply Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;