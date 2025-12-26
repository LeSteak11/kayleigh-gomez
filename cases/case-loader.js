// Case Data Loader
// Centralized import and management for all client cases

import kgJaneDoe from './kg-jane-doe.js';
import kgSarahChen from './kg-sarah-chen.js';
import kgCassidyRegan from './kg-cassidy-regan.js';

// ===== Case Registry =====
// Add new cases here as they're created
const allCases = [
  kgJaneDoe,
  kgSarahChen,
  kgCassidyRegan,
  // Add future cases here
];

// ===== Helper Functions =====

/**
 * Get all cases (for archive grid)
 */
export function getAllCases() {
  return allCases.filter(c => c.clientConsent === true);
}

/**
 * Get case by ID (for modal/full page)
 */
export function getCaseById(id) {
  return allCases.find(c => c.id === id);
}

/**
 * Get case by slug (for URL routing)
 */
export function getCaseBySlug(slug) {
  return allCases.find(c => c.slug === slug);
}

/**
 * Filter cases by system focus
 */
export function getCasesByFocus(focus) {
  if (focus === 'all') return getAllCases();
  return allCases.filter(c => c.metadata.systemFocus === focus);
}

/**
 * Filter cases by duration range
 */
export function getCasesByDuration(range) {
  if (range === 'all') return getAllCases();
  
  return allCases.filter(c => {
    const weeks = c.metadata.durationWeeks;
    if (range === '8-12') return weeks >= 8 && weeks <= 12;
    if (range === '12-16') return weeks > 12 && weeks <= 16;
    if (range === '16+') return weeks > 16;
    return true;
  });
}

/**
 * Get summary data for modal (only what's needed for popup)
 */
export function getCaseSummary(caseData) {
  return {
    id: caseData.id,
    slug: caseData.slug,
    displayName: caseData.displayName,
    metadata: caseData.metadata,
    constraints: caseData.constraints,
    observedChanges: caseData.observedChanges,
    images: caseData.images
  };
}

/**
 * Check if full report page exists/is ready
 */
export function hasFullReport(caseId) {
  // For now, return false until full pages are built
  // Later, check if fullReport data is complete
  const caseData = getCaseById(caseId);
  return caseData && caseData.fullReport && false; // Change to true when pages are ready
}

export default {
  getAllCases,
  getCaseById,
  getCaseBySlug,
  getCasesByFocus,
  getCasesByDuration,
  getCaseSummary,
  hasFullReport
};
