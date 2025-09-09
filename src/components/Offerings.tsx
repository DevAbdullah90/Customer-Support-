import React from 'react';
import { Check } from 'lucide-react';

const offerings = [
  '24/7 AI-Powered Support',
  'Automated Order Confirmations',
  'Sales Representative Capabilities',
  'Multi-Industry Dashboards',
  'Real-time Analytics',
  'And much more...',
];

const Offerings = () => {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">What We Offer</h2>
        <p className="text-text-secondary mt-2">A comprehensive suite of features to elevate your business.</p>
      </div>
      <div className="max-w-2xl mx-auto bg-secondary p-8 rounded-lg">
        <ul className="space-y-4">
          {offerings.map((offer, index) => (
            <li key={index} className="flex items-center gap-4">
              <Check className="w-6 h-6 text-accent" />
              <span>{offer}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Offerings;