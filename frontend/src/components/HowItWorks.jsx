
import React from "react";

const steps = [
  {
    number: "01",
    icon: "◎",
    title: "Explore the Basics",
    description:
      "Understand currency pairs, pips, spreads, market sessions, and how the forex market works.",
  },
  {
    number: "02",
    icon: "↗",
    title: "Analyze the Market",
    description:
      "Learn about price charts, market trends, technical analysis, and economic events.",
  },
  {
    number: "03",
    icon: "◇",
    title: "Practice Your Strategy",
    description:
      "Develop a trading plan and practise with a demo account before risking real money.",
  },
  {
    number: "04",
    icon: "✓",
    title: "Manage Your Risk",
    description:
      "Learn about stop-loss orders, position sizing, and protecting your trading capital.",
  },
];

function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="section-heading">
        <span className="section-label">YOUR PATH TO LEARNING</span>

        <h2>Forex Trading, Made Simpler</h2>

        <p>
          Build your knowledge step by step with a structured approach
          to understanding the currency markets.
        </p>
      </div>

      <div className="steps-grid">
        {steps.map((step) => (
          <article className="step-card" key={step.number}>
            <div className="step-top">
              <span className="step-number">{step.number}</span>
              <span className="step-icon">{step.icon}</span>
            </div>

            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>

      <div className="learning-note">
        <span className="learning-note-icon">i</span>
        <p>
          Forex trading involves significant risk. Education and practice
          can help you understand the risks but cannot guarantee profits.
        </p>
      </div>
    </section>
  );
}

export default HowItWorks;
