/**
 * Process Component
 * =================
 * "How It Works" timeline section with 4 connected steps.
 * Features an animated progress line and markers that
 * activate as the user scrolls (handled in page.js).
 */
export default function Process() {
  return (
    <section className="section section--light" id="process">
      <div className="container">
        {/* Section header */}
        <div className="section-header section-header--center reveal">
          <div className="section-label">Process</div>
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            A streamlined process from initial consultation to final handover,
            keeping you informed at every stage.
          </p>
        </div>

        {/* Timeline — progress line animated in page.js */}
        <div className="timeline" id="timeline">
          <div className="timeline__line"></div>
          <div className="timeline__progress" id="timeline-progress"></div>

          {/* Step 1 — Consultation */}
          <div className="timeline__item reveal">
            <div className="timeline__marker">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
            </div>
            <div className="timeline__content">
              <span className="timeline__step">Step 01</span>
              <h3 className="timeline__title">Consultation &amp; Design</h3>
              <p className="timeline__text">
                We collaborate closely with your team to understand your vision,
                requirements, and constraints. Our architects create detailed BIM
                models tailored to your project.
              </p>
            </div>
          </div>

          {/* Step 2 — Fabrication */}
          <div className="timeline__item reveal">
            <div className="timeline__marker">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <div className="timeline__content">
              <span className="timeline__step">Step 02</span>
              <h3 className="timeline__title">Factory Fabrication</h3>
              <p className="timeline__text">
                Modules are precision-manufactured in our climate-controlled
                facility while your site is prepared simultaneously — saving
                months of construction time.
              </p>
            </div>
          </div>

          {/* Step 3 — Assembly */}
          <div className="timeline__item reveal">
            <div className="timeline__marker">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <div className="timeline__content">
              <span className="timeline__step">Step 03</span>
              <h3 className="timeline__title">Transport &amp; Assembly</h3>
              <p className="timeline__text">
                Completed modules are transported to site and assembled with
                crane precision. A multi-story building can be structurally
                complete in days, not months.
              </p>
            </div>
          </div>

          {/* Step 4 — Handover */}
          <div className="timeline__item reveal">
            <div className="timeline__marker">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div className="timeline__content">
              <span className="timeline__step">Step 04</span>
              <h3 className="timeline__title">Finishing &amp; Handover</h3>
              <p className="timeline__text">
                Final connections, inspections, and interior finishing. We hand
                over a fully completed, move-in-ready building backed by our
                comprehensive warranty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
