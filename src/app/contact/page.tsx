'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: "Email",
      value: "asishyeleti2005@gmail.com",
      link: "mailto:asishyeleti2005@gmail.com",
      description: "Feel free to email me anytime"
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      label: "LinkedIn",
      value: "asishkumaryeleti",
      link: "https://www.linkedin.com/in/asishkumaryeleti",
      description: "Let's connect professionally"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      label: "Phone",
      value: "+91 99164 13430",
      link: "tel:+919916413430",
      description: "Available during business hours"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      label: "Location",
      value: "Bengaluru, Karnataka",
      description: "Currently based in"
    }
  ];

  return (
    <main className="min-h-screen flex flex-col pt-28 pb-16 bg-white dark:bg-gradient-to-b dark:from-[#0f0f0f] dark:via-[#151515] dark:to-[#0f0f0f]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out through any of the following channels.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] rounded-full text-white">
                  {info.icon}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    {info.label}
                  </h2>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('mailto') || info.link.startsWith('tel') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="text-[#60a5fa] dark:text-[#a78bfa] hover:underline block mb-2"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      {info.value}
                    </p>
                  )}
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {info.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
} 