"use client"
import { Zap } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true if user scrolls down more than 10px
      setIsScrolled(window.scrollY > 10);
    };

    // Add event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/50 backdrop-blur-lg border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-5 flex justify-between items-center max-w-7xl">
        <div className="flex items-center gap-3">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-primary rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative bg-primary p-2 rounded-full">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>
          <span className="text-2xl font-bold text-black tracking-wide">
            AI Agent
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-lg">
          <a
            href="#features"
            className="text-black hover:text-gray-700 transition-colors duration-300"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-black hover:text-gray-700 transition-colors duration-300"
          >
            Pricing
          </a>
          <a
            href="#contact"
            className="text-black hover:text-gray-700 transition-colors duration-300"
          >
            Contact
          </a>
        </nav>
        <a
          href="#pricing"
          className="group relative bg-white text-black font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg overflow-hidden hidden md:inline-block"
        >
          <span className="absolute top-0 left-0 w-0 h-full bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
          <span className="relative group-hover:text-white">Get Started</span>
        </a>
      </div>
    </header>
  );
};

export default Header;