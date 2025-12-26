# Case Data Structure - Analytical Report Format

## Modal-Level Fields (Required)

### Metadata
```javascript
metadata: {
  durationWeeks: 12,              // Required
  systemFocus: "strength",        // Required: strength | consistency | hybrid | cycle-aware
  ageRange: "25-29",              // Required: bracket format
  trainingFrequency: "3-4x/week", // Optional: avg training days
  programPhase: "build"           // Optional: build | maintenance | recomposition
}
```

### Context & Constraints (Analytical Format)
```javascript
contextConstraints: {
  trainingAvailability: "variable (shift work)",
  equipmentAccess: "home gym only",
  recoveryCapacity: "managed via autoregulation",
  phaseConsiderations: "previous injury accommodations"
}
```

**Guidelines:**
- Short phrases, not sentences
- Neutral tone
- Use colons in labels, lowercase values
- Omit fields if not applicable (conditional rendering)

### Key Outcomes (Structured, Measurable)
```javascript
outcomes: {
  bodyComposition: "maintained <16% body fat",
  strength: "progressive overload sustained across compounds",
  hypertrophy: "glute-focused refinement, rear-delts preserved",
  adherence: "consistent nutritional compliance",
  technique: "improved hip hinge mechanics",
  behavioral: "built habit infrastructure"
}
```

**Guidelines:**
- Use outcome category names as keys
- Values should be directional and measurable
- Avoid promotional language
- Common categories:
  - `bodyComposition`
  - `strength`
  - `hypertrophy`
  - `adherence`
  - `technique`
  - `behavioral`
  - `stress`

### Performance & Adaptation (Optional)
```javascript
performance: {
  strengthTrend: "↑",                              // ↑ | → | ↓
  volumeTolerance: "increased",                    // increased | stable | decreased
  recoveryMarkers: "stable RHR (58→57 bpm)",      // qualitative or quantitative
  fatigueManagement: "monitored effectively"       // effective | monitored | challenging
}
```

**Guidelines:**
- Only include if data exists
- Use symbols for trends (↑ → ↓)
- Keep values short and objective
- Common fields:
  - `strengthTrend`
  - `volumeTolerance`
  - `recoveryMarkers`
  - `fatigueManagement`

### Program Notes (Optional, Single Line)
```javascript
programNotes: "Overload progression required tighter fatigue management in final 4 weeks."
```

**Guidelines:**
- One sentence only
- Coaching context, not narrative
- Neutral, observational tone
- Omit if no special notes needed

### Background & Summary (Optional, Multi-Paragraph)
```javascript
background: "Cassidy is a long-term strength trainee with several years of consistent lifting experience. She trains primarily in a full gym environment and gravitates toward structured programming, compound movements, and clearly defined progression blocks.\n\nOutside the gym, she maintains a generally active lifestyle and values routine. She prefers early training sessions, tracks her workouts closely, and responds well to predictable weekly structure. Nutrition is approached pragmatically rather than aggressively, with an emphasis on consistency over restriction.\n\nDuring this phase, her primary goal was maintenance — preserving strength, physique, and performance without pushing into unnecessary metabolic stress. She was not seeking visible transformation, but rather stability, refinement, and continued progression within established training capacity.\n\nShe reports high adherence when training parameters are clearly defined and fatigue is actively managed, and tends to respond best to programs that prioritize recovery alongside volume exposure."
```

**Guidelines:**
- Multi-paragraph client background and context
- Appears below photos on bottom-right of modal
- Use `\n\n` for paragraph breaks (auto-converts to `<p>` tags)
- Neutral, descriptive tone
- Provides context for training approach and client characteristics
- Optional field - omit if no detailed background needed

---

## Images (Required)
```javascript
images: {
  before: "url-or-path",
  after: "url-or-path",
  additional: []  // Optional array for future galleries
}
```

---

## Full Report Fields (Extended Data)

Keep existing `fullReport` object for future full case pages.

---

## Backward Compatibility

The modal rendering supports both formats:
- **New format**: Uses `contextConstraints`, `outcomes`, `performance`, `programNotes`
- **Old format**: Falls back to `constraints` (array) and `observedChanges` (array)

This allows gradual migration of existing cases.

---

## Rendering Logic

### Metadata Section
Always renders:
- Duration, System Focus, Age Range

Conditionally renders if present:
- Training Frequency
- Program Phase

### Context & Constraints
If `contextConstraints` exists → Render data grid
Else if `constraints` array exists → Render bullet list (old format)

### Key Outcomes
If `outcomes` object exists → Render data grid
Else if `observedChanges` array exists → Render bullet list (old format)

### Performance & Adaptation
Only renders if `performance` object exists

### Program Notes
Only renders if `programNotes` string exists

### Background & Summary
Only renders if `background` string exists
Appears below photos on bottom-right of modal
Paragraph breaks (`\n\n`) auto-convert to `<p>` tags

---

## Example: Complete Modal-Level Data

```javascript
export default {
  id: "KG-CASSIDY-REGAN",
  slug: "kg-cassidy-regan",
  year: 2024,
  clientConsent: true,
  displayName: "Cassidy",
  
  metadata: {
    durationWeeks: 16,
    systemFocus: "strength",
    ageRange: "20-24",
    trainingFrequency: "5x/week",
    programPhase: "maintenance"
  },
  
  contextConstraints: {
    trainingAvailability: "consistent 5-day schedule",
    equipmentAccess: "full gym",
    recoveryCapacity: "high posterior-chain volume",
    phaseConsiderations: "maintenance without metabolic adaptation"
  },
  
  outcomes: {
    bodyComposition: "maintained <16% body fat",
    strength: "progressive overload sustained across compounds",
    hypertrophy: "glute-focused refinement, rear-delts preserved",
    adherence: "consistent nutritional compliance"
  },
  
  performance: {
    strengthTrend: "↑",
    volumeTolerance: "increased",
    recoveryMarkers: "stable RHR (58→57 bpm)",
    fatigueManagement: "monitored effectively"
  },
  
  programNotes: "Overload progression required tighter fatigue management in final 4 weeks.",
  
  background: "Long-term trainee with consistent experience. Gravitates toward structured programming and compound movements. Values routine and responds well to predictable weekly structure.\n\nPrimary goal was maintenance — preserving strength and performance without metabolic stress. High adherence when training parameters are clearly defined and fatigue is actively managed.",
  
  images: {
    before: "url",
    after: "url",
    additional: []
  },
  
  fullReport: {
    // ... extended data for full case pages
  }
};
```

---

## Tone Guidelines

### ✅ Analytical Report Style
- "maintained <16% body fat"
- "progressive overload sustained"
- "increased volume tolerance"
- "effective fatigue management"

### ❌ Avoid Narrative/Promotional
- "achieved amazing results"
- "transformed her physique"
- "journey to consistency"
- "overcame challenges"

---

## Adding New Cases

1. Copy an existing case file as template
2. Update core identifiers (id, slug, year, displayName)
3. Fill in `metadata` (required fields)
4. Add `contextConstraints` (short phrases)
5. Add `outcomes` (category: value pairs)
6. Optionally add `performance` if data exists
7. Optionally add `programNotes` for coaching context
8. Add image URLs
9. Import in `case-loader.js`

Modal will automatically use new analytical format.
