'use client';  // Keep this for client-side animations

import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center bg-white dark:bg-gradient-to-b dark:from-[#0f0f0f] dark:via-[#151515] dark:to-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
      </div>
    </main>
  );
}
