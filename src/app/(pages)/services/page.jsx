'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import serviceCategories from '@/lib/serviceCategories';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AllServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-out-cubic',
      once: true,
    });
  }, []);

  // Filter services by category and search
  const filteredServices = serviceCategories.filter(svc => {
    const matchesCategory =
      selectedCategory === 'All' ? true : svc.category === selectedCategory;
    const matchesSearch = svc.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Extract unique categories for filter buttons
  const uniqueCategories = [
    'All',
    ...Array.from(new Set(serviceCategories.map(svc => svc.category))),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-6 md:px-16 py-16">
      {/* Page Header */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 text-center md:text-left">
        All Services
      </h1>

      {/* Search Input */}
      <div className="flex justify-center md:justify-start mb-6">
        <input
          type="text"
          placeholder="Search services..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="px-5 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-700 focus:outline-none w-full md:w-1/3 text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Category Filter Buttons */}
      <div className="overflow-x-auto py-2 mb-12">
        <div className="flex gap-3 min-w-max">
          {uniqueCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap px-5 py-2 rounded-full font-medium transition flex-shrink-0 shadow-md ${
                selectedCategory === cat
                  ? 'bg-[#326BFD] text-white shadow-lg scale-105'
                  : 'bg-gray-200 text-gray-700 hover:bg-[#326BFD] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredServices.map((svc, idx) => (
          <div
            key={idx}
            className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer group"
            data-aos="fade-up"
            data-aos-delay={`${idx * 50}`}
          >
            <Image
              src={svc.image}
              alt={svc.name}
              width={400}
              height={250}
              className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white font-semibold text-lg md:text-xl drop-shadow-md">
                {svc.name}
              </h3>
              <p className="text-white text-xs md:text-sm mt-1 drop-shadow-md">
                {svc.description || `Professional ${svc.name.toLowerCase()} services.`}
              </p>
              <span className="text-white text-xs mt-1 inline-block bg-blue px-2 py-1 rounded-md">
                {svc.category}
              </span>
              <button className="mt-3 px-4 py-2 bg- bg-[#326BFD] hover:bg-blue-700 text-white rounded-md text-sm shadow-lg transition w-full text-center">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* No Services Found */}
      {filteredServices.length === 0 && (
        <p className="text-center text-gray-500 mt-20 text-lg">
          No services match your search or selected category.
        </p>
      )}
    </div>
  );
}
