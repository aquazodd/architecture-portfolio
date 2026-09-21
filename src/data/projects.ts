export type ProjectType =
  | "academic"
  | "professional"
  | "internship"
  | "personal";

export type ProjectStatus =
  | "Proposed"
  | "Built"
  | "Ongoing"
  | "Academic"
  | "Competition";

export type ProjectSection = {
  id: string;
  title: string;
  description?: string;
  images: string[];
  // "contain" shows drawings uncropped; "cover" fills the frame (renders, photos).
  fit?: "cover" | "contain";
};

export type Project = {
  slug: string;
  number: string;

  title: string;
  type: ProjectType;

  year?: string;
  location?: string;
  status?: ProjectStatus;

  role?: string;
  contribution?: string[];

  description: string;

  heroImage?: string;

  category?: string;
  sections: ProjectSection[];
};

const createEmptyCaseStudySections = (): ProjectSection[] => [
  {
    id: "systems",
    title: "Systems",
    description: "",
    images: [],
  },
  {
    id: "architecture",
    title: "Architecture",
    description: "",
    images: [],
  },
  {
    id: "development",
    title: "Development",
    description: "",
    images: [],
  },
  {
    id: "renders",
    title: "Renders",
    description: "",
    images: [],
    fit: "cover",
  },
];

export const projects: Project[] = [
  {
    slug: "adaptive-reuse",
    number: "01",

    title: "Adaptive Reuse of the Bauhaus Building",

    type: "academic",

    year: "2026",
    location: "Addis Ababa, Ethiopia",
    status: "Academic",

    role: "Architectural Designer",

    contribution: [
      "Concept development",
      "Architectural design",
      "Site analysis",
      "Architectural representation",
    ],

    description:
      "An adaptive reuse proposal exploring the transformation of an abandoned Bauhaus building into a renewed architectural and social environment.",

    heroImage: "/images/adaptive-reuse/hero.jpg",

    category: "Architecture / Adaptive Reuse",

    sections: [
      {
        id: "existing-conditions",
        title: "Existing Conditions",
        description: "",
        images: [
          "/images/adaptive-reuse/existing3.jpg",
          "/images/adaptive-reuse/existing.jpg",
          "/images/adaptive-reuse/existing1.jpg",
          "/images/adaptive-reuse/existing2.jpg",
        ]

      },

      {
        id: "conceptual-diagrams",
        title: "Conceptual Diagrams",
        description: "",
        images: [
          "/images/adaptive-reuse/concept.jpg",
          "/images/adaptive-reuse/concept1.jpg",
          "/images/adaptive-reuse/concept2.jpg",
          "/images/adaptive-reuse/concept3.jpg",
          "/images/adaptive-reuse/concept4.jpg",
        ],
      },

      {
        id: "details",
        title: "Details",
        description: "",
        images: [
          "/images/adaptive-reuse/details.jpg",
          "/images/adaptive-reuse/details1.jpg",
          "/images/adaptive-reuse/details2.jpg",
          "/images/adaptive-reuse/details3.jpg",
          "/images/adaptive-reuse/details4.jpg",
          "/images/adaptive-reuse/details5.jpg",
          "/images/adaptive-reuse/details6.jpg",
        ],
      },

      {
        id: "plans",
        title: "Plans",
        description: "",
        images: ["/images/adaptive-reuse/plan01.jpg"],
      },

      {
        id: "sections",
        title: "Sections",
        description: "",
        images: ["/images/adaptive-reuse/section01.jpg"],
      },

      {
        id: "elevations",
        title: "Elevations",
        description: "",
        images: [],
      },

      {
        id: "renders",
        title: "Renders",
        description: "",
        images: ["/images/adaptive-reuse/render01.jpg"],
        fit: "cover",
      },
    ],
  },

  {
    slug: "mixed-use-development",
    number: "02",

    title: "Mixed-Use Development",

    type: "academic",

    year: "2026",
    location: "Addis Ababa, Ethiopia",
    status: "Academic",

    role: "Architectural Designer",

    contribution: [
      "Architectural design",
      "Urban planning",
      "Spatial organization",
      "Visualization",
    ],

    description:
      "A mixed-use development combining commercial, residential and public functions within an active urban environment.",

    category: "Architecture / Urbanism",
    sections: createEmptyCaseStudySections(),
  },

  {
    slug: "bakery-commercial",
    number: "03",

    title: "Bakery & Commercial Space",

    type: "academic",

    year: "2026",
    location: "Addis Ababa, Ethiopia",
    status: "Academic",

    role: "Architectural Designer",

    contribution: [
      "Concept development",
      "Architectural design",
      "Material studies",
      "Visualization",
    ],

    description:
      "A bakery and commercial environment exploring spatial fluidity, material honesty and the relationship between production and gathering.",

    category: "Architecture / Interior",
    sections: createEmptyCaseStudySections(),
  },
];
