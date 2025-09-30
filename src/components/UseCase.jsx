import React, { useState } from 'react';
import { motion } from 'framer-motion';

const useCases = [
  {
    step: "01",
    title: "Automate Workflows",
    description: "Set up approval processes and task automation in minutes.",
    details: "Reduce manual work by 70% with our drag-and-drop workflow builder. No coding required."
  },
  {
    step: "02",
    title: "Track Performance",
    description: "Monitor team productivity and business metrics in real-time.",
    details: "Create custom dashboards to visualize KPIs and identify growth opportunities."
  },
  {
    step: "03",
    title: "Collaborate Effectively",
    description: "Centralize communication and project management in one place.",
    details: "Share files, assign tasks, and track progress without switching between apps."
  },
  {
    step: "04",
    title: "Scale Securely",
    description: "Grow your team and data with enterprise-grade security.",
    details: "Bank-level encryption and compliance certifications ensure your data stays protected."
  }
];

const UseCase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">How SassFlow Solves Your Business Challenges</h2>
          <p className="section-subtitle">
            Practical steps to transform your operations and boost productivity
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="space-y-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setActiveIndex(index)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeIndex === index
                      ? 'bg-white shadow-xl border border-indigo-100'
                      : 'bg-gray-100 hover:bg-white'
                  }`}
                >
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      activeIndex === index
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-200 text-gray-700'
                    }`}>
                      {useCase.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                      <p className="text-gray-600 mb-3">{useCase.description}</p>
                      {activeIndex === index && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-indigo-600 font-medium"
                        >
                          {useCase.details}
                        </motion.p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl h-full min-h-[500px] flex items-center justify-center p-8"
            >
              <div className="text-center text-white">
                <div className="text-5xl font-bold mb-4">
                  {useCases[activeIndex].step}
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  {useCases[activeIndex].title}
                </h3>
                <p className="text-xl opacity-90">
                  {useCases[activeIndex].details}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCase;