/**
 * CTASection Component
 * ====================
 * Large call-to-action section on dark background.
 * Bold headline with accent-colored keyword, supporting
 * text, and two action buttons.
 */
export default function CTASection() {
  return (
    <section className="section section--deep-dark cta-section" id="contact">
      <div className="container">
        <div className="cta-section__inner reveal">
          <div className="section-label" style={{ justifyContent: 'center' }}>
            Let&apos;s Build
          </div>
          <h2 className="cta-section__title">
            Ready to Build<br /><span>Smarter</span>?
          </h2>
          <p className="cta-section__text">
            Get in touch with our team to discuss your project. From initial
            concept to final handover, we&apos;re with you every step of the way.
          </p>
          <div className="btn-group" style={{ justifyContent: 'center' }}>
            <a href="#" className="btn btn--primary btn--large">
              Schedule a Consultation
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a href="#" className="btn btn--outline-light btn--large">
              Download Brochure
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
