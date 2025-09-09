"use client";
import { BarChart, BrainCircuit, PhoneCall, ShoppingCart } from "lucide-react";
import React, { useState } from "react";

// Define the feature type
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  key: string;
}

const features: Feature[] = [
  {
    icon: <PhoneCall className="w-8 h-8" />,
    title: "AI-Powered Call Handling",
    description:
      "Our AI agent provides instant, 24/7 phone support, resolving queries with human-like understanding.",
    className: "md:col-span-2",
    key: "1",
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "Automated Order Confirmation",
    description:
      "Seamlessly confirm customer orders via automated calls, ensuring accuracy and efficiency.",
    key: "2",
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Proactive Sales Outreach",
    description:
      "Utilize our agent as a sales representative to pitch your services to potential customers.",
    key: "3",
  },
  {
    icon: <BrainCircuit className="w-8 h-8" />,
    title: "Intelligent Lead Qualification",
    description:
      "Our AI analyzes conversations to identify and qualify high-potential leads, saving your team valuable time.",
    className: "md:col-span-2",
    key: "4",
  },
];

// Props type for FeatureCard
interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`group relative p-8 rounded-2xl bg-white border border-gray-200/80 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-gray-300/40 ${feature.className || ""}`}
      style={{
        animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`,
        opacity: 0,
      }}
    >
      {/* Interactive Glow Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(132, 94, 247, 0.1), transparent 80%)`,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6 text-primary border-2 border-primary/20 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
          {feature.icon}
        </div>
        <h3 className="text-2xl font-bold mb-3 text-gray-900">
          {feature.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="relative py-20 md:py-28 bg-white">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 w-full h-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            <span className="bg-gradient-to-b from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Everything You Need, and More
            </span>
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover the powerful features that make our AI agent the ultimate
            customer experience solution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.key} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
