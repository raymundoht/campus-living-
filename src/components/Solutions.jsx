/**
 * Solutions Component
 * ===================
 * "Built for Every Sector" section showcasing 3 solution
 * cards: Residential, Commercial, and Healthcare.
 * Each card features an image with zoom-on-hover and
 * an overlay with description that expands on hover.
 */
export default function Solutions() {
  return (
    <section className="section" id="solutions">
      <div className="container">
        {/* Section header */}
        <div className="section-header reveal">
          <div className="section-label">Solutions</div>
          <h2 className="section-title">Built for Every Sector</h2>
          <p className="section-subtitle">
            From luxury residences to commercial complexes, our modular systems
            adapt to any vision.
          </p>
        </div>

        {/* Solutions grid */}
        <div className="solutions-grid">
          {/* Residential */}
          <div className="solution-card reveal stagger-1">
            <img src="./images/residential.png" alt="Modern modular residential building" className="solution-card__image" loading="lazy" />
            <div className="solution-card__overlay">
              <span className="solution-card__tag">Residential</span>
              <h3 className="solution-card__title">Modern Living</h3>
              <p className="solution-card__desc">
                Custom-designed modular homes that redefine residential living
                with premium finishes and smart technology integration.
              </p>
            </div>
            <div className="solution-card__arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" /><path d="M7 7h10v10" />
              </svg>
            </div>
          </div>

          {/* Commercial */}
          <div className="solution-card reveal stagger-2">
            <img src="./images/commercial.png" alt="Modern modular commercial building" className="solution-card__image" loading="lazy" />
            <div className="solution-card__overlay">
              <span className="solution-card__tag">Commercial</span>
              <h3 className="solution-card__title">Office &amp; Retail</h3>
              <p className="solution-card__desc">
                Scalable commercial spaces designed for efficiency, employee
                wellbeing, and future flexibility.
              </p>
            </div>
            <div className="solution-card__arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" /><path d="M7 7h10v10" />
              </svg>
            </div>
          </div>

          {/* Healthcare */}
          <div className="solution-card reveal stagger-3">
            <img src="./images/healthcare.png" alt="Modern modular healthcare facility" className="solution-card__image" loading="lazy" />
            <div className="solution-card__overlay">
              <span className="solution-card__tag">Healthcare</span>
              <h3 className="solution-card__title">Medical Facilities</h3>
              <p className="solution-card__desc">
                Purpose-built healthcare environments meeting stringent medical
                standards with rapid deployment capability.
              </p>
            </div>
            <div className="solution-card__arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" /><path d="M7 7h10v10" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
