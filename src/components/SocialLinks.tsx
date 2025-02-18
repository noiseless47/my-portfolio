'use client';

import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import { FaSpotify } from 'react-icons/fa';
import { FaDev } from 'react-icons/fa';

const SocialLinks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      y: -3,
      rotate: 8,
      transition: {
        type: "spring",
        stiffness: 300,
        rotate: {
          duration: 0.2,
          ease: "easeOut"
        }
      }
    }
  };

  const socialLinks = [
    { 
      icon: <FaGithub size={20} />,
      url: "https://github.com/noiseless47",
      label: "GitHub",
      hoverColor: "hover:text-gray-900 dark:hover:text-white"
    },
    { 
      icon: <FaLinkedin size={20} />,
      url: "https://linkedin.com/in/asishkumaryeleti",
      label: "LinkedIn",
      hoverColor: "hover:text-[#0A66C2]"
    },
    { 
      icon: <FaXTwitter size={20} />,
      url: "https://x.com/AsishYeleti",
      label: "X (Twitter)",
      hoverColor: "hover:text-black dark:hover:text-white"
    },
    {
      icon: <SiLeetcode size={20} />,
      url: "https://leetcode.com/noiseless47",
      label: "LeetCode",
      hoverColor: "hover:text-[#FFA116]"
    },
    { 
      icon: <FaInstagram size={20} />,
      url: "https://instagram.com/asish.k.y",
      label: "Instagram",
      hoverColor: "hover:text-[#E4405F]"
    },
    { 
      icon: <FaDiscord size={20} />,
      url: "https://discord.com/invite/YGXX4ue5eb",
      label: "Discord",
      hoverColor: "hover:text-[#5865F2]"
    },
    { 
      icon: <FaSpotify size={20} />,
      url: "https://open.spotify.com/user/o1mhl5cn2icv8bc2z81fgaiqc?si=f870f4d6a78e4ce4",
      label: "Spotify",
      hoverColor: "hover:text-[#1DB954]"
    },
    {
      icon: <FaDev size={20} />,
      url: "https://dev.to/noiseless47",
      label: "Dev.to",
      hoverColor: "hover:text-black dark:hover:text-white"
    }
  ];

  return (
    <motion.div 
      className="mt-8 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div 
        className="flex flex-wrap gap-6 justify-center items-center"
        variants={containerVariants}
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover="hover"
            className={`text-gray-400 transition-all duration-300 ${social.hoverColor}`}
            aria-label={social.label}
          >
            <motion.div variants={iconVariants}>
              {social.icon}
            </motion.div>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SocialLinks; 