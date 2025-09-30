import React from 'react';
import { motion } from 'framer-motion';

const integrations = [
  { name: "Slack", icon: "S" },
  { name: "Salesforce", icon: "S" },
  { name: "Google Workspace", icon: "G" },
  { name: "Microsoft Teams", icon: "M" },
  { name: "Zoom", icon: "Z" },
  { name: "HubSpot", icon: "H" },
  { name: "Shopify", icon: "S" },
  { name: "Stripe", icon: "S" },
  { name: "Dropbox", icon: "D" },
  { name: "Asana", icon: "A" },
  { name: "Trello", icon: "T" },
  { name: "Notion", icon: "N" }
];

const Integrations = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Connect Your Favorite Tools</h2>
          <p className="section-subtitle">
            Integrate with 1000+ apps to eliminate data silos
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-md card-hover border border-gray-100 flex flex-col items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl font-bold mb-4">
                {integration.icon}
              </div>
              <h3 className="font-bold text-gray-900">{integration.name}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Don't see your favorite tool? We're constantly adding new integrations.
          </p>
          <button className="btn-primary">
            Request Integration
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;