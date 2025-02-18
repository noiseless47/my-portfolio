'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6';

export default function HeroSection() {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] bg-clip-text text-transparent">
          Asish Kumar Yeleti
        </h1>
        <h2 className="text-2xl mb-6 text-gray-600 dark:text-gray-400">
          Aspiring Software Developer
        </h2>
        <p className="text-lg mb-12 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
          Information Science and Engineering student passionate about creating innovative software solutions with modern technologies.
        </p>
        
        <div className="flex justify-center gap-6">
          <motion.a
            href="/Asish_Kumar_Yeleti_Resume.pdf"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
          >
            <i className="fas fa-file-alt mr-2"></i>
            Resume
          </motion.a>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-[#60a5fa] text-[#60a5fa] dark:border-[#a78bfa] dark:text-[#a78bfa] rounded-lg font-medium hover:bg-[#60a5fa] hover:text-white dark:hover:bg-[#a78bfa] dark:hover:text-white transition-all inline-block"
            >
              <i className="fas fa-envelope mr-2"></i>
              Contact
            </Link>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Social Media Section */}
      <div className="mt-16">
        <h3 className="text-lg text-gray-600 dark:text-gray-400 mb-6 text-center">
          Connect with me on socials
        </h3>
        <div className="flex justify-center gap-6">
          <motion.a
            href="https://github.com/noiseless47"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 text-xl bg-white rounded-full hover:shadow-lg transition-all duration-300 shadow-md text-gray-700"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/asishkumaryeleti"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 text-xl bg-white rounded-full hover:shadow-lg transition-all duration-300 shadow-md text-[#0A66C2]"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://x.com/AsishYeleti"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 text-xl bg-white rounded-full hover:shadow-lg transition-all duration-300 shadow-md text-black"
          >
            <FaXTwitter />
          </motion.a>
          <motion.a
            href="https://leetcode.com/noiseless47"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 text-xl bg-white rounded-full hover:shadow-lg transition-all duration-300 shadow-md text-[#FFA116]"
          >
            <SiLeetcode />
          </motion.a>
          <motion.a
            href="https://instagram.com/asish.k.y"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 text-xl bg-white rounded-full hover:shadow-lg transition-all duration-300 shadow-md text-[#E4405F]"
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://discord.com/invite/YGXX4ue5eb"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 text-xl bg-white rounded-full hover:shadow-lg transition-all duration-300 shadow-md text-[#5865F2]"
          >
            <FaDiscord />
          </motion.a>
        </div>
      </div>
    </section>
  );
} 