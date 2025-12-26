// Case: KG-SARAH-CHEN
// Full case data structure derived from client report PDF

export default {
  // ===== Core Identifiers =====
  id: "KG-SARAH-CHEN",
  slug: "kg-sarah-chen",
  year: 2023,
  clientConsent: true,
  displayName: "Sarah",
  
  // ===== Modal-Level Summary Fields =====
  metadata: {
    durationWeeks: 16,
    systemFocus: "consistency",
    ageRange: "30-34"
  },
  
  constraints: [
    "High-stress corporate environment",
    "Frequent travel schedule",
    "Previous history of program-hopping"
  ],
  
  observedChanges: [
    "Maintained consistent training for 16 consecutive weeks",
    "Built habit infrastructure independent of motivation",
    "Observable strength progression via tracked metrics",
    "Improved stress management through structured routine"
  ],
  
  images: {
    before: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=600&fit=crop",
    after: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=600&fit=crop",
    additional: []
  },
  
  // ===== Full Report Fields =====
  fullReport: {
    identity: {
      trainingAge: "Intermediate (inconsistent)",
      priorExperience: "Multiple program starts/stops over 3 years",
      primaryGoals: ["Consistency", "Sustainable routine", "Stress management"]
    },
    
    bodyComposition: {
      baseline: { weight_kg: null, bodyFat_pct: null, leanMass_kg: null },
      endpoint: { weight_kg: null, bodyFat_pct: null, leanMass_kg: null },
      changeNotes: "Maintained lean mass during high-stress period; visible muscle retention"
    },
    
    anthropometrics: {
      deltas: {
        notes: "Measurements stable; primary focus was behavioral consistency rather than body composition change"
      }
    },
    
    biomechanics: {
      movementQuality: "Consistent technique across training cycle",
      injuryRisk: "Low; no setbacks during 16-week period",
      notes: "Previous injury concerns did not resurface with consistent loading"
    },
    
    vitals: {
      rhr_baseline: null,
      rhr_endpoint: null,
      sleepQuality: "Reported improvement in sleep consistency",
      recoveryNotes: "Better recovery patterns correlated with training consistency"
    },
    
    cycleContext: {
      tracked: false,
      notes: "Not tracked during this cycle"
    },
    
    performance: {
      strengthProgressionNotes: "Steady improvements across all major lifts; no plateaus",
      volumeAnalysis: "Successfully maintained training volume through 3 business trips",
      workCapacity: "Increased tolerance for training density",
      keyLifts: []
    },
    
    programDesign: {
      structure: "4x/week upper/lower split with travel modifications",
      progressionStrategy: "Flexible progression with minimum viable sessions",
      adaptations: "Hotel gym protocols established for travel weeks"
    },
    
    adherence: {
      sessionsCompleted: 58,
      sessionsMissed: 6,
      adherenceRate_pct: 90.6,
      behaviouralNotes: "First sustained training block without dropout; habit systems proved effective"
    },
    
    outcomeSummary: {
      primaryOutcomes: [
        "16-week consistency achievement (longest uninterrupted training period)",
        "Habit formation independent of motivation or ideal conditions",
        "Strength progression maintained through environmental disruptions"
      ],
      secondaryOutcomes: [
        "Reduced training friction via environment design",
        "Improved relationship with training as non-negotiable routine",
        "Better stress regulation patterns"
      ],
      limitationsAndContext: "High-stress environment required significant behavioral architecture; results emphasize adherence over intensity"
    }
  }
};
