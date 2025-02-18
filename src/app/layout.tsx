import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Asish Kumar Yeleti - Portfolio",
  description: "Personal portfolio of Asish Kumar Yeleti, showcasing my work and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={GeistSans.className}>
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" 
        />
      </head>
      <body className={`${GeistMono.className} dark:bg-[#0f0f0f] bg-[#fafafa] text-[#2d3436] dark:text-[#dfe6e9] transition-colors duration-300`}>
        <ThemeProvider>
          <Navbar />
          <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
