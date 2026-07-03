/**
 * PropertyCard Component
 * ======================
 * Renders a single property listing card.
 * This is a REUSABLE component that receives property data
 * as props and dynamically displays all fields.
 *
 * Each card shows:
 * - Status badges (available/sold + featured)
 * - Property image with hover zoom
 * - Category, title, location
 * - Price
 * - Details row (bedrooms, bathrooms, square meters)
 *
 * Uses CSS @keyframes animation for smooth mount transition.
 *
 * @param {Object} property - A single property data object
 * @param {number} index - Card index for staggered animation delay
 */
export default function PropertyCard({ property, index }) {
  return (
    <div
      className="project-card"
      style={{
        opacity: 0,
        animation: `cardEnter 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${index * 80}ms forwards`,
      }}
    >
      {/* Status badges — conditionally rendered based on property data */}
      <div className="property-badges">
        {/* Show "Available" or "Sold" badge based on boolean */}
        {property.available ? (
          <span className="property-badge property-badge--available">Available</span>
        ) : (
          <span className="property-badge property-badge--unavailable">Sold</span>
        )}
        {/* Only show "Featured" badge if property.featured is true */}
        {property.featured && (
          <span className="property-badge property-badge--featured">Featured</span>
        )}
      </div>

      {/* Property image with lazy loading */}
      <img
        src={property.image}
        alt={property.title}
        className="project-card__image"
        loading="lazy"
      />

      {/* Overlay with property information — visible on hover */}
      <div className="project-card__overlay">
        <span className="project-card__category">{property.category}</span>
        <h3 className="project-card__title">{property.title}</h3>
        <span className="project-card__location">{property.location}</span>

        {/* Price display */}
        <div className="property-price">{property.price}</div>

        {/* Property details row */}
        <div className="property-details">
          {/* Only show bedrooms for residential properties (bedrooms > 0) */}
          {property.bedrooms > 0 && (
            <span className="property-detail">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7v11a2 2 0 002 2h14a2 2 0 002-2V7" />
                <path d="M21 11H3V7a4 4 0 014-4h10a4 4 0 014 4v4z" />
              </svg>
              {property.bedrooms} Beds
            </span>
          )}
          <span className="property-detail">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12h16a1 1 0 011 1v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3a1 1 0 011-1z" />
              <path d="M6 12V5a2 2 0 012-2h3v2.25" />
            </svg>
            {property.bathrooms} Baths
          </span>
          <span className="property-detail">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18" /><path d="M9 3v18" />
            </svg>
            {property.squareMeters} m²
          </span>
        </div>
      </div>
    </div>
  );
}
