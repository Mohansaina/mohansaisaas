import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    bio: "Former VP Engineering at Salesforce. Built teams that scaled to 1M+ users.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
  },
  {
    name: "Maria Garcia",
    role: "CTO",
    bio: "Ex-Google engineer with PhD in Distributed Systems. Scaled platforms to 50M+ users.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
  },
  {
    name: "James Wilson",
    role: "Head of Product",
    bio: "Former Product Lead at Slack. Expert in user experience and workflow design.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
  },
  {
    name: "Sarah Chen",
    role: "Lead Engineer",
    bio: "Contributor to React and Node.js. Specializes in building scalable systems.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
  }
];

const Team = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Meet Our Expert Team</h2>
          <p className="section-subtitle max-w-4xl">
            Former executives from leading tech companies, dedicated to solving real business challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg card-hover border border-gray-100 text-center"
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-indigo-600 font-medium mb-4">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Join Our Journey</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We're always looking for passionate individuals to join our team and help shape the future of enterprise software.
          </p>
          <button className="bg-white text-indigo-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">
            View Open Positions
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;