'use client';

import { motion } from 'framer-motion';
import ProjectCard from '../../components/ProjectCard';
import { type NextPage } from 'next';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Projects: NextPage = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A revolutionary web application built with Next.js and TypeScript",
      link: "#",
      tags: ["Next.js", "React", "TypeScript"],
      image: "https://placehold.co/600x400"
    },
    // ... more projects
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-[#0f0f0f] dark:via-[#151515] dark:to-[#0f0f0f] transition-colors duration-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              A collection of my work and personal projects
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 