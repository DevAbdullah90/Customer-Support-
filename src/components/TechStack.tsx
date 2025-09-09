import React from 'react';
import { SiFastapi, SiOpenai, SiPython, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const tech = [
  { icon: <SiFastapi className="w-12 h-12" />, name: 'FastAPI' },
  { icon: <SiOpenai className="w-12 h-12" />, name: 'OpenAI Agents SDK' },
  { icon: <SiPython className="w-12 h-12" />, name: 'Python' },
  { icon: <SiNextdotjs className="w-12 h-12" />, name: 'Next.js' },
  { icon: <SiTailwindcss className="w-12 h-12" />, name: 'Tailwind CSS' },
];

const TechStack = () => {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Built with the Best</h2>
        <p className="text-text-secondary mt-2">We use cutting-edge technology to deliver a world-class product.</p>
      </div>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        {tech.map((t, index) => (
          <div key={index} className="flex flex-col items-center gap-2 text-text-secondary">
            {t.icon}
            <span>{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;