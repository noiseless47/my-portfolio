'use client';

import { motion } from 'framer-motion';
import { type NextPage } from 'next';

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
};

const inputVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

const Contact: NextPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-[#0f0f0f] dark:via-[#151515] dark:to-[#0f0f0f] transition-colors duration-300 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={formVariants}
          className="bg-gray-50/50 dark:bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800 transition-all duration-300"
        >
          <motion.h1 
            variants={inputVariants}
            className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] bg-clip-text text-transparent"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            variants={inputVariants}
            className="text-gray-600 dark:text-gray-400 text-center mb-8"
          >
            I&apos;m always open to new opportunities and collaborations
          </motion.p>
          
          <form className="space-y-6">
            <motion.div variants={inputVariants}>
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-white dark:bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4ecdc4] text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 transition-all duration-300"
              />
            </motion.div>
            <motion.div variants={inputVariants}>
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-white dark:bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4ecdc4] text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700"
              />
            </motion.div>
            <motion.div variants={inputVariants}>
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 bg-white dark:bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4ecdc4] text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700"
              ></textarea>
            </motion.div>
            <motion.button
              variants={inputVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] rounded-lg text-white font-semibold transition-transform"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 