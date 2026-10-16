import { UserPlus, ArrowUpRight, Play } from "lucide-react";
import React from "react";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <span className="hero-badge">
          <span className="status-dot"></span>
          YOUR FOREX JOURNEY STARTS HERE
        </span>

        <h1>
          Trade Smarter.
          <br />
          <span>Learn the Markets.</span>
        </h1>

        <p className="hero-description">
          Explore the foreign exchange market with practical learning
          resources, market insights, and tools designed to support
          your trading journey.
        </p>

        
      <div className="hero-buttons">
        <a href="/register" className="btn-primary">
          <UserPlus size={18} />
          <span>Create Account</span>
          <ArrowUpRight size={18} />
        </a>

        <a href="#tools" className="btn-secondary">
          <Play size={17} />
          <span>Try Demo</span>
        </a>
      </div>


        <div className="hero-highlights">
          <div>
            <strong>Learn</strong>
            <span>Forex fundamentals</span>
          </div>

          <div>
            <strong>Analyze</strong>
            <span>Market movements</span>
          </div>

          <div>
            <strong>Practice</strong>
            <span>Build your skills</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="chart-card">
          <div className="chart-header">
            <div>
              <span className="chart-label">MARKET WATCH</span>
              <h3>EUR / USD</h3>
            </div>

            <span className="chart-tag">Forex</span>
          </div>

          <div className="chart-price">
            <strong>EUR/USD</strong>
            <span>Currency Pair</span>
          </div>

          <div className="chart-visual">
            <svg
              viewBox="0 0 400 180"
              role="img"
              aria-label="Illustrative forex market trend chart"
            >
              <defs>
                <linearGradient
                  id="chartFill"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#20b2a6"
                    stopOpacity=".3"
                  />
                  <stop
                    offset="100%"
                    stopColor="#20b2a6"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>

              {[35, 75, 115, 155].map((y) => (
                <line
                  key={y}
                  x1="0"
                  y1={y}
                  x2="400"
                  y2={y}
                  stroke="#263b43"
                  strokeDasharray="4 5"
                />
              ))}

              <path
                d="M0 135 L35 115 L65 125 L100 85 L130 100 L165 65 L195 83 L230 45 L265 60 L300 30 L330 48 L365 18 L400 28 L400 180 L0 180 Z"
                fill="url(#chartFill)"
              />

              <path
                d="M0 135 L35 115 L65 125 L100 85 L130 100 L165 65 L195 83 L230 45 L265 60 L300 30 L330 48 L365 18 L400 28"
                fill="none"
                stroke="#20b2a6"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <circle cx="365" cy="18" r="5" fill="#20b2a6" />
            </svg>
          </div>

          <div className="chart-footer">
            <span>Market visualization</span>
            <span className="chart-live-dot"></span>
            <span>Illustrative data</span>
          </div>
        </div>

        <div className="floating-note">
          <span className="floating-icon">↗</span>

          <div>
            <strong>Learn. Analyze. Grow.</strong>
            <span>Build your trading knowledge</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
