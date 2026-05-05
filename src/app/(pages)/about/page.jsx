"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import serviceCategories from "@/lib/serviceCategories";
import Link from "next/link";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const popularServices = serviceCategories.slice(0, 6);

  return (
    <div className="page">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content" data-aos="fade-up">
          <h1>About Tiptop Shine</h1>
          <p>
            Tiptop Shine is a trusted multi-service marketplace connecting
            customers with verified professionals across 100+ service categories.
          </p>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats">
        <div data-aos="fade-up">
          <h2>100+</h2>
          <p>Services Available</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <h2>10k+</h2>
          <p>Happy Customers</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
          <h2>5k+</h2>
          <p>Verified Professionals</p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mission-vision">
        <div className="card" data-aos="fade-right">
          <h3>Our Mission</h3>
          <p>
            To simplify the way people find trusted professionals by offering
            fast quotes, transparent pricing, and secure communication —
            all in one platform.
          </p>
        </div>

        <div className="card" data-aos="fade-left">
          <h3>Our Vision</h3>
          <p>
            To become the leading global service marketplace where customers
            confidently hire professionals for home, business, wellness,
            events, and personal needs.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why">
        <h2 data-aos="fade-up">Why Choose Tiptop Shine?</h2>

        <div className="why-grid">
          <div className="why-card" data-aos="zoom-in">
            <h4>Verified Experts</h4>
            <p>Background-checked & reviewed professionals.</p>
          </div>

          <div className="why-card" data-aos="zoom-in" data-aos-delay="200">
            <h4>Fast Quotes</h4>
            <p>Receive multiple quotes within minutes.</p>
          </div>

          <div className="why-card" data-aos="zoom-in" data-aos-delay="400">
            <h4>Secure Communication</h4>
            <p>Safe messaging & booking system.</p>
          </div>

          <div className="why-card" data-aos="zoom-in" data-aos-delay="600">
            <h4>Wide Service Range</h4>
            <p>From cleaning to legal & wellness services.</p>
          </div>
        </div>
      </section>

      {/* POPULAR SERVICES */}
      <section className="popular">
        <h2 data-aos="fade-up">Popular Services</h2>
        <div className="popular-grid">
          {popularServices.map((service, index) => (
            <div className="service-card" key={index} data-aos="fade-up">
              <img src={service.image} alt={service.name} />
              <h4>{service.name}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta" data-aos="fade-up">
        <h2>Ready to Find the Right Professional?</h2>
        <p>Get free quotes today and hire with confidence.</p>
       <Link href='/services'>
        <button>Explore Services</button>
       
       </Link>
      </section>

      {/* STYLES */}
      <style jsx>{`
        .page {
          background: linear-gradient(180deg, #0f172a, #020617);
          color: white;
          min-height: 100vh;
          padding-bottom: 100px;
        }

        .hero {
          padding: 120px 20px;
          text-align: center;
          background: radial-gradient(circle at center, #1e293b, #0f172a);
        }

        .hero h1 {
          font-size: 56px;
          background: linear-gradient(90deg, #3b82f6, #06b6d4);
          -webkit-background-clip: text;
          color: transparent;
        }

        .hero p {
          margin-top: 20px;
          font-size: 18px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          color: #cbd5e1;
        }

        .stats {
          display: flex;
          justify-content: center;
          gap: 60px;
          text-align: center;
          padding: 80px 20px;
          background: #111827;
        }

        .stats h2 {
          font-size: 40px;
          color: #3b82f6;
        }

        .mission-vision {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          padding: 80px 20px;
          max-width: 1100px;
          margin: auto;
        }

        .card {
          background: rgba(255, 255, 255, 0.05);
          padding: 40px;
          border-radius: 16px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .why {
          text-align: center;
          padding: 100px 20px;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }

        .why-card {
          background: #1e293b;
          padding: 30px;
          border-radius: 14px;
          transition: 0.3s;
        }

        .why-card:hover {
          transform: translateY(-8px);
          background: #334155;
        }

        .popular {
          padding: 100px 20px;
          max-width: 1200px;
          margin: auto;
          text-align: center;
        }

        .popular-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }

        .service-card {
          background: #1e293b;
          border-radius: 16px;
          overflow: hidden;
          transition: 0.3s;
        }

        .service-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        .service-card h4 {
          margin: 15px;
        }

        .service-card p {
          margin: 0 15px 20px;
          color: #cbd5e1;
          font-size: 14px;
        }

        .cta {
          text-align: center;
          padding: 120px 20px;
          background: linear-gradient(90deg, #3b82f6, #06b6d4);
          color: white;
        }

        .cta button {
          margin-top: 20px;
          padding: 12px 30px;
          border-radius: 30px;
          border: none;
          font-size: 16px;
          cursor: pointer;
          background: white;
          color: #0f172a;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 34px;
          }

          .stats {
            flex-direction: column;
            gap: 30px;
          }
        }
      `}</style>
    </div>
  );
}