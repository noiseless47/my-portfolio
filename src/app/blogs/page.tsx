'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface BlogPost {
  title: string;
  description: string;
  date: string;
  readTime: string;
  link: string;
  tags: string[];
}

export default function BlogsPage() {
  // Sample blog posts - you can replace these with your actual blog data
  const blogPosts: BlogPost[] = [
    {
      title: "Building a Portfolio with Next.js and Tailwind",
      description: "A comprehensive guide on creating a modern portfolio website using Next.js 13 and Tailwind CSS with dark mode support.",
      date: "March 15, 2024",
      readTime: "5 min read",
      link: "https://dev.to/noiseless47/post-1",
      tags: ["Next.js", "Tailwind CSS", "Web Development"]
    },
    {
      title: "Understanding TypeScript Generics",
      description: "Deep dive into TypeScript generics and how they can make your code more reusable and type-safe.",
      date: "March 10, 2024",
      readTime: "7 min read",
      link: "https://dev.to/noiseless47/post-2",
      tags: ["TypeScript", "Programming", "Web Development"]
    },
    {
      title: "Mastering Git: Advanced Tips and Tricks",
      description: "Explore advanced Git techniques, workflows, and best practices for better version control.",
      date: "March 5, 2024",
      readTime: "8 min read",
      link: "https://dev.to/noiseless47/mastering-git-advanced-tips-and-tricks-4p8",
      tags: ["Git", "Version Control", "Development"]
    },
    {
      title: "React Server Components: A New Era",
      description: "Understanding React Server Components and how they change the way we build React applications.",
      date: "February 28, 2024",
      readTime: "6 min read",
      link: "https://dev.to/noiseless47/react-server-components-explained-3e9",
      tags: ["React", "Web Development", "JavaScript"]
    },
    {
      title: "Building Accessible Web Applications",
      description: "Learn how to make your web applications more accessible with ARIA, semantic HTML, and best practices.",
      date: "February 20, 2024",
      readTime: "10 min read",
      link: "https://dev.to/noiseless47/building-accessible-web-applications-2k4",
      tags: ["Accessibility", "Web Development", "HTML"]
    },
    {
      title: "Optimizing React Performance",
      description: "Practical tips and techniques for improving the performance of your React applications.",
      date: "February 15, 2024",
      readTime: "9 min read",
      link: "https://dev.to/noiseless47/optimizing-react-performance-best-practices-2b4",
      tags: ["React", "Performance", "JavaScript"]
    },
    {
      title: "Introduction to Docker for Developers",
      description: "A beginner-friendly guide to Docker containerization for web developers.",
      date: "February 8, 2024",
      readTime: "12 min read",
      link: "https://dev.to/noiseless47/introduction-to-docker-for-developers-4d3",
      tags: ["Docker", "DevOps", "Web Development"]
    },
    {
      title: "State Management in 2024",
      description: "Comparing modern state management solutions in React: Redux Toolkit, Zustand, Jotai, and more.",
      date: "February 1, 2024",
      readTime: "11 min read",
      link: "https://dev.to/noiseless47/state-management-in-2024-5g2",
      tags: ["React", "State Management", "JavaScript"]
    }
  ];

  return (
    <main className="min-h-screen pt-20 md:pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] bg-clip-text text-transparent">
            My Blog Posts
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Sharing my thoughts and experiences about software development, technology, and learning.
          </p>
        </motion.div>

        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <Link href={post.link} target="_blank" className="block">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 hover:text-[#60a5fa] dark:hover:text-[#a78bfa] transition-colors">
                    {post.title}
                  </h2>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {post.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {blogPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-400">
              No blog posts yet. Check back soon!
            </p>
          </motion.div>
        )}
      </div>
    </main>
  );
}
