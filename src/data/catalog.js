export const clients = [
  {
    id: "shipyaari",
    company: "Shipyaari",
    person: "Nayan Ratandhayara",
    role: "CEO",
    quote:
      "Lost 7kg and transformed my health in 45 days. Triglycerides dropped from 257.3 to 136, glucose improved, and Vitamin B12 doubled.",
  },
  {
    id: "monk",
    company: "Monk Entertainment",
    person: "Viraj Sheth",
    role: "CEO",
    quote:
      "I did my Bio-AI health analysis and the report was clear and in-depth. Personalized recommendations helped me make informed lifestyle choices.",
  },
  {
    id: "yrf",
    company: "Yash Raj Films",
    person: "Rohan Malhotra",
    role: "VP",
    quote:
      "The analysis helped me identify potential health risks early. The process was seamless, and the guidance made it easy to take the next step.",
  },
]

const haemogram = [
  "Absolute Basophils Count",
  "Absolute Eosinophil Count",
  "Absolute Lymphocyte Count",
  "Absolute Monocyte Count",
  "Absolute Neutrophil Count",
  "ESR Automated",
  "Hemoglobin Hb",
  "MCH",
  "MCHC",
  "MCV",
  "MPV Mean Platelet Count",
  "PCV Haematocrit",
  "Platelet Count",
  "Thrombocyte Count",
  "WBC-Total Count Leukocytes",
  "RDW (Red cell distribution)",
  "Neutrophils",
  "Eosinophils",
  "Lymphocytes",
  "Monocytes",
  "Basophils",
  "RDW-CV",
  "RCC",
  "GK Index",
  "Mentzer Index",
]

const lipid = [
  "Cholesterol Total",
  "HDL Cholesterol Direct",
  "Triglycerides",
  "Non-HDL Cholesterol",
  "CHOL/HDL Ratio",
  "LDL Cholesterol",
  "VLDL Cholesterol",
  "LDL/HDL Cholesterol",
  "HDL/LDL Cholesterol Ratio",
]

const liver = [
  "Albumin",
  "Alkaline Phosphatase",
  "Bilirubin Direct",
  "Bilirubin Total",
  "GGPT",
  "Proteins Serum",
  "SGOT (AST)",
  "SGPT (ALT)",
  "Bilirubin Indirect",
  "Globulin",
  "A/G Ratio",
  "SGOT/SGPT Ratio",
]

const kidney = [
  "BUN Urea Nitrogen",
  "Calcium Total",
  "Chlorides",
  "Creatinine",
  "Sodium",
  "Urea",
  "Uric Acid",
  "BUN/Creatinine Ratio",
  "Urea/Creatinine Ratio",
  "EGFR",
  "Phosphorus-Inorganic",
  "Potassium",
]

const iron = ["Iron Serum", "TIBC", "UBIC", "Transferrin Saturation"]

const thyroid = ["T3 Free Iodothyronine", "T4 Free Thyroxine", "TSH Ultra-Sensitive"]

