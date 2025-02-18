'use client';

import { motion } from 'framer-motion';

export default function EducationSection() {
  const education = [
    {
      school: "RV College of Engineering",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Information Science and Engineering",
      period: "Sep 2023 -- Present",
      location: "Bengaluru",
      grades: [
        { label: "CGPA", value: "9.28/10" },
        { label: "2nd Semester", value: "9.25/10" }
      ],
      achievements: [
        "Active member of the Coding Club and Robotics Team",
        "Participated in multiple hackathons and coding competitions",
        "Secured 1st place in college-level coding competition"
      ]
    },
    {
      school: "Delhi Public School East",
      degree: "High School",
      period: "Apr 2021 -- Mar 2023",
      location: "Bengaluru",
      grades: [
        { label: "Class XII", value: "96.2%" },
        { label: "COMEDK", value: "505" }
      ],
      achievements: [
        "Consistent academic performer",
        "Active participant in cultural activities",
        "Participated in various inter-school competitions"
      ]
    },
    {
      school: "Ryan International School",
      degree: "Primary & Secondary School",
      period: "Jun 2009 -- Mar 2021",
      location: "Bengaluru",
      grades: [
        { label: "Class X", value: "96.5%" }
      ],
      achievements: [
        "Consistent academic performer",
        "Active participant in cultural activities",
        "Participated in various inter-school competitions"
      ]
    }
  ];

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {edu.school}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    {edu.degree} {edu.field && `- ${edu.field}`}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600 dark:text-gray-400">{edu.period}</p>
                  <p className="text-gray-600 dark:text-gray-400">{edu.location}</p>
                </div>
              </div>

              {/* Grades Section */}
              {edu.grades && (
                <div className="mb-4">
                  <h4 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Academic Performance
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {edu.grades.map((grade, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg"
                      >
                        <span className="text-gray-600 dark:text-gray-400 text-sm">
                          {grade.label}:
                        </span>
                        <span className="ml-2 text-[#60a5fa] dark:text-[#60a5fa] font-semibold">
                          {grade.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Achievements Section */}
              {edu.achievements && (
                <div>
                  <h4 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Key Achievements
                  </h4>
                  <ul className="list-disc list-inside space-y-1">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-gray-600 dark:text-gray-400">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 