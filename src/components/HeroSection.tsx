'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6';
import { FaSpotify } from 'react-icons/fa';
import { FaDev } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className="py-12 md:py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] bg-clip-text text-transparent">
          Asish Kumar Yeleti
        </h1>
        <h2 className="text-xl md:text-2xl mb-4 md:mb-6 text-gray-600 dark:text-gray-400">
          Aspiring Software Developer
        </h2>
        <p className="text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto text-gray-600 dark:text-gray-400 px-4">
          Information Science and Engineering student passionate about creating innovative software solutions with modern technologies.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4">
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
              className="px-8 py-3 border-2 border-[#60a5fa] text-[#60a5fa] dark:border-[#a78bfa] dark:text-[#a78bfa] rounded-lg font-medium hover:bg-[#60a5fa] hover:text-white dark:hover:bg-[#a78bfa] dark:hover:text-white transition-all inline-block w-full sm:w-auto"
            >
              <i className="fas fa-envelope mr-2"></i>
              Contact
            </Link>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Social Media Section */}
      <div className="mt-12 md:mt-16">
        <h3 className="text-lg text-gray-600 dark:text-gray-400 mb-4 md:mb-6 text-center">
          Connect with me on socials
        </h3>
        <div className="grid grid-cols-4 md:flex md:flex-wrap justify-center gap-3 md:gap-6 px-2 md:px-4 max-w-[280px] md:max-w-none mx-auto">
          <motion.a
            href="https://github.com/noiseless47"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 md:p-4 text-base md:text-xl bg-white/80 dark:bg-gray-800 rounded-full hover:shadow-lg transition-all duration-300 shadow-md text-gray-700 dark:text-gray-300 backdrop-blur-sm flex items-center justify-center aspect-square w-[50px] md:w-auto"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/asishkumaryeleti"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 md:p-4 text-base md:text-xl bg-white/80 dark:bg-gray-800 rounded-full hover:shadow-lg transition-all duration-300 shadow-md text-[#0A66C2] dark:text-[#0A66C2] backdrop-blur-sm flex items-center justify-center aspect-square w-[50px] md:w-auto"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://x.com/AsishYeleti"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 md:p-4 text-base md:text-xl bg-white/80 dark:bg-gray-800 rounded-full hover:shadow-lg transition-all duration-300 shadow-md text-black dark:text-white backdrop-blur-sm flex items-center justify-center aspect-square w-[50px] md:w-auto"
          >
            <FaXTwitter />
          </motion.a>
          <motion.a
            href="https://leetcode.com/noiseless47"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 md:p-4 text-base md:text-xl bg-white/80 dark:bg-gray-800 rounded-full hover:shadow-lg transition-all duration-300 shadow-md text-[#FFA116] dark:text-[#FFA116] backdrop-blur-sm flex items-center justify-center aspect-square w-[50px] md:w-auto"
          >
            <SiLeetcode />
          </motion.a>
          <motion.a
            href="https://instagram.com/asish.k.y"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 md:p-4 text-base md:text-xl bg-white/80 dark:bg-gray-800 rounded-full hover:shadow-lg transition-all duration-300 shadow-md text-[#E4405F] dark:text-[#E4405F] backdrop-blur-sm flex items-center justify-center aspect-square w-[50px] md:w-auto"
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://discord.com/invite/YGXX4ue5eb"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 md:p-4 text-base md:text-xl bg-white/80 dark:bg-gray-800 rounded-full hover:shadow-lg transition-all duration-300 shadow-md text-[#5865F2] dark:text-[#5865F2] backdrop-blur-sm flex items-center justify-center aspect-square w-[50px] md:w-auto"
          >
            <FaDiscord />
          </motion.a>
          <motion.a
            href="https://open.spotify.com/user/o1mhl5cn2icv8bc2z81fgaiqc?si=f870f4d6a78e4ce4"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 md:p-4 text-base md:text-xl bg-white/80 dark:bg-gray-800 rounded-full hover:shadow-lg transition-all duration-300 shadow-md text-[#1DB954] dark:text-[#1DB954] backdrop-blur-sm flex items-center justify-center aspect-square w-[50px] md:w-auto"
          >
            <FaSpotify />
          </motion.a>
          <motion.a
            href="https://dev.to/noiseless47"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 md:p-4 text-base md:text-xl bg-white/80 dark:bg-gray-800 rounded-full hover:shadow-lg transition-all duration-300 shadow-md text-black dark:text-white backdrop-blur-sm flex items-center justify-center aspect-square w-[50px] md:w-auto"
          >
            <FaDev />
          </motion.a>
        </div>
      </div>
    </section>
  );
} 