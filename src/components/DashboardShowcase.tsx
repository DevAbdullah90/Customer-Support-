"use client"
import React, { useState, useEffect } from 'react';

const DashboardShowcase = () => {
  const [transform, setTransform] = useState('translateZ(0) rotateX(0) rotateY(0)');

  const handleMouseMove = (e:any) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;

    const rotateX = ((y / height) - 0.5) * -15; // Invert for natural feel
    const rotateY = ((x / width) - 0.5) * 15;

    setTransform(`translateZ(50px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform('translateZ(0) rotateX(0) rotateY(0)');
  };

  return (
    <section className="relative py-20 md:py-28 text-white overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40">
        <div className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
              Insights for Every Industry
            </span>
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Visualize your success with our powerful and intuitive dashboard,
            designed for clarity and action.
          </p>
        </div>

        <div
          className="relative rounded-2xl bg-white/5 border border-white/10 p-4 md:p-6 shadow-2xl shadow-primary/20"
          style={{ perspective: '1000px' }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="rounded-xl transition-transform duration-300 ease-out"
            style={{ transform: transform, transformStyle: 'preserve-3d' }}
          >
            {/* Browser Header */}
            <div className="bg-gray-800/80 rounded-t-lg p-3 flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Dashboard Preview"
                className="rounded-b-lg w-full h-full object-cover border-t-0 border-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;