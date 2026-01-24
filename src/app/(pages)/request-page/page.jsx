'use client';

import { useState, useEffect } from 'react';
import RequestPopup from '@/components/RequestPopup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServicesGrid from '@/components/ServicesGrid';

export default function RequestSection() {
  const [showModal, setShowModal] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null); // hover index track karne ke liye

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  const suggestions = [
    { title: 'Gardening', image: '/images/gardening.webp' },
    { title: 'Personal Trainer', image: '/images/personal-trainer.webp' },
    { title: 'Web Design', image: '/images/web-design.webp' },
    { title: 'Cleaner', image: '/images/commercial-cleaning.jpeg' },
  ];

  return (
    <section className="py-12 px-4 md:px-16 bg-gray-50 text-gray-800 relative">
      {/* Heading */}
      <div className="text-center mb-10" data-aos="fade-down">
        <h2 className="text-3xl font-semibold">Your Request</h2>
      </div>

      {/* Hero Section */}
      <div
        className="bg-white shadow-md rounded-lg px-6 py-8 text-center max-w-4xl mx-auto mb-10"
        data-aos="fade-up"
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
          <span className="text-blue-600">Find Service</span>{' '}
          For Your Business On Tiptop Shine
        </h3>
        <p className="text-sm md:text-base text-gray-600 mt-4 mb-6">
          Most businesses could be getting a better deal on the services they use day to day. We’ve
          got thousands of suppliers ready and waiting to quote.
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="text-white rounded-3xl px-6 py-3 bg-blue-500 hover:bg-blue-600 text-xl transition"
        >
          Place New Request
        </button>
      </div>

      {/* Suggestions */}
      <div>
        <h4 className="text-xl font-semibold mb-6" data-aos="fade-down">
          You May Also Need
        </h4>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {suggestions.map((item, index) => (
            <div
              key={item.title}
              className="relative rounded-md overflow-hidden bg-white shadow hover:shadow-lg transition cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 150} // stagger effect
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />

              {/* Popup on hover */}
              {hoveredIndex === index && (
                <div className="absolute top-2 left-2 bg-white bg-opacity-90 p-2 rounded shadow-md text-sm font-semibold text-gray-800 z-10">
                  {item.title} Service Available!
                </div>
              )}

              <div className="p-4 text-center font-medium text-gray-700">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && <RequestPopup onClose={() => setShowModal(false)} />}
    </section>
  );
}
