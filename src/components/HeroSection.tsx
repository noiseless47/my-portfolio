'use client';

import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="w-full h-full bg-gradient-conic from-purple-500 via-blue-500 to-purple-500 blur-3xl dark:opacity-100 opacity-30" />
        </div>
      </div>
      <div className="relative z-10 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          className="space-y-6"
        >
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] bg-clip-text text-transparent">
            Hello, I&apos;m Asish Kumar Yeleti
          </h1>
          <p className="text-[#636e72] dark:text-[#b2bec3] text-xl md:text-2xl max-w-2xl mx-auto">
            A passionate full-stack developer crafting beautiful digital experiences
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] text-white rounded-full font-semibold"
              >
                Get in Touch
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/projects"
                className="px-8 py-3 border border-[#dcdde1] dark:border-[#2d3436] text-[#2d3436] dark:text-[#dfe6e9] rounded-full font-semibold hover:bg-[#f5f6fa] dark:hover:bg-[#2d3436] transition-colors"
              >
                View Work
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection; 