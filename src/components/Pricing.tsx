// components/sections/Pricing.tsx
import React from 'react';

const plans = [
  {
    name: 'Starter',
    price: '$99',
    features: ['1 AI Agent', '1,000 Calls/mo', 'Basic Dashboard'],
  },
  {
    name: 'Business',
    price: '$299',
    features: ['5 AI Agents', '10,000 Calls/mo', 'Advanced Dashboard', 'Sales Features'],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Unlimited Agents', 'Unlimited Calls', 'Dedicated Support', 'Custom Integrations'],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Find the perfect plan</h2>
        <p className="text-text-secondary mt-2">Start for free, then upgrade as you grow.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className={`bg-secondary p-8 rounded-lg border-2 ${plan.isPopular ? 'border-primary' : 'border-transparent'}`}>
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <p className="text-5xl font-bold mb-4">{plan.price}<span className="text-lg text-text-secondary">{plan.name !== 'Enterprise' && '/mo'}</span></p>
            <ul className="space-y-2 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <a href="#" className={`w-full text-center font-semibold py-3 px-6 rounded-lg ${plan.isPopular ? 'bg-primary hover:bg-primary/90' : 'bg-gray-700 hover:bg-gray-600'}`}>
              Choose Plan
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;