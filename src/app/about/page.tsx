'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  const skills = [
    { 
      category: "Languages",
      items: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL", "HTML5", "CSS3"]
    },
    { 
      category: "Frontend",
      items: ["React.js", "Next.js", "Tailwind CSS", "Redux", "Framer Motion", "Material UI", "Bootstrap", "SCSS"]
    },
    { 
      category: "Backend",
      items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL", "Firebase", "Prisma"]
    },
    { 
      category: "Tools & DevOps",
      items: ["Git", "Docker", "VS Code", "Postman", "Linux", "AWS", "Vercel", "GitHub Actions"]
    },
    { 
      category: "Core Skills",
      items: ["Data Structures", "Algorithms", "System Design", "OOP", "Clean Code", "Design Patterns"]
    },
    { 
      category: "Soft Skills",
      items: ["Problem Solving", "Team Collaboration", "Communication", "Time Management", "Agile", "Leadership"]
    }
  ];

  return (
    <main className="min-h-screen pt-20 md:pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about my journey, skills, and what drives me in software development.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Introduction Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="prose dark:prose-invert max-w-none"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Who I Am
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I'm Asish Kumar Yeleti, an Information Science and Engineering student at R.V. College of Engineering, Bangalore. 
                My journey in software development began with a curiosity about how things work on the internet, 
                which led me to explore web technologies and programming.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Currently, I'm focused on full-stack development, with a particular interest in building 
                scalable web applications using modern technologies. I'm passionate about creating clean, 
                efficient code and learning new technologies to solve real-world problems.
              </p>
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                >
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Achievements Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Achievements & Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  Competitive Programming
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFA116] mt-1">
                      <i className="fas fa-code text-sm"></i>
                    </span>
                    <span></span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">
                      <i className="fas fa-trophy text-sm"></i>
                    </span>
                    <span></span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">
                      <i className="fas fa-award text-sm"></i>
                    </span>
                    <span></span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  Certifications & Awards
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">
                      <i className="fas fa-certificate text-sm"></i>
                    </span>
                    <span></span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-500 mt-1">
                      <i className="fas fa-medal text-sm"></i>
                    </span>
                    <span></span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-yellow-500 mt-1">
                      <i className="fas fa-star text-sm"></i>
                    </span>
                    <span></span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.section>

          {/* Interests Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Beyond Coding
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              When I'm not coding, you can find me exploring new technologies, contributing to tech communities, 
              or working on personal projects. I enjoy problem-solving on platforms like LeetCode and participating 
              in hackathons to challenge myself and learn from others.
            </p>
          </motion.section>
        </div>
      </div>
    </main>
  );
} 