'use client';

import { useEffect } from 'react';
import UserHeader from "@/components/UserHeader";
import Head from "next/head";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

export default function Home() {
  // 🔹 Initialize AOS once
  useEffect(() => {
    AOS.init({
      duration: 800,      // animation duration (ms)
      once: false,         // only animate once
      easing: 'ease-in-out', // smooth easing
    });
  }, []);

  return (
    <>
      <Head>
        <title>Tiptop Help Center</title>
      </Head>

      <UserHeader />

      <div className="min-h-screen bg-white font-sans text-black">
        {/* 🔍 Banner with Search Bar */}
        <div className="relative w-full h-[300px] md:h-[400px]" data-aos="zoom-in">
          <img
            src="/images/Vector(16).png"
            alt="Top Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <input
              type="text"
              placeholder="How can we assist you today?"
              className="w-full sm:w-[400px] md:w-[500px] px-5 py-3 rounded-md text-white bg-black/30 backdrop-blur border border-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* 📂 Categories */}
        <section className="py-12 text-center bg-gray-50">
          <h2 className="text-2xl font-semibold mb-10" data-aos="fade-down">
            Categories
          </h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6"
            data-aos="fade-up"
          >
            {[
              {
                img: "/images/Vector(15).png",
                title: "New to Tiptop Shine",
                desc: "Find everything you need to kickstart your experience",
              },
              {
                img: "/images/Vector(14).png",
                title: "Professionals",
                desc: "Help topics for pros using Tiptop Shine",
              },
              {
                img: "/images/Vector(13).png",
                title: "Customers",
                desc: "Getting started and using Tiptop Shine easily",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="mx-auto w-14 h-14 mb-4"
                />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ⭐ Popular */}
        <section className="bg-white py-12" data-aos="fade-up">
          <h2 className="text-center text-2xl font-semibold mb-10">Popular</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6 text-blue-600 text-sm">
            <ul className="space-y-3 list-disc list-inside" data-aos="fade-right">
              <li>What is Tiptop Shine and how does it work?</li>
              <li>How do ratings work?</li>
              <li>How do I refer a friend?</li>
              <li>How do credits and points work?</li>
              <li>How can I view my invoices?</li>
            </ul>
            <ul className="space-y-3 list-disc list-inside" data-aos="fade-left">
              <li>What are credit pack subscriptions?</li>
              <li>What is the cost for cancellations?</li>
              <li>What does it mean for Tiptop Pro?</li>
              <li>What is the impact of my ratings?</li>
              <li>How do I cancel or delete my account?</li>
            </ul>
          </div>
        </section>

        {/* 📞 Contact Us */}
        <section className="py-12 bg-gray-50 text-center" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-10">Connect with us</h2>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-4xl mx-auto px-6">
            <div
              className="bg-white p-6 border rounded-md flex-1"
              data-aos="fade-right"
            >
              <p className="font-semibold mb-2">Contact us via support request</p>
              <button className="text-blue-600 underline">Submit a request</button>
            </div>
            <div
              className="bg-white p-6 border rounded-md flex-1"
              data-aos="fade-left"
            >
              <p className="font-semibold mb-2">Call us</p>
              <p>1-855-456-6789</p>
            </div>
          </div>
        </section>

        {/* 📢 Footer CTA */}
        <div className="bg-blue-100 text-center py-8 px-4" data-aos="zoom-in-up">
          <p className="text-gray-800 text-lg mb-3 font-medium">
            Need help finding what you need?
          </p>
          <Link href='/helpdashboard/request-form' >
          
          <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
            Submit a request
          </button>
          </Link>
        </div>
      </div>
    </>
  );
}
