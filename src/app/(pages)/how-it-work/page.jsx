"use client";

import Image from "next/image";
import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <div className="bg-[#f4f6f9] text-[#1f2a44]">

      {/* ================= HERO ================= */}
      <section className="text-center py-24 px-6 bg-[#eef1f5]">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          How it works
        </h1>
      </section>

      {/* ================= SECTION 1 ================= */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Left Text */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Tell us what you need
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Whatever the service you’re looking for, we’ll help you find a
              professional for the job.
            </p>
            <Link href='join-professional'>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md transition">
              Find a Professional
            </button>
            </Link>
            
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="service"
                width={600}
                height={500}
                className="w-full object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -left-10 top-10 bg-white p-5 rounded-xl shadow-xl hidden md:block">
              <p className="font-medium text-sm mb-2">Photography</p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>General Photography</li>
                <li>Wedding Photography</li>
                <li>Portrait Photographers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2 ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0"
              alt="map"
              width={600}
              height={500}
              className="w-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Let us do the legwork
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We’ll search thousands of professionals to find the best ones for
              what you need.
            </p>
          </div>

        </div>
      </section>

      {/* ================= SECTION 3 ================= */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Compare the professionals
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Check out their profiles, reviews and websites to help you make
              a decision.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="profile"
              width={600}
              height={500}
              className="w-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================= SECTION 4 ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
              alt="chat"
              width={600}
              height={500}
              className="w-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Choose your favourite
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Get in touch, compare quotes and choose the professional that
              fits your needs best.
            </p>
          </div>

        </div>
      </section>

      {/* ================= SECTION 5 ================= */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Leave a review
            </h2>
            <p className="text-gray-600 leading-relaxed">
              After they’ve done the work, remember to leave a review on Bark
              and help fellow customers find the best professionals.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
              alt="review"
              width={600}
              height={500}
              className="w-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-[#eef1f5] py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to find a professional?
        </h2>
        <p className="text-gray-600 mb-8">
          Now you know how it works, start looking for a professional.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
            <Link href='join-professional'>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md transition">
              Find a Professional
            </button>
            </Link>
          {/* <input
            type="text"
            placeholder="What service are you looking for?"
            className="flex-1 px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Postcode"
            className="md:w-40 px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md transition">
            Search
          </button> */}
        </div>
      </section>

    </div>
  );
}