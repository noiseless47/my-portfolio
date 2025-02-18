'use client';

import EducationSection from '@/components/EducationSection';

export default function EducationPage() {
  return (
    <main className="min-h-screen flex flex-col pt-28 pb-16 bg-white dark:bg-gradient-to-b dark:from-[#0f0f0f] dark:via-[#151515] dark:to-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] bg-clip-text text-transparent">
          Education
        </h1>
        <EducationSection />
      </div>
    </main>
  );
} 