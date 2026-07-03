/**
 * Footer Component
 * ================
 * Multi-column footer with:
 * - Brand info and social links
 * - Company navigation links
 * - Solutions links
 * - Contact information
 * - Bottom bar with copyright and legal links
 */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Footer grid */}
        <div className="footer__grid">
          {/* Brand column */}
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-mark">B</span>
              Betsy Modular
            </div>
            <p className="footer__brand-text">
              Precision-engineered modular construction solutions. Building the
              future with sustainable innovation and uncompromising quality.
            </p>
            {/* Social icons */}
            <div className="footer__socials">
              <a href="#" className="footer__social" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className="footer__social" aria-label="Twitter / X">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.7 16h4.3L8.3 4H4z" /><path d="M4 20L20 4" />
                </svg>
              </a>
              <a href="#" className="footer__social" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" />
                </svg>
              </a>
              <a href="#" className="footer__social" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="footer__col-title">Company</h4>
            <a href="#" className="footer__link">About Us</a>
            <a href="#" className="footer__link">Our Team</a>
            <a href="#" className="footer__link">Careers</a>
            <a href="#" className="footer__link">Press</a>
            <a href="#" className="footer__link">Contact</a>
          </div>

          {/* Solutions links */}
          <div>
            <h4 className="footer__col-title">Solutions</h4>
            <a href="#" className="footer__link">Residential</a>
            <a href="#" className="footer__link">Commercial</a>
            <a href="#" className="footer__link">Healthcare</a>
            <a href="#" className="footer__link">Education</a>
            <a href="#" className="footer__link">Hospitality</a>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="footer__col-title">Contact</h4>
            <a href="mailto:hello@betsy.com" className="footer__link">hello@betsy.com</a>
            <a href="tel:+18005551234" className="footer__link">+1 (800) 555-1234</a>
            <a href="#" className="footer__link">1200 Innovation Blvd</a>
            <a href="#" className="footer__link">Austin, TX 78701</a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">&copy; 2026 Betsy Modular. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#" className="footer__bottom-link">Privacy Policy</a>
            <a href="#" className="footer__bottom-link">Terms of Service</a>
            <a href="#" className="footer__bottom-link">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
