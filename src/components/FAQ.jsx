'use client';

import { useState } from 'react';

/**
 * FAQ Component
 * =============
 * Accordion-style FAQ section with 5 questions.
 * Uses useState to track which item is currently expanded.
 * Only one item can be open at a time — clicking an open
 * item closes it, clicking a different item opens it
 * and closes the previously open one.
 */

/** FAQ data array */
const faqData = [
  {
    id: 1,
    question: 'How does modular construction differ from traditional building?',
    answer:
      'Modular construction builds 80–90% of the structure off-site in a climate-controlled factory while the site is being prepared simultaneously. This parallel process reduces timelines by up to 60%, minimizes waste by 90%, and delivers superior quality through factory-level precision. The finished modules are then transported and assembled on-site.',
  },
  {
    id: 2,
    question: 'What types of buildings can be built modularly?',
    answer:
      'Nearly any building type can be constructed modularly — from single-family homes and multi-story apartments to office towers, hotels, schools, hospitals, and retail spaces. Modern modular buildings can reach 20+ stories and are architecturally indistinguishable from traditional construction.',
  },
  {
    id: 3,
    question: 'Are modular buildings as durable as traditional ones?',
    answer:
      'Yes — often more so. Modular buildings must withstand transportation loads, which means they\'re engineered to be structurally stronger. They meet or exceed all local and national building codes and are designed for the same 50+ year lifespan as conventional structures.',
  },
  {
    id: 4,
    question: 'What is the typical project timeline?',
    answer:
      'Timeline varies by project scope, but modular construction typically saves 40–60% compared to traditional methods. A residential project might complete in 3–4 months, while a mid-rise commercial building could be finished in 8–12 months — including design, fabrication, and assembly.',
  },
  {
    id: 5,
    question: 'Can I customize the design of my modular building?',
    answer:
      'Absolutely. Every Betsy project is custom-designed to your specifications. Our architects work within a flexible modular system that allows for virtually unlimited design possibilities — from exterior finishes and floor plans to interior materials and smart building systems.',
  },
];

export default function FAQ() {
  // Track the currently active (expanded) FAQ item
  const [activeId, setActiveId] = useState(null);

  /** Toggle a FAQ item — if already active, close it; otherwise open it */
  const toggleItem = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="section" id="faq">
      <div className="container">
        {/* Section header */}
        <div className="section-header section-header--center reveal">
          <div className="section-label">FAQ</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about modular construction and working
            with Betsy.
          </p>
        </div>

        {/* FAQ accordion list */}
        <div className="faq-list">
          {faqData.map((item) => (
            <div
              key={item.id}
              className={`faq-item reveal ${activeId === item.id ? 'active' : ''}`}
            >
              {/* Question trigger */}
              <button
                className="faq-item__trigger"
                onClick={() => toggleItem(item.id)}
              >
                <span>{item.question}</span>
                <div className="faq-item__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
              </button>

              {/* Answer content — smoothly animated via CSS max-height */}
              <div className="faq-item__content">
                <p className="faq-item__answer">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
