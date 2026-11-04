import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">🎓 Placement Portal</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#jobs">Jobs</a>
          <a href="#companies">Companies</a>
          <a href="#about">About</a>
        </div>

        <div className="nav-buttons">
          <button
            className="login-btn"
            onClick={() => alert("Login page is coming soon!")}
          >
            Login
          </button>

          <button
            className="signup-btn"
            onClick={() => navigate("/signup")}
          >
            Signup
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">

          <h1>
            Student Placement &amp;
            <span> Job Portal</span>
          </h1>

          <p>
            Find the best job opportunities,
            upload your resume and get placed.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/signup")}
            >
              Get Started →
            </button>

            <a href="#jobs" className="secondary-btn">
              Browse Jobs
            </a>
          </div>

        </div>

        <div className="hero-image">
          <div className="job-card">
            <h2>💼</h2>
            <h2>Find Your Dream Job</h2>
            <p>Your Career Starts Here!</p>
            <span>🎓 🚀 💻</span>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="features" id="jobs">

        <div className="feature-box">
          <h2>💼</h2>
          <h3>100+ Jobs</h3>
          <p>Latest job openings for students</p>
        </div>

        <div className="feature-box" id="companies">
          <h2>🏢</h2>
          <h3>50+ Companies</h3>
          <p>Top companies hiring now</p>
        </div>

        <div className="feature-box">
          <h2>🎓</h2>
          <h3>500+ Students Placed</h3>
          <p>Students working in top brands</p>
        </div>

      </section>

      {/* Footer */}
      <footer className="footer" id="about">
        <h3>🎓 Placement Portal</h3>
        <p>
          © 2026 Student Placement Portal.
          All Rights Reserved.
        </p>
      </footer>

    </div>
  );
}

export default Home;
