'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/education', label: 'Education' },
    { href: '/experience', label: 'Experience' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-[#0f0f0f]/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] bg-clip-text text-transparent">
            Asish Kumar Yeleti
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-gray-600 dark:text-gray-400 hover:text-[#60a5fa] transition-colors ${
                  pathname === item.href ? 'text-[#60a5fa]' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <motion.button
              onClick={toggleTheme}
              className="relative p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:ring-2 ring-blue-400 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              <motion.div
                initial={false}
                animate={{
                  rotate: theme === 'dark' ? 360 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'dark' ? (
                  <i className="fas fa-sun text-yellow-400"></i>
                ) : (
                  <i className="fas fa-moon text-blue-500"></i>
                )}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <motion.button
              onClick={toggleTheme}
              className="relative p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:ring-2 ring-blue-400 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              <motion.div
                initial={false}
                animate={{
                  rotate: theme === 'dark' ? 360 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'dark' ? (
                  <i className="fas fa-sun text-yellow-400"></i>
                ) : (
                  <i className="fas fa-moon text-blue-500"></i>
                )}
              </motion.div>
            </motion.button>
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:ring-2 ring-blue-400 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <motion.div
                  animate={isMenuOpen ? "open" : "closed"}
                  variants={{
                    open: { rotate: 180 },
                    closed: { rotate: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? (
                    <i className="fas fa-times text-blue-500"></i>
                  ) : (
                    <i className="fas fa-bars text-blue-500"></i>
                  )}
                </motion.div>
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-[#0f0f0f] border-t dark:border-gray-800"
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block py-2 px-4 rounded-lg transition-colors ${
                    pathname === item.href 
                      ? 'text-[#60a5fa] bg-blue-50 dark:bg-gray-800' 
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 