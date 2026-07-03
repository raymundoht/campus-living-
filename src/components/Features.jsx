/**
 * Features Component
 * ==================
 * "Why Modular" section displaying 6 feature cards
 * in a responsive 3-column grid. Each card has an icon,
 * title, and description. Cards lift on hover with a
 * top accent border animation.
 */
export default function Features() {
  return (
    <section className="section section--light" id="features">
      <div className="container">
        {/* Section header */}
        <div className="section-header section-header--center reveal">
          <div className="section-label">Why Modular</div>
          <h2 className="section-title">Engineered for Excellence</h2>
          <p className="section-subtitle">
            Our modular approach combines cutting-edge technology with sustainable
            practices, delivering superior quality in every build.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="features-grid">
          {/* Card 1 — Speed */}
          <div className="feature-card reveal stagger-1">
            <div className="feature-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 className="feature-card__title">60% Faster Delivery</h3>
            <p className="feature-card__text">
              Off-site fabrication runs parallel to site preparation, dramatically
              cutting project timelines without compromising quality.
            </p>
          </div>

          {/* Card 2 — Precision */}
          <div className="feature-card reveal stagger-2">
            <div className="feature-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="feature-card__title">Precision Engineering</h3>
            <p className="feature-card__text">
              Factory-controlled manufacturing ensures millimeter-level accuracy
              with advanced BIM modeling and quality control systems.
            </p>
          </div>

          {/* Card 3 — Sustainability */}
          <div className="feature-card reveal stagger-3">
            <div className="feature-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c5.5-3 9-7.5 9-12a9 9 0 10-18 0c0 4.5 3.5 9 9 12z" /><circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 className="feature-card__title">Sustainable Building</h3>
            <p className="feature-card__text">
              Up to 90% waste reduction through optimized factory processes.
              Built for energy efficiency and environmental responsibility.
            </p>
          </div>

          {/* Card 4 — Digital Twin */}
          <div className="feature-card reveal stagger-4">
            <div className="feature-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" />
              </svg>
            </div>
            <h3 className="feature-card__title">Digital Twin Technology</h3>
            <p className="feature-card__text">
              Real-time digital models provide complete project visibility, from
              design through construction to facility management.
            </p>
          </div>

          {/* Card 5 — Cost */}
          <div className="feature-card reveal stagger-5">
            <div className="feature-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 1v22" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
              </svg>
            </div>
            <h3 className="feature-card__title">Cost Predictability</h3>
            <p className="feature-card__text">
              Fixed-price contracts with transparent budgeting. No surprise costs,
              no weather delays, no budget overruns.
            </p>
          </div>

          {/* Card 6 — Quality */}
          <div className="feature-card reveal stagger-6">
            <div className="feature-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3 className="feature-card__title">Quality Guaranteed</h3>
            <p className="feature-card__text">
              ISO-certified manufacturing with rigorous multi-stage inspections.
              Every module meets or exceeds building standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
