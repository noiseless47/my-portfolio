'use client';

import { FaHeart } from 'react-icons/fa';
import SocialLinks from './SocialLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-50/20 dark:bg-black/20 backdrop-blur-lg py-8 mt-20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6">
          <SocialLinks />
          
          <div className="w-full max-w-md h-px bg-gray-200 dark:bg-gray-800 transition-all duration-300" />
          
          <div className="flex flex-col items-center gap-4">
            <p className="text-[#636e72] dark:text-[#b2bec3] text-sm text-center flex items-center gap-2">
              Made with <FaHeart className="text-[#ff6b6b]" /> by Asish Kumar Yeleti
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              © {currentYear} All rights reserved
            </p>
            <div className="text-[#636e72] dark:text-[#b2bec3] text-sm text-center">
              <span>Built with </span>
              <a 
                href="https://nextjs.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#4ecdc4] hover:text-[#ff6b6b] transition-colors"
              >
                Next.js
              </a>
              <span> • </span>
              <a 
                href="https://tailwindcss.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#4ecdc4] hover:text-[#ff6b6b] transition-colors"
              >
                Tailwind CSS
              </a>
              <span> • </span>
              <a 
                href="https://www.framer.com/motion/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#4ecdc4] hover:text-[#ff6b6b] transition-colors"
              >
                Framer Motion
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 