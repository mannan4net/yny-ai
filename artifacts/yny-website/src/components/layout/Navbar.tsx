import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoSrc from "/yny-logo.png";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md border-b border-border shadow-sm" : "bg-white border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src={logoSrc}
            alt="YnY Platforms"
            className="h-10 w-10 object-contain transition-transform group-hover:scale-105"
          />
          <span className="text-2xl font-bold tracking-tight text-primary">YnY</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === link.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2 rounded-none">
            Schedule Consultation
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-border shadow-lg py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-base font-medium py-2 ${
                location === link.href ? "text-primary" : "text-muted-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="w-full mt-2 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Schedule Consultation
          </Link>
        </div>
      )}
    </header>
  );
}