// "use client";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function HowItWorksPage() {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <div className="page">

//       {/* HERO */}
//       <section className="hero">
//         <div className="hero-content" data-aos="fade-up">
//           <h1>How Tiptop Shine Works</h1>
//           <p>
//             Simple. Fast. Secure.  
//             Connect with trusted professionals in just a few steps.
//           </p>
//         </div>
//       </section>

//       {/* FOR CUSTOMERS */}
//       <section className="section">
//         <h2 data-aos="fade-up">For Customers</h2>

//         <div className="steps">

//           <div className="step-card" data-aos="fade-right">
//             <div className="number">1</div>
//             <h3>Post Your Requirement</h3>
//             <p>
//               Tell us what service you need. Add details, budget, and timeline.
//             </p>
//           </div>

//           <div className="step-card" data-aos="fade-left">
//             <div className="number">2</div>
//             <h3>Receive Free Quotes</h3>
//             <p>
//               Get multiple quotes from verified professionals near you.
//             </p>
//           </div>

//           <div className="step-card" data-aos="fade-right">
//             <div className="number">3</div>
//             <h3>Compare & Hire</h3>
//             <p>
//               Compare ratings, reviews, pricing and hire the best professional.
//             </p>
//           </div>

//           <div className="step-card" data-aos="fade-left">
//             <div className="number">4</div>
//             <h3>Get the Job Done</h3>
//             <p>
//               Secure communication and smooth service delivery.
//             </p>
//           </div>

//         </div>
//       </section>

//       {/* FOR PROFESSIONALS */}
//       <section className="section alt">
//         <h2 data-aos="fade-up">For Professionals</h2>

//         <div className="steps">

//           <div className="step-card" data-aos="zoom-in">
//             <div className="number">1</div>
//             <h3>Create Profile</h3>
//             <p>
//               Sign up and create a professional profile with your services.
//             </p>
//           </div>

//           <div className="step-card" data-aos="zoom-in" data-aos-delay="200">
//             <div className="number">2</div>
//             <h3>Get Leads</h3>
//             <p>
//               Receive job leads from customers looking for your services.
//             </p>
//           </div>

//           <div className="step-card" data-aos="zoom-in" data-aos-delay="400">
//             <div className="number">3</div>
//             <h3>Send Quotes</h3>
//             <p>
//               Send competitive quotes and communicate directly with customers.
//             </p>
//           </div>

//           <div className="step-card" data-aos="zoom-in" data-aos-delay="600">
//             <div className="number">4</div>
//             <h3>Grow Your Business</h3>
//             <p>
//               Build reputation, collect reviews and scale your income.
//             </p>
//           </div>

//         </div>
//       </section>

//       {/* TRUST SECTION */}
//       <section className="trust">
//         <div data-aos="fade-up">
//           <h2>Trusted. Transparent. Secure.</h2>
//           <p>
//             We verify professionals, protect communications, and ensure
//             a safe experience for both customers and service providers.
//           </p>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="cta" data-aos="fade-up">
//         <h2>Ready to Get Started?</h2>
//         <p>Post your job today or join as a professional.</p>
//         <div className="cta-buttons">
//           <button className="primary">Post a Job</button>
//           <button className="secondary">Join as Pro</button>
//         </div>
//       </section>

//       {/* STYLES */}
//       <style jsx>{`
//         .page {
//           background: linear-gradient(180deg, #0f172a, #020617);
//           color: white;
//           min-height: 100vh;
//         }

//         .hero {
//           padding: 120px 20px;
//           text-align: center;
//           background: radial-gradient(circle at center, #1e293b, #0f172a);
//         }

//         .hero h1 {
//           font-size: 50px;
//           background: linear-gradient(90deg, #3b82f6, #06b6d4);
//           -webkit-background-clip: text;
//           color: transparent;
//         }

//         .hero p {
//           margin-top: 20px;
//           font-size: 18px;
//           max-width: 650px;
//           margin-left: auto;
//           margin-right: auto;
//           color: #cbd5e1;
//         }

//         .section {
//           padding: 100px 20px;
//           text-align: center;
//         }

//         .section.alt {
//           background: #111827;
//         }

