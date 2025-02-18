'use client';

import { motion } from 'framer-motion';

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Coding Club",
      organization: "RV College of Engineering",
      period: "Oct 2023 -- Present",
      location: "In-Campus",
      details: [
        "Actively participated in coding competitions and hackathons",
        "Conducted workshops on advanced coding topics such as GenAI and Neural Networks",
        "Collaborated on innovative software development projects"
      ],
      technologies: ["Python", "Machine Learning", "Web Development"]
    },
    {
      title: "Astra Robotics",
      organization: "RV College Of Engineering",
      period: "Nov 2023 -- Present",
      location: "In-Campus",
      details: [
        "Actively focused on developing innovative robotic solutions",
        "Contributing to the design and programming of autonomous robotic systems",
        "Applying software engineering skills to complex robotics challenges",
        "Participating in robotic design competitions and technical workshops"
      ],
      technologies: ["ROS", "Python", "Computer Vision", "Arduino"]
    },
    {
      title: "QuizCorp",
      organization: "RV College of Engineering",
      period: "Oct 2023 -- Present",
      location: "In-Campus",
      details: [
        "Developed and curated engaging quiz questions",
        "Assisted in organizing inter-college quiz competitions",
        "Enhanced event management and team coordination skills"
      ],
      technologies: ["Research", "Content Creation", "Event Management"]
    },
    {
      title: "CubeX",
      organization: "RV College of Engineering",
      period: "Jan 2024 -- Present",
      location: "In-Campus",
      details: [
        "Competed in speedcubing events, improving problem-solving skills",
        "Organized workshops on advanced Rubik's Cube solving techniques"
      ],
      technologies: ["Speedcubing", "Problem Solving", "Event Management"]
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
          {experiences.map((exp, index) => (
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
                    {exp.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    {exp.organization}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600 dark:text-gray-400">{exp.period}</p>
                  <p className="text-gray-600 dark:text-gray-400">{exp.location}</p>
                </div>
              </div>

              <div className="mb-4">
                <ul className="list-disc list-inside space-y-2">
                  {exp.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-600 dark:text-gray-400">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 