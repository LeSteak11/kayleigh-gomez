// Case: KG-SARAH-CHEN
// Placeholder case file - populate with real data

export default {
  // ===== Core Identifiers =====
  id: "KG-SARAH-CHEN",
  slug: "kg-sarah-chen",
  year: 2023,
  clientConsent: true,
  displayName: "Sarah",
  
  // ===== Modal-Level Summary Fields =====
  metadata: {
    durationWeeks: 12,
    systemFocus: "consistency",
    ageRange: "30-34",
    trainingFrequency: "3x/week",
    programPhase: "habit-building"
  },
  
  // Context & Constraints (analytical format)
  contextConstraints: {
    trainingAvailability: "limited to 3 days/week",
    equipmentAccess: "home gym setup",
    recoveryCapacity: "stress management focus",
    phaseConsiderations: "building sustainable routine"
  },
  
  // Key Outcomes (structured, measurable)
  outcomes: {
    bodyComposition: "gradual fat loss maintained",
    strength: "consistent strength development",
    hypertrophy: "moderate muscle gain",
    adherence: "95% session attendance achieved"
  },
  
  // Performance & Adaptation (optional, data-driven)
  performance: {
    strengthTrend: "↑",
    volumeTolerance: "moderate",
    recoveryMarkers: "improved",
    fatigueManagement: "well-balanced"
  },
  
  // Program Notes (optional, single line)
  programNotes: "Focus on consistency over intensity yielded sustainable results.",
  
  // Background & Summary
  background: "Sarah is an intermediate trainee with inconsistent training history. She had multiple start-stop cycles over previous years and sought to establish a sustainable, long-term routine.\n\nShe trained primarily at home with limited equipment and valued flexibility and stress management. Her primary goal was consistency rather than aggressive transformation.\n\nDuring this phase, she achieved the most consistent training block of her fitness journey, with 95% session attendance and gradual but sustainable progress in both strength and body composition.",
  
  // Tags (for filtering and search)
  tags: [
    "Intermediate",
    "Consistency",
    "Home Training",
    "Sustainable Habits"
  ],
  
  // Photos for carousel - just upload as 1.jpg, 2.jpg, 3.jpg, etc.
  photos: [
    { src: "./client-pics/kg-sarah-chen/1.jpg", alt: "Client progress photo", label: "" },
    { src: "./client-pics/kg-sarah-chen/2.jpg", alt: "Client progress photo", label: "" },
    { src: "./client-pics/kg-sarah-chen/3.jpg", alt: "Client progress photo", label: "" },
    { src: "./client-pics/kg-sarah-chen/4.jpg", alt: "Client progress photo", label: "" },
    { src: "./client-pics/kg-sarah-chen/5.jpg", alt: "Client progress photo", label: "" },
    { src: "./client-pics/kg-sarah-chen/6.jpg", alt: "Client progress photo", label: "" },
    { src: "./client-pics/kg-sarah-chen/7.jpg", alt: "Client progress photo", label: "" },
    { src: "./client-pics/kg-sarah-chen/8.jpg", alt: "Client progress photo", label: "" }
  ],
  
  // Deprecated: keeping for backward compatibility
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
      primaryGoals: [
        "Establish consistent training routine",
        "Stress management through exercise",
        "Sustainable fat loss"
      ]
    },
    
    bodyComposition: {
      baseline: {
        weight_kg: 72.0,
        bodyFat_pct: 30,
        leanMass_kg: 50.4
      },
      endpoint: {
        weight_kg: 69.5,
        bodyFat_pct: 27,
        leanMass_kg: 50.7
      },
      changeNotes: "Gradual fat loss with lean mass preservation. Focus on sustainable changes rather than aggressive transformation."
    },
    
    anthropometrics: {
      height_cm: 168,
      bodyType: "Mesomorph with good muscle building potential",
      deltas: {
        notes: "Improved overall muscle tone and definition. Sustainable progress without extreme measures."
      }
    },
    
    biomechanics: {
      movementQuality: "Solid movement patterns with home equipment adaptations",
      injuryRisk: "Low - appropriate volume management",
      notes: "Good body awareness and control throughout movements."
    },
    
    vitals: {
      rhr_baseline: 68,
      rhr_endpoint: 64,
      sleepQuality: "Significantly improved",
      recoveryNotes: "Better stress management and recovery practices established."
    },
    
    cycleContext: {
      tracked: false,
      notes: "Not tracked for this client"
    },
    
    performance: {
      strengthProgressionNotes: "Steady strength progression with home equipment. Focus on movement quality and consistency.",
      volumeAnalysis: "Moderate volume appropriate for 3x/week frequency and equipment constraints",
      workCapacity: "Improved steadily throughout block",
      
      keyLifts: [
        { exercise: "Goblet Squat", baseline_kg: 16, endpoint_kg: 24, improvement_pct: 50 },
        { exercise: "Romanian Deadlift", baseline_kg: 30, endpoint_kg: 42, improvement_pct: 40 },
        { exercise: "Push-Up", baseline_reps: 8, endpoint_reps: 15, improvement_pct: 87.5 },
        { exercise: "Inverted Row", baseline_reps: 6, endpoint_reps: 12, improvement_pct: 100 }
      ]
    },
    
    programDesign: {
      structure: "3-day full body split optimized for home equipment",
      progressionStrategy: "Sustainable progression with focus on consistency over intensity",
      adaptations: "Modified exercises for home gym setup with limited equipment"
    },
    
    adherence: {
      sessionsCompleted: 34,
      sessionsMissed: 2,
      adherenceRate_pct: 94,
      behaviouralNotes: "Breakthrough in consistency compared to previous training attempts. Strong commitment to routine."
    },
    
    outcomeSummary: {
      primaryOutcomes: [
        "Achieved 94% adherence - highest consistency in client's training history",
        "Sustainable fat loss of 2.5kg with lean mass preservation",
        "40-100% strength improvements across all movement patterns",
        "Established sustainable training routine compatible with lifestyle"
      ],
      secondaryOutcomes: [
        "Improved stress management and mental health",
        "Better sleep quality and recovery",
        "Increased confidence and training enjoyment",
        "Sustainable habits established for long-term success"
      ],
      limitationsAndContext: "Home training environment with limited equipment. Focus on consistency and sustainability rather than maximal performance outcomes."
    }
  }
};
