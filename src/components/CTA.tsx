"use client";
import React from 'react';
import { ArrowRight, TrendingUp } from "lucide-react";
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 bg-gray-950 text-white overflow-hidden">
      {/* Background Aurora Gradients */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-gradient-radial from-blue-600/20 to-transparent blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[50rem] h-[50rem] bg-gradient-radial from-purple-600/20 to-transparent blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 15, stiffness: 100 } } }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
          >
            <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
              Unlock the Future of Customer Support
            </span>
          </motion.h2>

          <motion.p 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 15, stiffness: 100 } } }}
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-10"
          >
            Join thousands of smart businesses who have transformed their customer support. Get started in minutes and see the results from day one.
          </motion.p>
          
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 15, stiffness: 100 } } }}>
            <button className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-purple-500/30">
              <span>Start Your Free Trial</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <p className="text-sm text-gray-500 mt-4">No credit card required ✓ 14-day free trial</p>
          </motion.div>
        </motion.div>

        {/* Hyper-Realistic UI Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', stiffness: 50, damping: 20, duration: 0.8 }}
          className="relative mt-16 md:mt-20"
          style={{ perspective: '2000px' }}
        >
          <div
            // RESPONSIVE: Removed fixed height, removed inline transform, added responsive transform class
            className="relative w-full max-w-5xl mx-auto h-[400px] sm:h-[450px] bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl 
                       md:[transform:rotateX(10deg)]"
          >
             {/* Gradient Border Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/50 to-purple-500/50 blur-xl opacity-30"></div>
            
            {/* Mockup Content - RESPONSIVE: Added flex-col and md:flex-row */}
            <div className="p-4 md:p-6 h-full flex flex-col md:flex-row gap-4 md:gap-6">
              {/* Left Panel: Live Tickets - RESPONSIVE: Added responsive width */}
              <div className="w-full md:w-1/3 bg-gray-800/50 rounded-lg p-4 space-y-3 overflow-hidden">
                <h3 className="font-semibold text-white">Live Tickets</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 bg-gray-700/50 p-2 rounded-md">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
                    <p className="text-sm text-gray-300 truncate">#12345 - Order Inquiry</p>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-700/50 p-2 rounded-md">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" style={{animationDelay: '0.2s'}}></div>
                    <p className="text-sm text-gray-300 truncate">#12346 - Return Request</p>
                  </div>
                </div>
              </div>
              {/* Right Panel: Performance - RESPONSIVE: Added responsive width */}
              <div className="w-full md:w-2/3 bg-gray-800/50 rounded-lg p-4 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-white">Performance</h3>
                    <div className="flex items-center gap-1 text-sm text-green-400">
                        <TrendingUp className="w-4 h-4" />
                        <span>+12.5%</span>
                    </div>
                </div>
                <div className="flex-grow w-full h-full">
                  {/* Mock Chart */}
                  <svg width="100%" height="100%" viewBox="0 0 200 100" preserveAspectRatio="none" className="opacity-70">
                      <path d="M 0 80 C 20 20, 40 20, 60 50 S 100 90, 120 60 S 160 0, 180 20 L 200 40" fill="none" stroke="url(#lineGradient)" strokeWidth="3" />
                      <defs>
                          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#8B5CF6" />
                              <stop offset="100%" stopColor="#3B82F6" />
                          </linearGradient>
                      </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;