import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiStar } from 'react-icons/fi';

const pricingPlans = [
  {
    name: "Starter",
    price: { monthly: 29, yearly: 290 },
    description: "For small teams automating basic workflows",
    features: [
      "Up to 5 users",
      "Workflow automation",
      "Basic reporting",
      "10GB storage",
      "Email support",
      "5 integrations"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Professional",
    price: { monthly: 79, yearly: 790 },
    description: "For growing businesses with advanced needs",
    features: [
      "Up to 25 users",
      "Advanced workflows",
      "Custom dashboards",
      "100GB storage",
      "Priority support",
      "Unlimited integrations",
      "API access",
      "Single sign-on"
    ],
    cta: "Try Free for 14 Days",
    popular: true
  },
  {
    name: "Enterprise",
    price: { monthly: 199, yearly: 1990 },
    description: "For large organizations with complex requirements",
    features: [
      "Unlimited users",
      "Custom workflows",
      "Advanced analytics",
      "1TB storage",
      "24/7 dedicated support",
      "Custom integrations",
      "Advanced security",
      "Dedicated account manager",
      "Custom training"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Clear, Value-Based Pricing</h2>
          <p className="section-subtitle">
            Plans designed to grow with your business needs
          </p>
          
          {/* Billing toggle */}
          <div className="flex justify-center items-center mt-10">
            <span className={`mr-4 font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative rounded-full w-14 h-7 bg-indigo-600 transition-colors duration-300"
            >
              <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${billingCycle === 'monthly' ? 'left-1' : 'left-8'}`}></div>
            </button>
            <span className={`ml-4 font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly <span className="text-indigo-600">(Save 20%)</span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`rounded-2xl p-8 shadow-lg border ${
                plan.popular
                  ? 'bg-white border-indigo-500 relative transform scale-105 z-10'
                  : 'bg-white border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center">
                  <FiStar className="mr-1" /> Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-gray-900">
                  ${plan.price[billingCycle]}
                </span>
                <span className="text-gray-600">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <FiCheck className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-3 px-6 rounded-lg font-medium transition duration-300 ${
                  plan.popular
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;