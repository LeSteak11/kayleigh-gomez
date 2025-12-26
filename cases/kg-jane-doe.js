// Case: KG-JANE-DOE
// Placeholder case file - populate with real data

export default {
  // ===== Core Identifiers =====
  id: "KG-JANE-DOE",
  slug: "kg-jane-doe",
  year: 2024,
  clientConsent: true,
  displayName: "Jane",
  
  // ===== Modal-Level Summary Fields =====
  metadata: {
    durationWeeks: 10,
    systemFocus: "strength",
    ageRange: "25-29",
    trainingFrequency: "4x/week",
    programPhase: "recomposition"
  },
  
  // Context & Constraints (analytical format)
  contextConstraints: {
    trainingAvailability: "4-day schedule",
    equipmentAccess: "full gym",
    recoveryCapacity: "moderate",
    phaseConsiderations: "building consistency"
  },
  
  // Key Outcomes (structured, measurable)
  outcomes: {
    bodyComposition: "body recomposition achieved",
    strength: "progressive overload across all lifts",
    hypertrophy: "lean muscle gain",
    adherence: "strong program adherence"
  },
  
  // Performance & Adaptation (optional, data-driven)
  performance: {
    strengthTrend: "↑",
    volumeTolerance: "increased",
    recoveryMarkers: "stable",
    fatigueManagement: "well-managed"
  },
  
  // Program Notes (optional, single line)
  programNotes: "Excellent progression with beginner gains phase.",
  
  // Background & Summary
  background: "Jane is a beginner trainee who started with limited gym experience. She approached training with a focus on building foundational strength and establishing consistent habits.\n\nShe trained in a commercial gym setting and valued clear programming with measurable progress. Her primary goal was body recomposition while building a sustainable training routine.\n\nDuring this phase, she achieved significant strength gains typical of novice lifters while improving body composition through consistent training and nutrition adherence.",
  
  // Tags (for filtering and search)
  tags: [
    "Beginner",
    "Strength",
    "Recomposition",
    "Consistency"
  ],
  
  // Photos for carousel - just upload as 1.jpg, 2.jpg, 3.jpg, etc.
  photos: [
    { src: "./client-pics/kg-jane-doe/1.jpg", alt: "Client progress photo", label: "" },
    { src: "./client-pics/kg-jane-doe/2.jpg", alt: "Client progress photo", label: "" },
    { src: "./client-pics/kg-jane-doe/3.jpg", alt: "Client progress photo", label: "" },
    { src: "./client-pics/kg-jane-doe/4.jpg", alt: "Client progress photo", label: "" },
    { src: "./client-pics/kg-jane-doe/5.jpg", alt: "Client progress photo", label: "" },
    { src: "./client-pics/kg-jane-doe/6.jpg", alt: "Client progress photo", label: "" },
    { src: "./client-pics/kg-jane-doe/7.jpg", alt: "Client progress photo", label: "" },
    { src: "./client-pics/kg-jane-doe/8.jpg", alt: "Client progress photo", label: "" }
  ],
  
  // Deprecated: keeping for backward compatibility
  images: {
    before: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=600&fit=crop",
    after: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=600&fit=crop",
    additional: []
  },
  
  // ===== Full Report Fields =====
  fullReport: {
    identity: {
      trainingAge: "Beginner (6 months)",
      priorExperience: "Minimal gym experience",
      primaryGoals: [
        "Build foundational strength",
        "Body recomposition",
        "Establish consistent training habits"
      ]
    },
    
    bodyComposition: {
      baseline: {
        weight_kg: 68.0,
        bodyFat_pct: 28,
        leanMass_kg: 49.0
      },
      endpoint: {
        weight_kg: 66.5,
        bodyFat_pct: 24,
        leanMass_kg: 50.5
      },
      changeNotes: "Successful recomposition with fat loss and lean muscle gain. Visible improvements in muscle definition and overall body composition."
    },
    
    anthropometrics: {
      height_cm: 165,
      bodyType: "Endomorph with good response to training",
      deltas: {
        notes: "Improved muscle tone and definition throughout. Excellent beginner response to resistance training."
      }
    },
    
    biomechanics: {
      movementQuality: "Good learning progression with movement patterns. Improved hip hinge and squat mechanics.",
      injuryRisk: "Low - proper progression with beginner programming",
      notes: "Strong foundation built for long-term training success."
    },
    
    vitals: {
      rhr_baseline: 72,
      rhr_endpoint: 68,
      sleepQuality: "Improved through training block",
      recoveryNotes: "Good recovery between sessions with appropriate volume for training age."
    },
    
    cycleContext: {
      tracked: false,
      notes: "Not tracked for this client"
    },
    
    performance: {
      strengthProgressionNotes: "Excellent beginner gains across all major movement patterns. Linear progression protocol successful.",
      volumeAnalysis: "Appropriate volume for beginner adaptation. Progressive overload applied consistently.",
      workCapacity: "Significantly improved from baseline",
      
      keyLifts: [
        { exercise: "Squat", baseline_kg: 40, endpoint_kg: 60, improvement_pct: 50 },
        { exercise: "Deadlift", baseline_kg: 50, endpoint_kg: 75, improvement_pct: 50 },
        { exercise: "Bench Press", baseline_kg: 25, endpoint_kg: 35, improvement_pct: 40 },
        { exercise: "Overhead Press", baseline_kg: 15, endpoint_kg: 22.5, improvement_pct: 50 }
      ]
    },
    
    programDesign: {
      structure: "4-day upper/lower split with progressive overload focus",
      progressionStrategy: "Linear progression with beginner protocol",
      adaptations: "Introduced compound movements with technique emphasis"
    },
    
    adherence: {
      sessionsCompleted: 38,
      sessionsMissed: 2,
      adherenceRate_pct: 95,
      behaviouralNotes: "Excellent consistency and commitment to program. Strong nutrition adherence."
    },
    
    outcomeSummary: {
      primaryOutcomes: [
        "Successful body recomposition: -1.5kg bodyweight, -4% body fat, +1.5kg lean mass",
        "Strength gains of 40-50% across all major lifts",
        "Established consistent training habits and proper movement patterns",
        "Improved cardiovascular fitness and work capacity"
      ],
      secondaryOutcomes: [
        "Increased confidence in gym environment",
        "Better understanding of nutrition and recovery",
        "Improved overall energy levels and sleep quality"
      ],
      limitationsAndContext: "Beginner trainee with linear progression potential. Results typical of novice response to structured training."
    }
  }
};
