import { Instagram, Linkedin, Twitter, Zap, Send } from "lucide-react";
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0D1117] text-white pt-20 overflow-hidden">
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section 1: Pre-Footer CTA */}
        <div className="text-center pb-16 border-b border-white/10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tighter">
            Start building the future today.
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Experience the power of AI and transform your customer interactions forever.
          </p>
          <a
            href="#pricing"
            className="group relative inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg overflow-hidden"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-20"></span>
            <span className="relative">Get Started For Free</span>
          </a>
        </div>

        {/* Section 2: Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12">
          {/* Column 1: Brand & Social */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary p-2 rounded-full">
                <Zap className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="text-3xl font-bold">AI Agent</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Revolutionizing customer interactions with cutting-edge AI-powered solutions.
            </p>
            <div className="flex items-center gap-5 mt-8">
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-primary hover:scale-110 transition-all duration-300">
                <Twitter className="w-7 h-7" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-primary hover:scale-110 transition-all duration-300">
                <Linkedin className="w-7 h-7" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-primary hover:scale-110 transition-all duration-300">
                <Instagram className="w-7 h-7" />
              </a>
            </div>
          </div>

          {/* Column 2: Product Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Updates</a></li>
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Join our newsletter to get the latest updates.</p>
            <form className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border border-gray-700 text-white rounded-full py-3 pl-4 pr-12 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <button type="submit" aria-label="Subscribe" className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary p-2 rounded-full hover:bg-primary/80 transition-colors">
                <Send className="w-5 h-5 text-primary-foreground" />
              </button>
            </form>
          </div>
        </div>

        {/* Section 3: Bottom Bar */}
        <div className="mt-8 border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} AI Agent. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors text-sm">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors text-sm">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;