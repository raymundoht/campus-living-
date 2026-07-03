'use client';

import { useState } from 'react';
import FilterBar from './FilterBar';
import PropertyCard from './PropertyCard';
import properties from '@/data/properties';

/**
 * PropertyGrid Component
 * ======================
 * Main container for the property listings (Projects) section.
 *
 * DEMONSTRATES KEY REACT CONCEPTS:
 * - useState() for filter state management
 * - .filter() for conditional rendering (elements removed from DOM)
 * - .map() for dynamic rendering from data array
 * - key={property.id} for proper reconciliation
 * - Component composition (uses FilterBar + PropertyCard)
 *
 * Filtering removes elements from the DOM entirely —
 * NOT hidden via CSS (display:none, visibility:hidden, opacity:0).
 * Open DevTools to verify elements are unmounted when filtered out.
 */
export default function PropertyGrid() {
  // ============================
  // STATE MANAGEMENT (useState)
  // ============================

  /** Toggle: show only available properties */
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  /** Toggle: show only featured properties */
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  /** Active category filter (default: 'all') */
  const [activeCategory, setActiveCategory] = useState('all');

  // ============================
  // FILTERING (.filter() before .map())
  // ============================

  /**
   * Apply all active filters using chained .filter() calls.
   * Properties that don't pass the filter are completely excluded
   * from the array — they won't be rendered in the DOM at all.
   */
  const filteredProperties = properties
    .filter((property) => (showAvailableOnly ? property.available : true))
    .filter((property) => (showFeaturedOnly ? property.featured : true))
    .filter((property) =>
      activeCategory === 'all' ? true : property.category === activeCategory
    );

  /**
   * Reset all filters to their default values.
   * Called by the "Reset Filters" button in FilterBar.
   */
  const resetFilters = () => {
    setShowAvailableOnly(false);
    setShowFeaturedOnly(false);
    setActiveCategory('all');
  };

  return (
    <section className="section" id="projects">
      <div className="container">
        {/* Section header */}
        <div className="section-header reveal">
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Explore our latest modular constructions spanning residential,
            commercial, and institutional sectors.
          </p>
        </div>

        {/* Filter controls — modifies state, triggers re-render */}
        <FilterBar
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          showAvailableOnly={showAvailableOnly}
          setShowAvailableOnly={setShowAvailableOnly}
          showFeaturedOnly={showFeaturedOnly}
          setShowFeaturedOnly={setShowFeaturedOnly}
          resetFilters={resetFilters}
        />

        {/* ============================
            DYNAMIC RENDERING (.map())
            ============================
            Each PropertyCard is rendered from the filtered data array.
            Cards that don't match filters are NOT in this array,
            so they are never rendered — true DOM unmounting. */}
        <div className="projects-grid" id="projects-grid">
          {filteredProperties.map((property, index) => (
            <PropertyCard
              key={property.id}   /* Required unique key for React reconciliation */
              property={property}  /* Pass the full property object as prop */
              index={index}        /* Index for staggered animation delay */
            />
          ))}
        </div>

        {/* Empty state — shown when no properties match the active filters */}
        {filteredProperties.length === 0 && (
          <div className="no-results">
            <svg
              className="no-results__icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <p className="no-results__text">
              No properties match your current filters.
            </p>
            <button className="no-results__btn" onClick={resetFilters}>
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
