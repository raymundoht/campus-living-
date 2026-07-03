'use client';

import { useState } from 'react';

/**
 * Testimonials Component
 * ======================
 * Carousel section with 3 client testimonials.
 * Uses useState for the current slide index and
 * supports navigation via prev/next buttons, dots,
 * and touch swipe on mobile.
 */

/** Star icon for ratings */
const Star = () => (
  <svg viewBox="0 0 24 24">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

/** Testimonial data */
const testimonials = [
  {
    id: 1,
    quote:
      '"Betsy Modular delivered our 200-unit residential complex six months ahead of schedule. The quality of the finishes exceeded our expectations, and the cost savings were remarkable."',
    name: 'James Mitchell',
    role: 'CEO, Pinnacle Developments',
    initials: 'JM',
  },
  {
    id: 2,
    quote:
      '"The precision of their modular approach was exactly what our hospital expansion required. Zero disruption to ongoing operations and impeccable build quality."',
    name: 'Dr. Sarah Rodriguez',
    role: 'Director, Northwest Health Systems',
    initials: 'SR',
  },
  {
    id: 3,
    quote:
      '"We needed 12 classroom buildings deployed across 3 sites within one summer. Betsy made it happen flawlessly. Our students walked into beautiful, modern learning spaces on day one."',
    name: 'Amanda Kim',
    role: 'Superintendent, Metro School District',
    initials: 'AK',
  },
];

export default function Testimonials() {
  // Current slide state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Touch tracking for swipe
  const [touchStart, setTouchStart] = useState(0);

  /** Navigate to a specific slide */
  const goToSlide = (index) => {
    let newIndex = index;
    if (newIndex < 0) newIndex = testimonials.length - 1;
    if (newIndex >= testimonials.length) newIndex = 0;
    setCurrentSlide(newIndex);
  };

  /** Handle touch start for swipe */
  const handleTouchStart = (e) => {
    setTouchStart(e.changedTouches[0].screenX);
  };

  /** Handle touch end for swipe */
  const handleTouchEnd = (e) => {
    const diff = touchStart - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) {
      goToSlide(diff > 0 ? currentSlide + 1 : currentSlide - 1);
    }
  };

  return (
    <section className="section section--dark" id="testimonials">
      <div className="container">
        {/* Section header */}
        <div className="section-header section-header--center reveal">
          <div className="section-label">Testimonials</div>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Industry leaders trust Betsy Modular for their most important
            construction projects.
          </p>
        </div>

        {/* Carousel */}
        <div className="testimonials-wrapper">
          <div
            className="testimonials-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {testimonials.map((t) => (
              <div className="testimonial-card" key={t.id}>
                <div className="testimonial-card__inner">
                  {/* 5-star rating */}
                  <div className="testimonial-card__stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} />
                    ))}
                  </div>

                  {/* Quote text */}
                  <p className="testimonial-card__quote">{t.quote}</p>

                  {/* Author info */}
                  <div className="testimonial-card__author">
                    <div className="testimonial-card__avatar">{t.initials}</div>
                    <div>
                      <div className="testimonial-card__name">{t.name}</div>
                      <div className="testimonial-card__role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation controls */}
          <div className="testimonials-nav">
            {/* Previous button */}
            <button
              className="testimonials-nav__btn"
              onClick={() => goToSlide(currentSlide - 1)}
              aria-label="Previous testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5" /><path d="m12 19-7-7 7-7" />
              </svg>
            </button>

            {/* Dot indicators */}
            <div className="testimonials-dots">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`testimonials-dot ${i === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(i)}
                ></div>
              ))}
            </div>

            {/* Next button */}
            <button
              className="testimonials-nav__btn"
              onClick={() => goToSlide(currentSlide + 1)}
              aria-label="Next testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
