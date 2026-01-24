'use client';

import Link from 'next/link';
import React from 'react';
import { FiSearch, FiPhone, FiMail } from 'react-icons/fi';

const categories = [
  {
    title: "New to TipTop-Shine",
    description: "Learn everything you need to start your journey.",
  },
  {
    title: "Professionals",
    description: "How TipTop-Shine works for professionals.",
  },
  {
    title: "Customers",
    description: "Using TipTop-Shine and getting quotes.",
  },
];

const faqs = [
  "What is TipTop-Shine and how does it work?",
  "How do I get leads?",
  "What is a credit and how much does it cost?",
  "Where do I find my invoices?",
  "What are Credit Pack Subscriptions?",
  "How do I refer a friend?",
  "What is the Get Hired Guarantee?",
  "What is TipTop-Shine Verified?",
  "What is Elite Pro?",
  "What is Enquiries?",
  "How many responses can a customer receive?",
  "How can I submit a general enquiry?",
];

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Search Section */}
      <div className="bg-gradient-to-r from-blue-50 to-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          How can we help you?
        </h1>
        <div className="max-w-xl mx-auto">
          <div className="flex items-center bg-white rounded-lg shadow-md overflow-hidden">
            <FiSearch className="ml-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full p-3 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
          >
            <h2 className="font-semibold text-lg mb-2">{cat.title}</h2>
            <p className="text-gray-600">{cat.description}</p>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer">
              <p className="text-blue-600 text-sm">{faq}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Get in Touch */}
      <div className="bg-white py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-4 justify-center items-center">
          <div className="flex items-center gap-3 border p-4 rounded-lg shadow w-full md:w-1/2">
            <FiMail className="text-blue-600" size={24} />
            <div>
              <p className="font-semibold">Contact Us</p>
              <p className="text-gray-600 text-sm">Submit a request</p>
            </div>
          </div>
          <div className="flex items-center gap-3 border p-4 rounded-lg shadow w-full md:w-1/2">
            <FiPhone className="text-blue-600" size={24} />
            <div>
              <p className="font-semibold">Call Us: Mon – Fri</p>
              <p className="text-gray-600 text-sm">(+44) 02 03 697 0237</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-blue-50 py-8 text-center">
        <p className="font-semibold text-gray-800 mb-3">
          Can't find what you're looking for?
        </p>

        <Link href='/help-center/request-form'>
        
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition font-semibold">
          Submit a Request
        </button>
        </Link>
      </div>

    </div>
  );
}
