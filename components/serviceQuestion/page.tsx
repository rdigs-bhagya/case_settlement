export type QuestionAnswerConfig = {
    question: string;
    type: "select" | "radio" | "checkbox" | "text" | "number" | "input" | "textarea";
    options: string[];
    placeholder?: string;
};

// Example: Define questions for each service
export const SERVICE_QUESTIONS: Record<string, QuestionAnswerConfig[]> = {
    afff: [
        {
            question: "Were you or a loved one a firefighter or U.S. Military Service member exposed to AFFF?",
            type: "select",
            options: ["Yes", "No"],
        },
        {
            question: "Indicate the number of times you were exposed",
            type: "select",
            options: ["1-10", "10-20", "20-30"],
        },
        {
            question: "In what occupation were you directly exposed?",
            type: "select",
            options: ["Firefighter", "First Responder", "Other Military Personnel", "Airport Personnel"],
        },
        {
            question: "Is the injured party deceased?",
            type: "radio",
            options: ["Yes", "No"],
        },
        {
            question: "Have you or a loved one developed any of the following conditions after being exposed to AFFF?",
            type: "checkbox",
            options: ["Other Cancer", "Multi Myeloma", "Infertility", "Ovarian Cancer", "Thyroid Cancer", "Leukemia", "Pancreatic Cancer", "Breast Cancer", "Lymphoma"],
        },
    ],

    //   nec
    nec: [
        {
            question: "Has your child been diagnosed with Necrotizing Enterocolitis (NEC)?",
            type: "radio",
            options: ["Yes", "No"],
        },
        {
            question: "Was your child given formula or fortifier before being diagnosed with NEC?",
            type: "radio",
            options: ["Yes", "No"],
        },
        {
            question: "Were there any complications with your child's NEC?",
            type: "radio",
            options: ["Yes", "No"],
        },
    ],

    // mva
    mva: [
        {
            question: "Were you involved in a motor vehicle accident?",
            type: "radio",
            options: ["Yes", "No"],
        },
        {
            question: "Which state did the accident occur in?",
            type: "select",
            options: ["California (CA)", "New York (NY)", "Texas (TX)", "Other"],
        },
        {
            question: "What type of vehicle were you in?",
            type: "select",
            options: ["Car", "Truck", "Motorcycle", "Other"],
        },
        {
            question: "Were there any injuries?",
            type: "radio",
            options: ["Yes", "No"],
        },
        {
            question: "Please indicate the type of injury sustained (if any)",
            type: "checkbox",
            options: [
                "Whiplash",
                "Fracture/Broken Bones",
                "Head Injury",
                "Back Injury",
                "Soft Tissue Injury",
                "Other",
            ],
        },
        {
            question: "Was the other party at fault?",
            type: "radio",
            options: ["Yes", "No", "Unknown"],
        },
        {
            question: "Was a police report filed?",
            type: "radio",
            options: ["Yes", "No"],
        },
    ],

    // roundup
    roundUp: [
        {
            question: "Did you use Roundup weed killer?",
            type: "select",
            options: ["Yes", "No"],
        },
        {
            question: "Did you have a qualifying diagnosis within 20 years of the last use of Roundup?",
            type: "select",
            options: ["Yes", "No"],
        },
        {
            question: "Have you or a loved one been diagnosed with:",
            type: "select",
            options: [
                "Non-Hodgkin's Lymphoma (NHL)",
                "Hodgkin's Lymphoma (HL)",
                "Chronic Lymphocytic Leukemia (CLL)",
                "Angioimmunoblastic T-cell Lymphoma (ATL)",
                "Cutaneous T-Cell Lymphoma",
                "T-Cell Lymphoma",
                "B-Cell Lymphoma",
                "Anaplastic Large T/Null-Cell Lymphoma (T/N-ALCL)",
                "Burkitt Lymphoma (B-BL)",
                "Diffuse Large B-Cell Lymphoma (B-DLCL)",
                "Follicular Lymphoma (B-FL)",
                "Mantle Cell Lymphoma (MCL)",
                "Small Lymphocytic Lymphoma (B-SLL)",
                "Primary CNS Lymphoma",
                "Hairy Cell Leukemia",
                "Mycosis Fungoides",
                "Plasmacytoma (B-PC)",
                "Sezary Syndrome (T-SS)",
                "Other Lymphoma",
                "Other Cancer",
                "No Diagnosis",
            ],
        },
        {
            question: "What year were you or a loved one diagnosed?",
            type: "input",
            options: [], // input type doesn't need options
        },
        {
            question: "Did you have any of the following prior to NHL diagnosis?",
            type: "select",
            options: [
                "HIV or AIDS diagnosis",
                "Hepatitis B or C diagnosis",
                "Agent Orange exposure",
                "Organ transplant recipient",
                "Prior chemotherapy",
                "No",
            ],
        },
        {
            question: "Did you use Roundup, Honcho Plus, or Ranger Pro for at least 3 years?",
            type: "select",
            options: ["Yes", "No"],
        },
        {
            question: "Do you currently have a lawyer representing your claim?",
            type: "select",
            options: ["Yes", "No"],
        },
    ],

    // hair-relaxer
    "hair-relaxer": [
        {
            "question": "Were you diagnosed in 2010 or later after usage of a hair relaxer product within 10 years of last use?",
            "type": "select",
            "options": [
                "Endometrial Cancer",
                "Ovarian Cancer",
                "Uterine Cancer",
                "Other",
                "None"
            ]
        },
        {
            "question": "What year were you diagnosed?",
            "type": "number",
            options: []
        },
        {
            "question": "Were you diagnosed at 60 years or younger at time of diagnosis?",
            "type": "select",
            "options": ["Yes", "No"]
        },
        {
            "question": "Did you use a hair relaxer at least 4 times per year during your period of highest use for a minimum of 4 years continuously before diagnosis?",
            "type": "select",
            "options": ["Yes", "No"]
        },
        {
            "question": "Do you have a valid US SSN?",
            "type": "select",
            "options": ["Yes", "No"]
        },
        {
            "question": "Is the death SOL expired or within 90 days of expiring (SOL based on deceased date and state)?",
            "type": "select",
            "options": ["Yes", "No"]
        },
        {
            "question": "Are you currently an inmate of a prison or jail?",
            "type": "select",
            "options": ["Yes", "No"]
        },
        {
            "question": "Are you currently being represented by an attorney for a case with same diagnosis?",
            "type": "select",
            "options": ["Yes", "No"]
        }
    ],

    // product-liability
    "product-liability": [
        {
            "question": "What type of defective product caused your injury?",
            "type": "select",
            "options": ["Pharmaceutical", "Medical Device", "Consumer Product", "Other"],
        },
        {
            "question": "What is the brand name, model, or product identifier?",
            "type": "input",
            "options": [],
        },
        {
            "question": "When did you first use the product?",
            "type": "input",
            "options": [],
        },
        {
            "question": "When did you first notice problems or injuries caused by the product?",
            "type": "input",
            "options": [],
        },
        {
            "question": "Please describe the injury, illness, or damages you suffered.",
            "type": "input",
            "options": [],
        },
        {
            "question": "Did you seek medical treatment for this injury?",
            "type": "select",
            "options": ["Yes", "No"],
        },
        {
            "question": "If yes, please provide details of diagnosis and treatment.",
            "type": "input",
            "options": [],
        },
        {
            "question": "Do you still have the defective product in your possession?",
            "type": "select",
            "options": ["Yes", "No"],
        },
        {
            "question": "Where did you purchase the product?",
            "type": "select",
            "options": ["Store", "Online", "Pharmacy", "Hospital", "Other"],
        },
        {
            "question": "Have you missed work or lost income due to this injury?",
            "type": "select",
            "options": ["Yes", "No"],
        },
        {
            "question": "If yes, please estimate the lost wages.",
            "type": "input",
            "options": [],
        },
        {
            "question": "Have you been contacted by the manufacturer, distributor, or retailer regarding this product?",
            "type": "select",
            "options": ["Yes", "No"],
        },
        {
            "question": "Have you filed any prior claims or lawsuits related to this product?",
            "type": "select",
            "options": ["Yes", "No"],
        }
    ],

    // mass-tort-litigation
    "mass-tort-litigation": [
        {
            "question": "What type of mass tort exposure did you experience?",
            "type": "select",
            "options": [
                "Class Action",
                "Corporate Negligence",
                "Environmental Exposure",
                "Other"
            ]
        },
        {
            "question": "Did you seek medical treatment for this exposure or injury?",
            "type": "select",
            "options": ["Yes", "No"]
        },
        {
            "question": "Have you filed any prior claims or lawsuits related to this matter?",
            "type": "select",
            "options": ["Yes", "No"]
        },
        {
            "question": "Are you currently represented by an attorney for this case?",
            "type": "select",
            "options": ["Yes", "No"]
        }
    ],

    // zantac
    "zantac-lawsuite-service": [
        {
            "question": "Were you or a loved one taking Zantac® on a regular basis?",
            "type": "select",
            "options": ["Yes", "No"]
        },
        {
            "question": "How long have you or a loved one regularly taken Zantac®?",
            "type": "input",
            "options": []
        },
        {
            "question": "Have you or a loved one been diagnosed with:",
            "type": "select",
            "options": [
                "Non-Hodgkin's Lymphoma (NHL)",
                "Hodgkin's Lymphoma (HL)",
                "Chronic Lymphocytic Leukemia (CLL)",
                "Angioimmunoblastic T-cell Lymphoma (ATL)",
                "Cutaneous T-Cell Lymphoma",
                "T-Cell Lymphoma",
                "B-Cell Lymphoma",
                "Anaplastic Large T/Null-Cell Lymphoma (T/N-ALCL)",
                "Burkitt Lymphoma (B-BL)",
                "Diffuse Large B-Cell Lymphoma (B-DLCL)",
                "Follicular Lymphoma (B-FL)",
                "Mantle Cell Lymphoma (MCL)",
                "Small Lymphocytic Lymphoma (B-SLL)",
                "Primary CNS Lymphoma",
                "Hairy Cell Leukemia",
                "Mycosis Fungoides",
                "Plasmacytoma (B-PC)",
                "Sezary Syndrome (T-SS)",
                "Other Lymphoma",
                "Other Cancer",
                "No Diagnosis"
            ]
        },
        {
            "question": "Did you or your loved one use Zantac® within 10 years of your diagnosis?",
            "type": "select",
            "options": ["Yes", "No"]
        },
        {
            "question": "Do you currently have a lawyer representing your claim?",
            "type": "select",
            "options": ["Yes", "No"]
        }
    ],

    // pfas
    "pfas-lawsuite-service": [
        {
            "question": "Street Address",
            "type": "input",
            "options": []
        },
        {
            "question": "City",
            "type": "input",
            "options": []
        },
        {
            "question": "State",
            "type": "input",
            "options": []
        },
        {
            "question": "Zip Code",
            "type": "input",
            "options": []
        },
        {
            "question": "Date of Birth",
            "type": "input",
            "options": []
        },
        {
            "question": "Were you diagnosed with Testicular Cancer, Kidney Cancer, Ulcerative Colitis, or Liver Cancer in 2000 or later after drinking the contaminated water with PFAS?",
            "type": "select",
            "options": ["Yes", "No"]
        },
        {
            "question": "Did you drink the contaminated water with PFAS from 1990 to present for a minimum of 6 consecutive months in any of the qualifying zip codes?",
            "type": "select",
            "options": ["Yes", "No"]
        },
        {
            "question": "Is the injured party deceased?",
            "type": "select",
            "options": ["Yes", "No"]
        },
        {
            "question": "Do you currently have a lawyer representing your claim?",
            "type": "select",
            "options": ["Yes", "No"]
        }
    ],

    // silicosis
    "silicosis": [
        {
            "question": "Street Address",
            "type": "input",
            "options": []
        },
        {
            "question": "City",
            "type": "input",
            "options": []
        },
        {
            "question": "State",
            "type": "input",
            "options": []
        },
        {
            "question": "Zip Code",
            "type": "input",
            "options": []
        },
        {
            "question": "Date of Birth",
            "type": "input",
            "options": []
        },
        {
            "question": "Were you diagnosed with silicosis?",
            "type": "select",
            "options": ["Yes", "No"]
        },
        {
            "question": "What type of silicosis were you diagnosed with?",
            "type": "select",
            "options": [
                "Chronic Silicosis",
                "Accelerated Silicosis",
                "Acute Silicosis",
                "Complicated Silicosis (Progressive Massive Fibrosis)",
                "Not Sure"
            ]
        },
        {
            "question": "When were you diagnosed?",
            "type": "input",
            "options": []
        },
        {
            "question": "Have you been diagnosed with any of the following?",
            "type": "select",
            "options": [
                "Shortness of breath",
                "Persistent dry cough",
                "Chest tightness",
                "Fatigue",
                "Loss of appetite",
                "Cyanosis",
                "Frequent respiratory infections"
            ]
        },
        {
            "question": "Did you work in any of the following industries?",
            "type": "select",
            "options": [
                "Stone fabrication",
                "Mining",
                "Construction",
                "Foundries",
                "Other"
            ]
        },
        {
            "question": "Did you perform any of the following tasks?",
            "type": "select",
            "options": [
                "Cutting",
                "Grinding",
                "Polishing",
                "Other"
            ]
        },
        {
            "question": "Were you exposed to respirable crystalline silica (RCS) during your work?",
            "type": "select",
            "options": ["Yes", "No"]
        },
        {
            "question": "For how long were you exposed to silica dust?",
            "type": "input",
            "options": []
        },
        {
            "question": "Did your employer provide proper safety measures to protect you from silica exposure?",
            "type": "select",
            "options": ["Yes", "No", "Not Sure"]
        },
        {
            "question": "Do you currently have a lawyer representing your claim?",
            "type": "select",
            "options": ["Yes", "No"]
        }
    ],

    "roblox": [
    {
        "question": "Last four digits of SSN",
        "type": "input",
        "options": []
    },
    {
        "question": "Did your child meet an abuser through Roblox?",
        "type": "radio",
        "options": ["Yes", "No", "Unsure"]
    },
    {
        "question": "Was your child under 18 when the abuse began?",
        "type": "radio",
        "options": ["Yes", "No", "Unsure"]
    },
    {
        "question": "Did the abuse involve physical assault, grooming, or exchange of explicit content?",
        "type": "radio",
        "options": ["Yes", "No", "Unsure"]
    }
]


};

