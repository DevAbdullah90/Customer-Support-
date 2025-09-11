"use client";
import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { motion, Variants } from 'framer-motion'; // Keep Variants import

// 1. DEFINE a specific type for the billing cycle
type BillingCycle = 'monthly' | 'annually';

const plans = [
  {
    name: 'Starter',
    description: 'For individuals and small teams just getting started.',
    prices: {
      monthly: 99,
      annually: 990,
    },
    features: ['1 AI Agent', '1,000 Calls/mo', 'Basic Dashboard', 'Email Support'],
  },
  {
    name: 'Business',
    description: 'For growing businesses that need more power and features.',
    prices: {
      monthly: 299,
      annually: 2990,
    },
    features: ['5 AI Agents', '10,000 Calls/mo', 'Advanced Dashboard', 'Sales Features', 'Priority Support'],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with custom needs and requirements.',
    prices: {
      monthly: null,
      annually: null,
    },
    features: ['Unlimited Agents', 'Unlimited Calls', 'Dedicated Support', 'Custom Integrations', 'SLA'],
  },
];

const Pricing = () => {
  // 2. APPLY the specific type to the useState hook
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find the perfect plan
          </h2>
          <p className="text-lg text-gray-600">
            Start for free, then upgrade as you grow. No hidden fees.
          </p>
        </div>

        {/* Billing Cycle Toggle */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <span className={`font-semibold transition-colors ${billingCycle === 'monthly' ? 'text-blue-600' : 'text-gray-500'}`}>
            Monthly
          </span>
          <div
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annually' : 'monthly')}
            className={`relative w-14 h-8 flex items-center bg-gray-200 rounded-full cursor-pointer p-1 transition-colors duration-300`}
          >
            <motion.div
              layout
              transition={{ type: 'spring', stiffness: 700, damping: 30 }}
              className="w-6 h-6 bg-white rounded-full shadow-md"
              style={{
                marginLeft: billingCycle === 'annually' ? 'auto' : '0',
                marginRight: billingCycle === 'monthly' ? 'auto' : '0',
              }}
            />
          </div>
          <span className={`font-semibold transition-colors ${billingCycle === 'annually' ? 'text-blue-600' : 'text-gray-500'}`}>
            Annually
            <span className="ml-2 text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">Save 17%</span>
          </span>
        </div>

        {/* Pricing Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`relative bg-gray-50 p-8 rounded-2xl border border-gray-200/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                plan.isPopular ? 'border-2 border-blue-500 shadow-2xl' : ''
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-500 mb-6 h-12">{plan.description}</p>
              
              <div className="mb-6">
                {plan.name === 'Enterprise' ? (
                  <p className="text-4xl font-extrabold text-gray-900">Custom</p>
                ) : (
                  <p className="text-5xl font-extrabold text-gray-900">
                    {/* THIS LINE IS NOW TYPE-SAFE */}
                    ${plan.prices[billingCycle]}
                    <span className="text-lg font-medium text-gray-500">/mo</span>
                  </p>
                )}
                 {billingCycle === 'annually' && plan.name !== 'Enterprise' && (
                  <p className="text-sm text-gray-500 mt-1">Billed annually</p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full text-center font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  plan.isPopular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg'
                    : 'bg-white border border-gray-300 text-gray-800 hover:bg-gray-100'
                }`}
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Choose Plan'}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;