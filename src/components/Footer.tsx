"use client";
import React from 'react';
import { ArrowRight, ArrowUp, Twitter, Linkedin, Github, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// --- Back to Top Button Component ---
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-all duration-300"
          aria-label="Go to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const Footer: React.FC = () => {
  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Integrations", href: "#" },
      { name: "Updates", href: "#" },
    ],
    Company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact", href: "#contact" },
    ],
    Resources: [
      { name: "Help Center", href: "#" },
      { name: "API Docs", href: "#" },
      { name: "System Status", href: "#" },
      { name: "Community", href: "#" },
    ],
    Legal: [
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "#" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#" },
    { icon: <Github className="w-5 h-5" />, href: "#" },
  ];

  return (
    <footer className="relative bg-gray-950 text-white pt-32 overflow-hidden">
      {/* Curved SVG Separator */}
      <div className="absolute top-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L80,80C160,96,320,128,480,117.3C640,107,800,53,960,37.3C1120,21,1280,43,1360,53.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
      </div>

       {/* Background Aurora */}
      <div className="absolute inset-0 z-0 bg-gradient-radial from-blue-900/30 via-purple-900/20 to-transparent blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Top Section: CTA */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 mt-14">
            Start building the future of support.
          </h2>
          <button className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/20">
            <span>Start Your Free Trial</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        <hr className="border-t border-gray-700/50 mb-16" />

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-gray-300 mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="py-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} SupportHub, Inc. All rights reserved.</p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-green-400 mt-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>All systems operational</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.href} className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <BackToTopButton />
    </footer>
  );
};

export default Footer;