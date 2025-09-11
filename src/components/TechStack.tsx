"use client";
import React from 'react';
import { SiFastapi, SiOpenai, SiPython, SiNextdotjs, SiTailwindcss, SiVercel, SiDocker } from 'react-icons/si';

// Expanded tech stack for a fuller marquee
const techRow1 = [
  { icon: <SiFastapi className="w-8 h-8" />, name: 'FastAPI' },
  { icon: <SiOpenai className="w-8 h-8" />, name: 'OpenAI SDK' },
  { icon: <SiPython className="w-8 h-8" />, name: 'Python' },
  { icon: <SiNextdotjs className="w-8 h-8" />, name: 'Next.js' },
  { icon: <SiTailwindcss className="w-8 h-8" />, name: 'Tailwind CSS' },
  { icon: <SiVercel className="w-8 h-8" />, name: 'Vercel' },
  { icon: <SiDocker className="w-8 h-8" />, name: 'Docker' },
];

const TechStack = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-gradient-radial from-blue-900/30 to-transparent blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[50rem] h-[50rem] bg-gradient-radial from-purple-900/30 to-transparent blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Built with Best-in-Class Technology
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            We leverage the industry&apos;s most powerful and scalable technologies to deliver a product that is reliable, fast, and ready for the future.
          </p>
        </div>

        <div className="relative [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            {/* Row 1 */}
            <div className="flex w-max animate-marquee-slow">
                {[...techRow1, ...techRow1,...techRow1, ...techRow1].map((t, index) => (
                    <div key={`row1-${index}`} className="group relative flex flex-col items-center justify-center gap-2 text-gray-700 mx-4 w-40 h-32">
                        <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300"></div>
                        <div className="relative text-5xl transition-transform duration-300 group-hover:-translate-y-1">
                            {t.icon}
                        </div>
                        <span className="relative text-sm font-semibold transition-colors duration-300">
                            {t.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;