'use client';

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[#fafafa] dark:bg-[#0f0f0f]" />
      <div className="absolute inset-0 bg-grid-gray-200/50 dark:bg-grid-white/[0.05]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#fafafa] dark:to-[#0f0f0f]" />
    </div>
  );
} 