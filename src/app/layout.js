'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { usePathname } from 'next/navigation';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import UserHeader from "@/components/UserHeader";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  // Pages jahan upar wala header nahi dikhana (black login wala)
  const hideHeaderOn = ["/general-dashboard","/myresponse", "/leads","/setting","/profile","/helpdashboard"]; // example

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* Agar current page in pages me nahi hai to hi show karo Header */}
        {!hideHeaderOn.includes(pathname) && (
          <header data-aos="fade-down">
            <Header />
          </header>
        )}

        {/* UserHeader sirf dashboard par */}
        {pathname === "/general-dashboard" && (
          <header data-aos="fade-down">
            <UserHeader />
          </header>
        )}

        <main className="flex-grow" data-aos="fade-up">
          {children}
        </main>

        <footer className="mt-auto w-full" data-aos="fade-up">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
