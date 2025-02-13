'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  tags: string[];
  image: string;
}

const ProjectCard = ({ title, description, link, tags, image }: ProjectCardProps) => {
  return (
    <motion.div
      className="group relative bg-gray-50 dark:bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 transition-all duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-[#636e72] dark:text-[#b2bec3] mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#f5f6fa] dark:bg-[#2d3436] text-[#636e72] dark:text-[#b2bec3] rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <motion.a
          href={link}
          className="inline-flex items-center text-[#4ecdc4] hover:text-[#ff6b6b] transition-colors"
          whileHover={{ x: 5 }}
        >
          View Project
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 