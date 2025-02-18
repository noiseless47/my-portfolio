'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/education', label: 'Education' },
    { href: '/experience', label: 'Experience' },
    { href: '/contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-[#0f0f0f]/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] bg-clip-text text-transparent">
            Asish Kumar Yeleti
          </Link>
          
          <div className="flex items-center space-x-8">
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
            <button
              onClick={toggleTheme}
              className="text-gray-600 dark:text-gray-400 hover:text-[#60a5fa] transition-colors"
            >
              {theme === 'dark' ? (
                <i className="fas fa-sun text-xl"></i>
              ) : (
                <i className="fas fa-moon text-xl"></i>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 