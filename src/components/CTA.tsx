import { ArrowRight, CheckCircle } from "lucide-react";
import React from 'react';

const CTA: React.FC = () => {
  const benefits = [
    "24/7 Availability",
    "Instant Responses",
    "Increased Sales & Leads",
    "Seamless Integration",
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Aurora Effect */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Glassmorphism Card */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 lg:p-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Left Column: Text Content */}
              <div className="text-center md:text-left">
                <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-black">
                  Ready to Elevate Your Business?
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
                  Join the future of customer support and sales today. Our AI agent is ready to work for you 24/7, delivering results from day one.
                </p>
                <a
                  href="#pricing"
                  className="group relative inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground font-bold py-4 px-10 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/40 overflow-hidden"
                >
                  <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-20"></span>
                  <span className="relative">Sign Up Now</span>
                  <ArrowRight className="w-6 h-6 relative transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
              
              {/* Right Column: Benefits Checklist */}
              <div className="border-t border-white/10 md:border-t-0 md:border-l md:pl-10 pt-8 md:pt-0">
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="text-lg text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;