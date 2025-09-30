import React from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: "5 Workflow Automation Tips That Save 10+ Hours Weekly",
    excerpt: "Practical automation strategies used by our most successful customers.",
    date: "May 15, 2023",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
  },
  {
    title: "How to Measure Team Productivity (Without Micromanaging)",
    excerpt: "Data-driven approaches to track performance while maintaining trust.",
    date: "Apr 28, 2023",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
  },
  {
    title: "The 7 Security Checks Every Business Should Run Monthly",
    excerpt: "Simple security audits that prevent 90% of data breaches.",
    date: "Apr 12, 2023",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1563017838-90e5d6b96d23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
  }
];

const BlogTeaser = () => {
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
          <h2 className="section-title">Business Tips & Best Practices</h2>
          <p className="section-subtitle">
            Actionable insights to improve your workflows and team productivity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-lg card-hover border border-gray-100"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-300">
                  Read More →
                </button>
              </div>
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
          <button className="btn-primary">
            View All Articles
          </button>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-2">Get Productivity Tips</h3>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            Receive weekly insights on workflow automation and team management.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your work email"
              className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-indigo-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition duration-300 whitespace-nowrap">
              Get Tips
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogTeaser;