"use client";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Shapes } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#integrations", label: "Integrations" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-gray-200/80"
            : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <Shapes className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                SupportHub
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative group px-3 py-2 text-gray-600 font-medium hover:text-gray-900 transition-colors duration-300"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center" />
                </Link>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/login"
                className="font-semibold text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                Log In
              </Link>
              <button className="group relative inline-flex items-center justify-center gap-2 bg-gray-900 text-white font-semibold py-2.5 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                <span>Start Free Trial</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-7 h-7" />
                ) : (
                  <Menu className="w-7 h-7" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 pt-28 pb-8 flex flex-col h-full">
          <nav className="flex flex-col items-center text-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl text-gray-800 font-semibold transition-all duration-500 ease-out"
                style={{
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
                  opacity: isMenuOpen ? 1 : 0,
                  transitionDelay: `${100 + index * 50}ms`,
                }}
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto w-full border-t border-gray-200 pt-6 flex flex-col items-center gap-4">
            <Link
              href="/login"
              className="text-xl text-gray-800 font-semibold transition-all duration-500 ease-out"
              style={{
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
                opacity: isMenuOpen ? 1 : 0,
                transitionDelay: '350ms',
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Log In
            </Link>
            <button 
              className="group w-full max-w-xs relative inline-flex items-center justify-center gap-2 bg-gray-900 text-white font-semibold py-3 px-6 rounded-full text-lg transition-all duration-500 ease-out"
              style={{
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
                opacity: isMenuOpen ? 1 : 0,
                transitionDelay: '400ms',
              }}
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;