"use client";

import Link from "next/link";
import { useState } from "react";

export default function PricingPage() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      q: "Do I get the customer’s phone number or email address?",
      a: "Yes. When you respond to a lead you receive their phone number and email. You can also message directly inside the platform.",
    },
    {
      q: "Are follow-up messages extra?",
      a: "No. Once you purchase credits for a lead, you can message them without extra cost.",
    },
    {
      q: "Do credits expire?",
      a: "Credits remain valid for a long period. Check your dashboard for expiration details.",
    },
    {
      q: "Are there any hidden costs?",
      a: "No hidden fees. You only pay for the credits you choose to purchase.",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">

      {/* HERO */}
      <section className="text-center py-24 px-6 bg-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Pricing
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
          From the moment you sign up, we send you leads for free.
          You only pay to contact customers that are the right fit for your business.
        </p>
        <Link href='/join-professional'>
        
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition">
          Join as a Professional
        </button>
        </Link>
      </section>

      {/* CREDITS SECTION */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white p-10 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">Credits at the ready</h3>
            <p className="text-gray-200">
              We use a simple credit system. Buy a credit pack and simply use
              the credits to contact the customers you're interested in.
              No commission. No hidden fees.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">You're in control</h2>
            <p className="text-gray-600">
              You decide which leads you respond to and you'll know the cost
              in credits upfront. That way you always know how much you're spending.
            </p>
          </div>

        </div>
      </section>

      {/* JOB RELATED PRICES */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-4">Job-related prices</h2>
            <p className="text-gray-600">
              We calculate the cost of contacting a customer based on
              the service, job value, and supply & demand in your area.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 p-6 rounded-xl text-center shadow-sm">
              <p className="font-semibold">Web Design</p>
              <span className="text-blue-600 font-bold">10 Credits</span>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl text-center shadow-sm">
              <p className="font-semibold">Photography</p>
              <span className="text-blue-600 font-bold">8 Credits</span>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl text-center shadow-sm">
              <p className="font-semibold">Personal Training</p>
              <span className="text-blue-600 font-bold">6 Credits</span>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl text-center shadow-sm">
              <p className="font-semibold">Cleaning</p>
              <span className="text-blue-600 font-bold">5 Credits</span>
            </div>
          </div>

        </div>
      </section>

      {/* GUARANTEE */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-4">New business guaranteed</h2>
            <p className="text-gray-600">
              We're confident you'll win business with your first credit pack.
              If you don't, we'll return your credits. No questions asked.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-yellow-400 text-white w-48 h-48 flex items-center justify-center rounded-full shadow-xl font-bold text-center p-4">
              100% <br /> Hired Guarantee
            </div>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">FAQs</h2>

          {faqs.map((faq, index) => (
            <div key={index} className="border-b py-4">
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full text-left font-medium flex justify-between items-center"
              >
                {faq.q}
                <span>{open === index ? "-" : "+"}</span>
              </button>

              {open === index && (
                <p className="mt-3 text-gray-600">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-6">
          Start winning new business today
        </h2>
        <Link href='/join-professional'>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition">
          Join as a Professional
        </button>
        </Link>
        <Link href='/login'>
        <p className="mt-4 text-gray-500 cursor-pointer hover:underline">
          Login
        </p>
        </Link>
      </section>

    </div>
  );
}