# Case File System Documentation

## Overview
This directory contains structured case data for the Outcomes archive. Each case follows a standardized schema matching the client report PDF template, with tiered data for modal summaries and full report pages.

## File Structure

```
cases/
├── README.md                 (this file)
├── case-loader.js            (central import manager)
├── kg-jane-doe.js            (case data)
├── kg-sarah-chen.js          (case data)
└── [future-cases].js         (add as completed)
```

## Naming Convention

**Pattern:** `kg-[first-name]-[last-name].js` (lowercase, hyphenated)

**Examples:**
- `kg-jane-doe.js`
- `kg-sarah-chen.js`
- `kg-maria-rodriguez.js`

**IDs:** Uppercase with hyphens (e.g., `KG-JANE-DOE`)
**Slugs:** Lowercase with hyphens (e.g., `kg-jane-doe`)

## Case Data Schema

Each case file exports a default object with the following structure:

### Core Identifiers
```javascript
{
  id: "KG-JANE-DOE",              // Uppercase display ID
  slug: "kg-jane-doe",             // URL-safe slug
  year: 2024,                      // Year of training
  clientConsent: true,             // Must be true to display
  displayName: "Jane"              // First name for display
}
```

### Modal-Level Fields (Summary View)
These fields populate the case modal in outcomes.html:

```javascript
{
  metadata: {
    durationWeeks: 12,             // Training duration
    systemFocus: "strength",       // strength|consistency|cycle-aware|hybrid
    ageRange: "25-29"              // Age bracket
  },
  
  constraints: [
    "Inconsistent schedule",
    "Limited equipment",
    // ... additional constraints
  ],
  
  observedChanges: [
    "Increased lower body strength",
    "Improved movement efficiency",
    // ... additional changes
  ],
  
  images: {
    before: "url-to-before-image",
    after: "url-to-after-image",
    additional: []                 // Optional extra images
  }
}
```

### Full Report Fields (Future Full Pages)
These fields are structured but mostly `null` until full report pages are built:

```javascript
{
  fullReport: {
    identity: {
      trainingAge: "Novice",
      priorExperience: "Description",
      primaryGoals: ["Goal 1", "Goal 2"]
    },
    
    bodyComposition: {
      baseline: { weight_kg, bodyFat_pct, leanMass_kg },
      endpoint: { weight_kg, bodyFat_pct, leanMass_kg },
      changeNotes: "Observable changes description"
    },
    
    anthropometrics: {
      deltas: { notes: "Measurement changes" }
    },
    
    biomechanics: {
      movementQuality: "Assessment",
      injuryRisk: "Risk level",
      notes: "Additional context"
    },
    
    vitals: {
      rhr_baseline, rhr_endpoint,
      sleepQuality: "Description",
      recoveryNotes: "Notes"
    },
    
    cycleContext: {
      tracked: true/false,
      notes: "Cycle-aware context"
    },
    
    performance: {
      strengthProgressionNotes: "Description",
      volumeAnalysis: "Analysis",
      workCapacity: "Assessment",
      keyLifts: [
        // { exercise, baseline_kg, endpoint_kg, improvement_pct }
      ]
    },
    
    adherence: {
      sessionsCompleted, sessionsMissed,
      complianceRate_pct,
      barriersDuring: ["Barrier 1", "Barrier 2"],
      adaptationsMade: ["Adaptation 1", "Adaptation 2"]
    },
    
    qualitative: {
      clientFeedback: "Direct quotes",
      coachObservations: "Professional assessment",
      notableEvents: ["Event 1", "Event 2"]
    },
    
    programStructure: {
      phasesUsed: ["Phase 1", "Phase 2"],
      trainingFrequency: "3-4x/week",
      sessionDuration: "45-60 min",
      programmingApproach: "Description"
    }
  }
}
```

## Integration Points

### case-loader.js
Central import manager with helper functions:

```javascript
import { getAllCases, getCaseById, getCaseBySlug } from './case-loader.js';

// Get all consented cases
const cases = getAllCases();

// Find specific case by ID
const caseData = getCaseById('KG-JANE-DOE');

// Find case by slug (for URL routing)
const caseData = getCaseBySlug('kg-jane-doe');

// Filter by system focus
const strengthCases = getCasesByFocus('strength');

// Filter by duration
const shortCases = getCasesByDuration('8-12');
```

### outcomes.html
Archive page with modal summaries:
- Imports cases via `case-loader.js`
- Displays grid of case cards
- Opens modal with summary data
- Links to full report page via slug

### case-report.html
Full case report template:
- Accepts `?case=[slug]` URL parameter
- Dynamically imports case file
- Renders complete report with all fullReport fields
- Currently shows placeholder for full report sections

## Workflow

### Adding a New Case

1. **Create case file:**
   ```bash
   # cases/kg-new-client.js
   ```

2. **Copy template structure** from existing case (kg-jane-doe.js)

3. **Fill in data:**
   - Core identifiers
   - Modal-level fields (metadata, constraints, observedChanges, images)
   - Full report fields (populate as data becomes available)

4. **Register in case-loader.js:**
   ```javascript
   import kgNewClient from './kg-new-client.js';
   
   const allCases = [
     kgJaneDoe,
     kgSarahChen,
     kgNewClient,  // Add here
   ];
   ```

5. **Test:**
   - Case appears in outcomes.html grid
   - Modal opens with correct data
   - "View Full Report" links to case-report.html?case=kg-new-client
   - Full report page loads case data

## Privacy & Consent

- `clientConsent: true` required to display case
- Use `displayName` (first name only) in public views
- Body composition metrics default to `null` (privacy-first)
- Only include anthropometric data if client explicitly consents
- Use placeholder images or consented progress photos only

## Future Enhancements

### Phase 1 (Current)
✅ Case file architecture
✅ Modal summaries in outcomes.html
✅ Case report template with placeholders

### Phase 2 (Next)
- [ ] Populate fullReport fields with real data
- [ ] Build data visualization components (charts, graphs)
- [ ] Render complete report sections in case-report.html
- [ ] Add filtering by multiple criteria
- [ ] Search functionality

### Phase 3 (Later)
- [ ] Interactive data visualizations (strength curves, body comp trends)
- [ ] Comparison tools (baseline vs endpoint)
- [ ] Export reports as PDF
- [ ] Admin interface for case management

## System Focus Categories

| Value | Label | Description |
|-------|-------|-------------|
| `strength` | Strength | Primary emphasis on strength development |
| `consistency` | Consistency | Focus on habit formation and adherence |
| `cycle-aware` | Cycle-Aware | Menstrual cycle-informed programming |
| `hybrid` | Hybrid | Multi-system approach |

## Duration Ranges (for filtering)

| Range | Filter |
|-------|--------|
| 8-12 weeks | Short programs |
| 12-16 weeks | Standard programs |
| 16+ weeks | Extended programs |

## Age Ranges

Standard brackets: `20-24`, `25-29`, `30-34`, `35-39`, `40-44`, `45-49`, `50+`

## Notes

- All dates/durations in weeks for consistency
- Metrics use metric system (kg, cm) with conversion helpers if needed
- Qualitative data (quotes, observations) stored as strings
- Quantitative data (weights, percentages) stored as numbers or null
- Arrays used for lists (constraints, changes, goals, etc.)
- Privacy-conscious by default: null > placeholder > real data

---

**Last Updated:** 2025-01-XX
**Maintained By:** Kayleigh Gomez
