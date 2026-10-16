
import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="footer-main">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            ManTech<span>Forex</span>
          </a>

          <p>
            Your destination for forex education, market insights,
            and trading resources. Learn, practise, and understand
            the markets before taking risks.
          </p>

          <a className="footer-email" href="mailto:info@mantechforex.com">
            Contact Us <span>↗</span>
          </a>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <a href="#home">Home</a>
          <a href="#markets">Markets</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#faq">FAQs</a>
        </div>

        <div className="footer-links">
          <h3>Learn</h3>
          <a href="#how-it-works">Forex Basics</a>
          <a href="#markets">Currency Pairs</a>
          <a href="#how-it-works">Risk Management</a>
          <a href="#faq">Trading Questions</a>
        </div>

        <div className="footer-links">
          <h3>Get Started</h3>
          <p>Build your knowledge before entering the markets.</p>
          <a href="#how-it-works" className="footer-cta">
            Start Learning <span>→</span>
          </a>
        </div>
      </div>

      <div className="footer-disclaimer">
        <strong>Risk Disclaimer</strong>
        <p>
          Forex and leveraged trading involve a high level of risk and
          may not be suitable for all investors. You could lose some
          or all of your invested capital. The information on this
          website is educational and does not constitute financial
          advice or a recommendation to buy or sell any instrument.
        </p>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} ManTechForex. All rights reserved.
        </p>

        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
