import React from 'react';
import { motion } from 'framer-motion';
import { FiZap, FiBarChart2, FiLock, FiGlobe, FiUsers, FiSettings } from 'react-icons/fi';

const features = [
  {
    icon: <FiZap className="w-8 h-8" />,
    title: "Workflow Automation",
    description: "Automate repetitive tasks and approval processes to save 10+ hours per week."
  },
  {
    icon: <FiBarChart2 className="w-8 h-8" />,
    title: "Business Intelligence",
    description: "Track KPIs, generate reports, and make informed decisions with real-time data."
  },
  {
    icon: <FiLock className="w-8 h-8" />,
    title: "Data Security",
    description: "Enterprise-grade encryption and compliance with GDPR, SOC 2, and ISO standards."
  },
  {
    icon: <FiGlobe className="w-8 h-8" />,
    title: "Team Collaboration",
    description: "Centralized workspace for seamless communication and project management."
  },
  {
    icon: <FiUsers className="w-8 h-8" />,
    title: "User Management",
    description: "Role-based access controls and easy onboarding for teams of any size."
  },
  {
    icon: <FiSettings className="w-8 h-8" />,
    title: "Custom Integrations",
    description: "Connect with 1000+ apps including Slack, Salesforce, and Google Workspace."
  }
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Practical Solutions for Your Business</h2>
          <p className="section-subtitle">
            Tools designed to solve real business challenges and boost productivity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg card-hover border border-gray-100"
            >
              <div className="w-16 h-16 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;