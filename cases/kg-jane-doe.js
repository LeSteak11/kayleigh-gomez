// Case: KG-JANE-DOE
// Full case data structure derived from client report PDF
// Modal displays summary-level fields; full report page will use extended data

export default {
  // ===== Core Identifiers =====
  id: "KG-JANE-DOE",
  slug: "kg-jane-doe",
  year: 2024,
  clientConsent: true,
  displayName: "Jane", // Optional: use for UI if desired
  
  // ===== Modal-Level Summary Fields =====
  metadata: {
    durationWeeks: 12,
    systemFocus: "strength",
    ageRange: "25-29",
    trainingFrequency: "3-4x/week",
    programPhase: "build"
  },
  
  // Context & Constraints (analytical format)
  contextConstraints: {
    trainingAvailability: "variable (shift work)",
    equipmentAccess: "home gym only",
    recoveryCapacity: "managed via autoregulation",
    phaseConsiderations: "previous injury accommodations"
  },
  
  // Key Outcomes (structured, measurable)
  outcomes: {
    strength: "increased lower body strength via bodyweight progressions",
    technique: "improved hip hinge mechanics",
    adherence: "established 3-4x/week consistency",
    bodyComposition: "maintained composition during strength phase"
  },
  
  // Performance & Adaptation (optional)
  performance: {
    strengthTrend: "↑",
    volumeTolerance: "maintained despite schedule variability",
    recoveryMarkers: "improved sleep consistency",
    fatigueManagement: "effective"
  },
  
  // Program Notes
  programNotes: "Modified scheduling approach for shift work compatibility. Progressive loading well-tolerated.",
  
  // Tags (for filtering and search)
  tags: [
    "Beginner",
    "Strength",
    "Home Gym",
    "Schedule Flexibility",
    "Injury Accommodation"
  ],
  
  images: {
    before: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=600&fit=crop",
    after: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=600&fit=crop",
    additional: [] // For future multi-image galleries
  },
  
  // ===== Full Report Fields (stored now, rendered later) =====
  fullReport: {
    // Identity & Context
    identity: {
      trainingAge: "Beginner",
      priorExperience: "Inconsistent gym attendance",
      primaryGoals: ["Strength development", "Consistency building"]
    },
    
    // Morphology & Body Composition
    bodyComposition: {
      baseline: {
        weight_kg: null, // Keep private unless specified
        bodyFat_pct: null,
        leanMass_kg: null
      },
      endpoint: {
        weight_kg: null,
        bodyFat_pct: null,
        leanMass_kg: null
      },
      changeNotes: "Observable muscle development in lower body; maintained body composition during strength phase"
    },
    
    // Anthropometric Data
    anthropometrics: {
      deltas: {
        // Privacy-conscious: only include if client consents to specific metrics
        notes: "Measured changes in key areas; data available in private report"
      }
    },
    
    // Biomechanics & Risk Assessment
    biomechanics: {
      movementQuality: "Improved hip hinge mechanics; reduced compensatory patterns",
      injuryRisk: "Low; previous considerations addressed through programming modifications",
      notes: "Progressive loading well-tolerated"
    },
    
    // Vitals & Recovery
    vitals: {
      rhr_baseline: null,
      rhr_endpoint: null,
      sleepQuality: "Improved reported sleep consistency",
      recoveryNotes: "Adequate recovery between sessions"
    },
    
    // Cycle-Aware Context (if applicable)
    cycleContext: {
      tracked: false,
      notes: "Not applicable to this case"
    },
    
    // Performance Analytics
    performance: {
      strengthProgressionNotes: "Consistent progressive overload across major movement patterns",
      volumeAnalysis: "Maintained training volume despite schedule variability",
      workCapacity: "Improved tolerance for higher training density",
      
      keyLifts: [
        // Example structure for future detailed tracking
        // { exercise: "Squat", baseline_kg: 40, endpoint_kg: 60, improvement_pct: 50 }
      ]
    },
    
    // Program Design Notes
    programDesign: {
      structure: "3-4x/week full body",
      progressionStrategy: "Linear progression with autoregulation",
      adaptations: "Modified scheduling approach for shift work compatibility"
    },
    
    // Adherence & Behavioral Data
    adherence: {
      sessionsCompleted: 42,
      sessionsMissed: 6,
      adherenceRate_pct: 87.5,
      behaviouralNotes: "Successfully built habit infrastructure independent of motivation"
    },
    
    // Outcome Summary (detailed)
    outcomeSummary: {
      primaryOutcomes: [
        "Strength development across major movement patterns",
        "Consistent training adherence despite environmental constraints",
        "Improved movement quality and technical proficiency"
      ],
      secondaryOutcomes: [
        "Enhanced confidence in gym environment",
        "Sustainable training rhythm established"
      ],
      limitationsAndContext: "Home equipment constraints limited exercise variety; addressed through creative programming"
    }
  }
};
