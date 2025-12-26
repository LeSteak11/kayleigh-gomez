// Case: KG-CASSIDY-REGAN
// Full case data structure derived from client report
// Modal displays summary-level fields; full report page will use extended data

export default {
  // ===== Core Identifiers =====
  id: "KG-CASSIDY-REGAN",
  slug: "kg-cassidy-regan",
  year: 2024,
  clientConsent: true,
  displayName: "Cassidy",
  
  // ===== Modal-Level Summary Fields =====
  metadata: {
    durationWeeks: 16, // Standard programming cycle
    systemFocus: "strength", // Glute refinement + compound movements
    ageRange: "20-24"
  },
  
  constraints: [
    "High posterior chain volume requiring fatigue management",
    "Maintenance phase requiring metabolic monitoring",
    "Advanced training age requiring progressive overload precision"
  ],
  
  observedChanges: [
    "Maintained sub-16% body fat without metabolic adaptation",
    "Glute refinement with preserved rear-delt development",
    "Progressive overload achieved across compound movements",
    "Optimal adherence to nutritional protocols throughout program"
  ],
  
  images: {
    before: "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=400&h=600&fit=crop",
    after: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=600&fit=crop",
    additional: []
  },
  
  // ===== Full Report Fields =====
  fullReport: {
    // Identity & Context
    identity: {
      trainingAge: "Advanced (4 years)",
      priorExperience: "Competition prep and maintenance phases",
      primaryGoals: [
        "Glute refinement and rear-delt preservation",
        "Maintenance of sub-16% body fat",
        "Progressive overload in compound movements"
      ]
    },
    
    // Morphology & Body Composition
    bodyComposition: {
      baseline: {
        weight_kg: 62.5,
        bodyFat_pct: 15,
        leanMass_kg: 53.1
      },
      endpoint: {
        weight_kg: 63.0,
        bodyFat_pct: 15,
        leanMass_kg: 53.6
      },
      changeNotes: "Maintained composition while achieving hypertrophy in target areas. Visible abdominal definition and upper limb vascularity preserved. Lean mass gain achieved through targeted glute and posterior chain development."
    },
    
    // Anthropometric Data
    anthropometrics: {
      height_cm: 170,
      bodyType: "Ecto-Mesomorph (naturally athletic with lean muscle insertions)",
      deltas: {
        notes: "Excellent X-frame structure maintained: broad shoulders, tight waist, developed hips. Glute shelf development enhanced through hip-extension focus."
      }
    },
    
    // Biomechanics & Risk Assessment
    biomechanics: {
      movementQuality: "Strong posterior chain mechanics with excellent hip hinge patterns. High transverse abdominis control evident in compound movements.",
      injuryRisk: "Moderate - requires monitoring for lower back fatigue due to high volume posterior chain work",
      notes: "Progressive loading well-tolerated. Symmetry maintained throughout training block."
    },
    
    // Vitals & Recovery
    vitals: {
      rhr_baseline: 58,
      rhr_endpoint: 57,
      sleepQuality: "Optimal recovery patterns maintained",
      recoveryNotes: "Adequate recovery between high-volume sessions. Active recovery protocols integrated successfully."
    },
    
    // Cycle-Aware Context
    cycleContext: {
      tracked: false,
      notes: "Not tracked for this client"
    },
    
    // Performance Analytics
    performance: {
      strengthProgressionNotes: "Consistent progressive overload across all major lifts. Hip thrust strength notably advanced.",
      volumeAnalysis: "High posterior chain volume managed effectively with fatigue monitoring protocols",
      workCapacity: "Advanced work capacity maintained throughout 16-week block",
      
      keyLifts: [
        { exercise: "Squat", baseline_kg: 97.5, endpoint_kg: 102.5, improvement_pct: 5.1 },
        { exercise: "Deadlift", baseline_kg: 111, endpoint_kg: 117.5, improvement_pct: 5.9 },
        { exercise: "Hip Thrust", baseline_kg: 143, endpoint_kg: 155, improvement_pct: 8.4 },
        { exercise: "Pull-Up", baseline_reps: 12, endpoint_reps: 15, improvement_pct: 25 }
      ]
    },
    
    // Program Design Notes
    programDesign: {
      structure: "5-day split: Glutes/Hamstrings, Shoulders/Back, Active Recovery, Quads/Glutes, Upper Pump",
      progressionStrategy: "Progressive overload in compound movements with density maintenance focus",
      adaptations: "Integrated active recovery and LISS cardio to manage high posterior chain volume"
    },
    
    // Adherence & Behavioral Data
    adherence: {
      sessionsCompleted: 76,
      sessionsMissed: 4,
      adherenceRate_pct: 95,
      behaviouralNotes: "High adherence to nutritional protocols. Excellent self-monitoring of fatigue levels."
    },
    
    // Outcome Summary (detailed)
    outcomeSummary: {
      primaryOutcomes: [
        "Glute refinement achieved with significant hypertrophy in Gluteus Maximus and Medius",
        "Maintained sub-16% body fat throughout training block without metabolic adaptation",
        "Progressive overload achieved: Hip Thrust +8.4%, Deadlift +5.9%, Pull-Ups +25%",
        "Preserved rear-delt and back width development (V-taper maintained)"
      ],
      secondaryOutcomes: [
        "Enhanced core definition (rectus abdominis and obliques)",
        "Improved work capacity for high-volume posterior chain training",
        "Maintained excellent symmetry and X-frame structure"
      ],
      limitationsAndContext: "Advanced training age required precise progressive overload programming. Lower back fatigue monitoring essential due to high posterior chain volume."
    }
  }
};
