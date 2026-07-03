'use client';

/**
 * FilterBar Component
 * ===================
 * Provides filter controls for the property grid.
 * Contains:
 * - Category filter buttons (All, Residential, Commercial, etc.)
 * - Toggle for "Show Available Only" (modifies React state)
 * - Toggle for "Show Featured Only" (modifies React state)
 * - Reset Filters button (clears all filters)
 *
 * All filtering modifies React state via useState setters passed as props.
 * This triggers re-rendering in PropertyGrid, which uses .filter() + .map()
 * to conditionally render only matching cards (DOM unmounting, not CSS hiding).
 */

/** Category options for the filter buttons */
const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'residential', label: 'Residential' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'education', label: 'Education' },
  { value: 'hospitality', label: 'Hospitality' },
];

export default function FilterBar({
  activeCategory,
  setActiveCategory,
  showAvailableOnly,
  setShowAvailableOnly,
  showFeaturedOnly,
  setShowFeaturedOnly,
  resetFilters,
}) {
  return (
    <div className="filters-wrapper">
      {/* Row 1 — Category filter buttons */}
      <div className="filters-row">
        {categories.map((cat) => (
          <button
            key={cat.value}
            className={`filter-btn ${activeCategory === cat.value ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Row 2 — Toggle filters & reset */}
      <div className="filter-toggles">
        {/* ✔ Show Available Properties toggle */}
        <button
          className={`filter-toggle ${showAvailableOnly ? 'active' : ''}`}
          onClick={() => setShowAvailableOnly(!showAvailableOnly)}
        >
          <span className="filter-toggle__check">
            {showAvailableOnly && (
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </span>
          Show Available Only
        </button>

        {/* ✔ Show Featured Properties toggle */}
        <button
          className={`filter-toggle ${showFeaturedOnly ? 'active' : ''}`}
          onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
        >
          <span className="filter-toggle__check">
            {showFeaturedOnly && (
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </span>
          Show Featured Only
        </button>

        {/* Reset Filters button */}
        <button className="filter-reset" onClick={resetFilters}>
          Reset Filters
        </button>
      </div>
    </div>
  );
}
