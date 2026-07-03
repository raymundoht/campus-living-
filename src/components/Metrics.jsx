/**
 * Metrics Component
 * =================
 * Dark banner section displaying 4 key company metrics
 * with animated counters. Counter animation is driven
 * by IntersectionObserver in page.js.
 */
export default function Metrics() {
  return (
    <section className="section section--deep-dark metrics" id="metrics">
      <div className="container">
        <div className="metrics-grid">
          {/* Metric 1 — Projects */}
          <div className="metric-item reveal stagger-1">
            <div className="metric-number">
              <span data-count="500">0</span><span>+</span>
            </div>
            <div className="metric-label">Projects Delivered</div>
          </div>

          {/* Metric 2 — Square footage */}
          <div className="metric-item reveal stagger-2">
            <div className="metric-number">
              <span data-count="12">0</span><span>M</span>
            </div>
            <div className="metric-label">Sq Ft Constructed</div>
          </div>

          {/* Metric 3 — Cities */}
          <div className="metric-item reveal stagger-3">
            <div className="metric-number">
              <span data-count="35">0</span><span>+</span>
            </div>
            <div className="metric-label">Cities Served</div>
          </div>

          {/* Metric 4 — Satisfaction */}
          <div className="metric-item reveal stagger-4">
            <div className="metric-number">
              <span data-count="98">0</span><span>%</span>
            </div>
            <div className="metric-label">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
