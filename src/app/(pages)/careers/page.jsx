"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CareersPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const jobs = [
    {
      title: "Frontend Developer (React / Next.js)",
      location: "Remote",
      type: "Full Time",
      desc: "Build premium UI components and scalable frontend systems for our marketplace platform."
    },
    {
      title: "Backend Developer (Node.js / MongoDB)",
      location: "Remote",
      type: "Full Time",
      desc: "Develop APIs, optimize database queries, and maintain secure backend services."
    },
    {
      title: "Digital Marketing Specialist",
      location: "Remote",
      type: "Contract",
      desc: "Drive traffic, optimize SEO, and manage paid campaigns to grow Tiptop Shine."
    },
    {
      title: "Customer Success Manager",
      location: "Onsite / Hybrid",
      type: "Full Time",
      desc: "Ensure customer satisfaction and build strong relationships with professionals."
    }
  ];

  return (
    <div className="page">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content" data-aos="fade-up">
          <h1>Join Tiptop Shine</h1>
          <p>
            We're building the future of service marketplaces. 
            Join our mission to connect customers with trusted professionals worldwide.
          </p>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="benefits">
        <h2 data-aos="fade-up">Why Work With Us?</h2>
        <div className="benefits-grid">
          <div className="benefit-card" data-aos="zoom-in">
            <h4>🚀 Growth Opportunities</h4>
            <p>Work on real scalable SaaS products and grow your career.</p>
          </div>
          <div className="benefit-card" data-aos="zoom-in" data-aos-delay="200">
            <h4>🌍 Remote Friendly</h4>
            <p>Flexible work culture with remote & hybrid options.</p>
          </div>
          <div className="benefit-card" data-aos="zoom-in" data-aos-delay="400">
            <h4>💡 Innovation Focused</h4>
            <p>We value creativity, ownership, and modern technologies.</p>
          </div>
          <div className="benefit-card" data-aos="zoom-in" data-aos-delay="600">
            <h4>🤝 Supportive Team</h4>
            <p>Collaborative environment with mentorship & learning.</p>
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="jobs">
        <h2 data-aos="fade-up">Open Positions</h2>

        <div className="job-grid">
          {jobs.map((job, index) => (
            <div className="job-card" key={index} data-aos="fade-up">
              <h3>{job.title}</h3>
              <div className="meta">
                <span>{job.location}</span>
                <span>{job.type}</span>
              </div>
              <p>{job.desc}</p>
              <button>Apply Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* HIRING PROCESS */}
      <section className="process">
        <h2 data-aos="fade-up">Our Hiring Process</h2>

        <div className="timeline">
          <div data-aos="fade-right">
            <h4>1. Application Review</h4>
            <p>We review your profile and experience.</p>
          </div>
          <div data-aos="fade-left">
            <h4>2. Interview</h4>
            <p>Technical & culture fit interview.</p>
          </div>
          <div data-aos="fade-right">
            <h4>3. Final Discussion</h4>
            <p>Offer, expectations & onboarding process.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" data-aos="fade-up">
        <h2>Don’t See Your Role?</h2>
        <p>We’re always looking for talented individuals.</p>
        <button>Send Your Resume</button>
      </section>

      {/* STYLES */}
      <style jsx>{`
        .page {
          background: linear-gradient(180deg, #0f172a, #020617);
          color: white;
          min-height: 100vh;
        }

        .hero {
          padding: 120px 20px;
          text-align: center;
          background: radial-gradient(circle at center, #1e293b, #0f172a);
        }

        .hero h1 {
          font-size: 50px;
          background: linear-gradient(90deg, #3b82f6, #06b6d4);
          -webkit-background-clip: text;
          color: transparent;
        }

        .hero p {
          margin-top: 20px;
          font-size: 18px;
          max-width: 700px;
          margin: auto;
          color: #cbd5e1;
        }

        .benefits {
          padding: 100px 20px;
          text-align: center;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }

        .benefit-card {
          background: rgba(255,255,255,0.05);
          padding: 30px;
          border-radius: 16px;
          backdrop-filter: blur(10px);
          transition: 0.3s;
        }

        .benefit-card:hover {
          transform: translateY(-8px);
          background: rgba(255,255,255,0.08);
        }

        .jobs {
          padding: 100px 20px;
          max-width: 1200px;
          margin: auto;
          text-align: center;
        }

        .job-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }

        .job-card {
          background: #1e293b;
          padding: 30px;
          border-radius: 16px;
          text-align: left;
          transition: 0.3s;
        }

        .job-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        .meta {
          display: flex;
          gap: 15px;
          font-size: 14px;
          color: #94a3b8;
          margin: 10px 0;
        }

        .job-card button {
          margin-top: 20px;
          padding: 10px 20px;
          border-radius: 30px;
          border: none;
          background: linear-gradient(90deg, #3b82f6, #06b6d4);
          color: white;
          cursor: pointer;
        }

        .process {
          padding: 100px 20px;
          text-align: center;
        }

        .timeline {
          max-width: 800px;
          margin: 50px auto;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .timeline div {
          background: #1e293b;
          padding: 25px;
          border-radius: 12px;
        }

        .cta {
          text-align: center;
          padding: 120px 20px;
          background: linear-gradient(90deg, #3b82f6, #06b6d4);
        }

        .cta button {
          margin-top: 20px;
          padding: 12px 30px;
          border-radius: 30px;
          border: none;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          background: white;
          color: #0f172a;
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 32px;
          }
        }
      `}</style>
    </div>
  );
}