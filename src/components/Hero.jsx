/**
 * Hero Component
 * ==============
 * Full-screen hero section with:
 * - Background image with parallax (controlled in page.js)
 * - Large headline with accent-colored keyword
 * - Supporting description
 * - Two CTA buttons
 * - Floating statistic cards with animated counters
 * - Scroll indicator
 */
export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Background image — parallax controlled via page.js scroll handler */}
      <div className="hero__bg">
        <img src="/images/hero.png" alt="Modern modular building" loading="eager" />
      </div>

      <div className="container">
        {/* Main content */}
        <div className="hero__content">
          <div className="hero__label">
            <span className="hero__label-dot"></span>
            Redefining Construction
          </div>

          <h1 className="hero__title">
            Building the Future,<br />
            <span>Module</span> by Module
          </h1>

          <p className="hero__description">
            Precision-engineered modular structures delivered faster, smarter, and
            more sustainably. From concept to completion in a fraction of the time.
          </p>

          <div className="btn-group">
            <a href="#contact" className="btn btn--primary btn--large">
              Start Your Project
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a href="#projects" className="btn btn--outline-light btn--large">
              View Projects
            </a>
          </div>
        </div>

        {/* Floating stat cards — counter values animated in page.js */}
        <div className="hero__stats">
          <div className="hero__stat-card reveal-right stagger-1">
            <div className="hero__stat-number">
              <span data-count="500">0</span><span>+</span>
            </div>
            <div className="hero__stat-text">Projects Completed</div>
          </div>
          <div className="hero__stat-card reveal-right stagger-2">
            <div className="hero__stat-number">
              <span data-count="60">0</span><span>%</span>
            </div>
            <div className="hero__stat-text">Faster Than Traditional</div>
          </div>
          <div className="hero__stat-card reveal-right stagger-3">
            <div className="hero__stat-number">
              <span data-count="98">0</span><span>%</span>
            </div>
            <div className="hero__stat-text">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <span>Scroll</span>
        <div className="hero__scroll-line"></div>
      </div>
    </section>
  );
}
