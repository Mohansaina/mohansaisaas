import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
  {
    question: "How quickly can my team be productive?",
    answer: "Most teams are productive within the first week. Our intuitive interface requires minimal training, and we provide onboarding support for your first 30 days."
  },
  {
    question: "How secure is my data?",
    answer: "Enterprise-grade security with 256-bit encryption, regular penetration testing, and compliance with GDPR, SOC 2 Type II, and ISO 27001. We undergo third-party security audits annually."
  },
  {
    question: "Can I integrate with my existing tools?",
    answer: "Yes, we integrate with 1000+ apps including Slack, Salesforce, Google Workspace, and Microsoft 365. Our API allows custom integrations for any system."
  },
  {
    question: "What support options are available?",
    answer: "All plans include email support with 24-hour response time. Professional and Enterprise plans add live chat and phone support with 4-hour response time. Enterprise clients get a dedicated account manager."
  },
  {
    question: "Can I migrate data from my current system?",
    answer: "Yes, our migration specialists help transfer your data with zero downtime. We support imports from most popular business tools and provide custom migration services."
  },
  {
    question: "What happens if I need to change plans?",
    answer: "Upgrade or downgrade anytime with prorated billing. Your data and configurations remain intact. We'll help you choose the right plan based on your usage."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Common Questions Answered</h2>
          <p className="section-subtitle">
            Get clarity on implementation, security, and pricing
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center bg-white rounded-2xl p-6 shadow-md text-left hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                {openIndex === index ? (
                  <FiChevronUp className="text-indigo-600" />
                ) : (
                  <FiChevronDown className="text-indigo-600" />
                )}
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl rounded-t-none p-6 shadow-md mt-1"
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              )}
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
            Still have questions? We're here to help.
          </p>
          <button className="btn-primary">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;