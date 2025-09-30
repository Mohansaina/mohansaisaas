import React from 'react';
import { motion } from 'framer-motion';

const trustSignals = [
  { name: "Trusted by 500+ Companies", value: "500+" },
  { name: "99.99% Uptime", value: "99.99%" },
  { name: "GDPR Compliant", value: "✓" },
  { name: " SOC 2 Certified", value: "✓" }
];

const clientLogos = [
  { name: "TechCorp", logo: "T" },
  { name: "InnovateCo", logo: "I" },
  { name: "Global Solutions", logo: "G" },
  { name: "Future Enterprises", logo: "F" },
  { name: "Digital Dynamics", logo: "D" },
  { name: "NextGen Systems", logo: "N" }
];

const TrustSignals = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {trustSignals.map((signal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">
                {signal.value}
              </div>
              <div className="text-gray-600">{signal.name}</div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-8">Trusted by innovative companies</h3>
          
          <div className="flex flex-wrap justify-center gap-12">
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-xl font-bold text-gray-700"
              >
                {client.logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSignals;