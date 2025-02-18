'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa6';

interface GithubUrl {
  label: string;
  url: string;
}

interface DownloadUrl {
  label: string;
  url: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  githubUrls?: GithubUrl[];
  downloadUrls?: DownloadUrl[];
}

export default function ProjectCard({ 
  title, 
  description, 
  image, 
  tags, 
  githubUrl, 
  demoUrl,
  githubUrls,
  downloadUrls 
}: ProjectCardProps) {
  const isMultiRepo = Boolean(githubUrls);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
            {title}
          </h3>
          {isMultiRepo ? (
            <div className="flex flex-col gap-2">
              {githubUrls?.map((repo, index) => (
                <div key={index} className="flex items-center gap-2">
                  <motion.a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-600 dark:text-gray-400 hover:text-[#60a5fa] transition-colors"
                    aria-label={`View ${repo.label} Source Code`}
                  >
                    <FaGithub size={20} />
                  </motion.a>
                  <motion.a
                    href={downloadUrls?.[index].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-600 dark:text-gray-400 hover:text-[#60a5fa] transition-colors"
                    aria-label={`Download ${downloadUrls?.[index].label}`}
                  >
                    <FaDownload size={20} />
                  </motion.a>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {repo.label}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex gap-3">
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 dark:text-gray-400 hover:text-[#60a5fa] transition-colors"
                aria-label="View Source Code"
              >
                <FaGithub size={20} />
              </motion.a>
              {demoUrl && (
                <motion.a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 dark:text-gray-400 hover:text-[#60a5fa] transition-colors"
                  aria-label="View Live Demo"
                >
                  <FaExternalLinkAlt size={18} />
                </motion.a>
              )}
            </div>
          )}
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 