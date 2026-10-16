
import React, { useState } from "react";

const questions = [
  {
    question: "What is forex trading?",
    answer:
      "Forex trading is the buying and selling of currencies in the foreign exchange market. Traders speculate on changes in exchange rates between currency pairs.",
  },
  {
    question: "Do I need experience to get started?",
    answer:
      "No. Beginners can start by learning basic forex terminology, understanding charts, and practising with a demo account before considering live trading.",
  },
  {
    question: "Can I make guaranteed profits from forex?",
    answer:
      "No. Forex trading carries financial risk, and losses are possible. No strategy, indicator, or educational resource can guarantee profits.",
  },
  {
    question: "How much money do I need to start trading?",
    answer:
      "The amount depends on the broker, account type, and applicable requirements. Start by learning and practising with a demo account. Never trade money you cannot afford to lose.",
  },
  {
    question: "Does ManTechForex provide live market prices?",
    answer:
      "Live prices depend on the market-data service connected to the platform. Any sample prices shown before that integration should be treated as illustrative, not real-time quotes.",
  },
  {
    question: "Is forex trading suitable for everyone?",
    answer:
      "Not necessarily. Trading may be unsuitable for people who cannot afford financial losses. Understand the risks, check your local regulations, and research any broker before depositing money.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-section" id="faq">
      <div className="section-heading">
        <span className="section-label">GOT QUESTIONS?</span>

        <h2>Frequently Asked Questions</h2>

        <p>
          Find answers to common questions about forex and getting started.
        </p>
      </div>

      <div className="faq-list">
        {questions.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <article
              className={`faq-item ${isOpen ? "active" : ""}`}
              key={item.question}
            >
              <button
                className="faq-question"
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span>{item.question}</span>
                <span className="faq-toggle">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;