//         .steps {
//           margin-top: 60px;
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//           gap: 40px;
//           max-width: 1200px;
//           margin-left: auto;
//           margin-right: auto;
//         }

//         .step-card {
//           background: rgba(255,255,255,0.05);
//           padding: 40px 25px;
//           border-radius: 16px;
//           backdrop-filter: blur(10px);
//           transition: 0.3s;
//           position: relative;
//         }

//         .step-card:hover {
//           transform: translateY(-10px);
//           background: rgba(255,255,255,0.08);
//         }

//         .number {
//           font-size: 28px;
//           font-weight: bold;
//           margin-bottom: 15px;
//           color: #3b82f6;
//         }

//         .trust {
//           padding: 120px 20px;
//           text-align: center;
//           background: linear-gradient(90deg, #3b82f6, #06b6d4);
//         }

//         .trust p {
//           max-width: 700px;
//           margin: 20px auto 0;
//         }

//         .cta {
//           padding: 120px 20px;
//           text-align: center;
//         }

//         .cta-buttons {
//           margin-top: 30px;
//           display: flex;
//           justify-content: center;
//           gap: 20px;
//           flex-wrap: wrap;
//         }

//         .primary {
//           padding: 12px 30px;
//           border-radius: 30px;
//           border: none;
//           font-weight: bold;
//           cursor: pointer;
//           background: linear-gradient(90deg, #3b82f6, #06b6d4);
//           color: white;
//         }

//         .secondary {
//           padding: 12px 30px;
//           border-radius: 30px;
//           border: 2px solid #3b82f6;
//           background: transparent;
//           color: #3b82f6;
//           cursor: pointer;
//         }

//         @media (max-width: 768px) {
//           .hero h1 {
//             font-size: 32px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }


"use client";

export default function HowItWorksPage() {
  return (
    <div className="bg-[#f5f6f8] text-gray-800">

      {/* HERO */}
      <section className="text-center py-24 px-6 bg-white">
        <p className="text-gray-500 mb-2">How it works</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Bark for Pros
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
          Bark is the Amazon of services. Millions of people use us worldwide
          to find what they need every day.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow transition">
          Join as a Professional
        </button>
      </section>

      {/* SECTION 1 */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="customer"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Customers come to us with their needs
            </h2>
            <p className="text-gray-600 mb-4">
              We support every imaginable service, for both individuals and
              small businesses. We collect detailed information about exactly
              what the customer is looking for.
            </p>
            <p className="text-gray-600">
              Smart customers use Bark because they know we’ll provide relevant,
              professional companies that can meet their needs.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 2 */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Customers find you on Bark
            </h2>
            <p className="text-gray-600 mb-4">
              Customers then find you on Bark and can reach out to you.
              We’ll also send you leads matching what you do.
            </p>
            <p className="text-gray-600">
              We charge a small fee for each introduction and give you
              the phone number and email address of each potential
              customer so you can reach out.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
              alt="leads"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* SECTION 3 */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
              alt="register"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Grow your business. Fast.
            </h2>
            <p className="text-gray-600 mb-4">
              We take the hassle out of marketing your services.
              Bark professionals receive hot, live leads as soon as they are placed.
            </p>
            <p className="text-gray-600">
              Join as a professional now and get instant access
              to leads for your business.
            </p>
          </div>

        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Plus tons of other benefits
            </h2>
            <p className="text-gray-600">
              As a Bark Pro, you’ll get an online profile which boosts
              your web presence and helps promote your business.
              You’ll also get access to our award-winning customer success team.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1581090700227-4c4f50b8e9c9"
              className="rounded-xl shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              className="rounded-xl shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              className="rounded-xl shadow-md col-span-2"
            />
          </div>

        </div>
      </section>

      {/* REGISTER CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Register now</h2>

        <div className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="What service do you provide?"
            className="flex-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow transition">
            Get started
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-10 mt-10 text-sm text-gray-600">
          <div>✔ Create your account in minutes</div>
          <div>✔ Start receiving leads today</div>
          <div>✔ No commission or hidden fees</div>
        </div>
      </section>

    </div>
  );
}