export const packages = [
  {
    id: "core",
    tone: "forest",
    kicker: "Essential annual screen",
    name: "SuperShyft Core",
    price: "899",
    summary:
      "Metabolic, cardiac, liver, kidney, thyroid and blood health, drawn from a single collection.",
    reportLine:
      "67 clinical parameters across 7 categories, reported in the SuperShyft Bio-AI app.",
    highlight: ["Metabolic", "Cardiac", "Liver", "Kidney", "Thyroid", "Blood"],
    groups: [
      { name: "Complete Haemogram", count: 25, items: haemogram },
      { name: "Liver Function Tests", count: 12, items: liver },
      { name: "Kidney Function Tests", count: 12, items: kidney },
      { name: "Lipid Profile", count: 9, items: lipid },
      { name: "Iron Profile", count: 4, items: iron },
      { name: "Thyroid Profile", count: 3, items: thyroid },
      { name: "Diabetes Profile", count: 2, items: ["Fasting Sugar", "HbA1c"] },
    ],
  },
  {
    id: "csuite",
    tone: "light",
    kicker: "Most exhaustive screen",
    name: "C-Suite",
    mark: "Women",
    price: "13,999",
    summary:
      "Full-body diagnostics plus allergy, hormones and cancer markers. One collection, the widest panel we offer.",
    reportLine:
      "127 clinical parameters across 16 categories, reported in the SuperShyft Bio-AI app.",
    highlight: ["Allergies", "Cancer risk", "Hormones", "Cardiac", "Vitamins"],
    groups: [
      { name: "Complete Haemogram", count: 25, items: haemogram },
      { name: "Liver Function Tests", count: 12, items: liver },
      { name: "Kidney Function Tests", count: 12, items: kidney },
      { name: "Lipid Profile", count: 9, items: lipid },
      { name: "Thyroid Profile", count: 3, items: thyroid },
      {
        name: "Urine Routine & Microscopy",
        count: 21,
        items: [],
        note: "A 21-parameter urine routine and microscopy panel, reported inside the Bio-AI app.",
      },
      {
        name: "Sleep Markers",
        count: 2,
        items: [],
        note: "Two sleep markers, reported inside the Bio-AI app.",
      },
      {
        name: "Vitamins",
        count: 3,
        items: ["Vit B12 (Cyanocobalamin)", "Vit D Total-25 Hydroxy", "Vitamin C"],
      },
      { name: "Iron Profile", count: 4, items: iron },
      {
        name: "Hormones",
        count: 8,
        items: [
          "Cortisol",
          "Total Testosterone",
          "DHEAS",
          "PTH",
          "IGF-1",
          "LH (Luteinizing Hormone)",
          "FSH (Follicle-Stimulating Hormone)",
          "Prolactin",
        ],
      },
      {
        name: "Inflammatory Markers",
        count: 3,
        items: ["ESR (Erythrocyte Sedimentation Rate)", "HS-CRP", "Homocysteine"],
      },
      {
        name: "Cancer Panel",
        count: 4,
        items: [
          "CA-125 — Ovarian cancer",
          "CA 15.3 — Breast cancer",
          "CA 19.9 — Pancreatic cancer",
          "CEA — Colorectal cancer",
        ],
      },
      {
        name: "Allergy Panel",
        count: 15,
        items: [
          "IGE Total",
          "Allergy Drugs Profile",
          "Allergy Pet Profile",
          "Allergy Dust Mites",
          "Allergy Insects",
          "Allergy Grass Mix",
          "Allergy Moulds and Yeast",
          "Allergy Weed and Tree",
          "Allergy Non-veg Food",
          "Allergy Veg-Food and Fruit",
          "Allergy Occupational",
          "Allergy Parasites",
          "Allergy Seed, Nuts, Legumes",
          "Allergy Dairy Products",
          "Allergy Spices",
        ],
      },
      { name: "Heart Health", count: 2, items: ["Lipo-A", "Apo-B"] },
      { name: "Bone Health", count: 1, items: ["Calcium"] },
      {
        name: "Diabetes Profile",
        count: 3,
        items: ["Fasting Sugar", "HbA1c", "Fasting Insulin"],
      },
    ],
  },
]

export const steps = [
  {
    n: "01",
    title: "Schedule the Bio-AI test",
    body: "Book the collection and answer a short lifestyle history. One draw covers the whole panel.",
  },
  {
    n: "02",
    title: "Read the SuperShyft report",
    body: "Markers land in the Bio-AI app, read as metabolic risk rather than a wall of numbers.",
  },
  {
    n: "03",
    title: "Get a lifestyle plan",
    body: "Nutrition and training are built from that report, not from a generic template.",
  },
  {
    n: "04",
    title: "Test again",
    body: "Repeat every few months and watch the same markers move.",
  },
]
