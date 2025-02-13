'use client';  // Need this for client-side animations

import HeroSection from '../components/HeroSection';
import ProjectCard from '../components/ProjectCard';
import { type NextPage } from 'next';

const Home: NextPage = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A revolutionary web application built with Next.js and TypeScript",
      link: "#",
      tags: ["Next.js", "React", "TypeScript"],
      image: "https://placehold.co/600x400"  // Using placeholder image for now
    },
    {
      title: "Project 2",
      description: "Mobile-first responsive design with modern animations",
      link: "#",
      tags: ["React Native", "Tailwind", "Firebase"],
      image: "https://placehold.co/600x400"
    },
    {
      title: "Project 3",
      description: "Full-stack e-commerce platform with real-time updates",
      link: "#",
      tags: ["MongoDB", "Express", "React", "Node"],
      image: "https://placehold.co/600x400"
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-[#0f0f0f] dark:via-[#151515] dark:to-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <section className="py-20">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills and experience
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
