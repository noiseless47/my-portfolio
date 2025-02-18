'use client';

import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';

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
      icon: <FaEnvelope size={24} />,
      url: "mailto:asishyeleti2005@gmail.com",
      label: "Email"
    },
    { 
      icon: <FaGithub size={24} />,
      url: "https://github.com/noiseless47",
      label: "GitHub"
    },
    { 
      icon: <FaLinkedin size={24} />,
      url: "https://linkedin.com/in/asishkumaryeleti",
      label: "LinkedIn"
    },
    {
      icon: <SiLeetcode size={24} />,
      url: "https://leetcode.com/noiseless47",
      label: "LeetCode"
    },
    { 
      icon: <FaXTwitter size={24} />,
      url: "https://x.com/AsishYeleti",
      label: "X (Twitter)"
    },
    { 
      icon: <FaInstagram size={24} />,
      url: "https://instagram.com/asish.k.y",
      label: "Instagram"
    },
    { 
      icon: <FaDiscord size={24} />,
      url: "https://discord.com/invite/YGXX4ue5eb",
      label: "Discord"
    }
  ];

  return (
    <div className="flex gap-8 justify-center">
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.url}
          target={social.url.startsWith('mailto') ? '_self' : '_blank'}
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