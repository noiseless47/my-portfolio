'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectsSection from './ProjectsSection';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';

export default function TabSection() {
  const [activeTab, setActiveTab] = useState('projects');

  const tabs = [
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'projects':
        return <ProjectsSection />;
      case 'education':
        return <EducationSection />;
      case 'experience':
        return <ExperienceSection />;
      default:
        return null;
    }
  };

  return (
    <div className="py-10">
      <div className="flex justify-center space-x-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] text-white'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 