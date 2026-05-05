'use client';

import { useState, useEffect } from 'react';
import RequestPopup from '@/components/RequestPopup';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function RequestSection() {
  const [showModal, setShowModal] = useState(false);
  const [requestData, setRequestData] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });

    const saved = localStorage.getItem('requestData');
    if (saved) {
      setRequestData(JSON.parse(saved));
      setShowModal(true); // Auto open popup
    }
  }, []);

  return (
    <section className="py-16 px-6 md:px-16 bg-gray-50 min-h-screen">

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          Your Request
        </h2>

        {requestData && (
          <p className="mt-4 text-gray-600">
            Service: <span className="font-semibold">{requestData.service}</span> | 
            Postcode: <span className="font-semibold">{requestData.postcode}</span>
          </p>
        )}
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-10 text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">
          Find Service For Your Business On TipTop Shine
        </h3>

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition"
        >
          Place New Request
        </button>
      </div>

      {showModal && (
        <RequestPopup onClose={() => setShowModal(false)} />
      )}
    </section>
  );
}