'use client';

import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const SocialLinks = () => {
  const iconVariants: Variants = {
    hover: {
      scale: 1.2,
      rotate: 15,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const socialLinks = [
    { 
      icon: <FaGithub size={24} />,
      url: "https://github.com/yourusername",
      label: "GitHub"
    },
    { 
      icon: <FaLinkedin size={24} />,
      url: "https://linkedin.com/in/yourusername",
      label: "LinkedIn"
    },
    { 
      icon: <FaXTwitter size={24} />,
      url: "https://x.com/yourusername",
      label: "X (Twitter)"
    },
    { 
      icon: <FaInstagram size={24} />,
      url: "https://instagram.com/yourusername",
      label: "Instagram"
    },
    { 
      icon: <FaDiscord size={24} />,
      url: "https://discord.com/users/yourusername",
      label: "Discord"
    }
  ];

  return (
    <div className="flex gap-8 justify-center">
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          whileHover="hover"
          className="text-gray-400 hover:text-[#4ecdc4] transition-colors"
          aria-label={social.label}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks; 