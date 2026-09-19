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
  hasHeroImage: boolean;

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
    hasHeroImage: true,

    category: "Architecture / Adaptive Reuse",

    sections: [
      {
        id: "existing-conditions",
        title: "Existing Conditions",
        description: "",
        images: [
          "/images/adaptive-reuse/existing-01.jpg",
          "/images/adaptive-reuse/existing-02.jpg",
          "/images/adaptive-reuse/existing-03.jpg",
          "/images/adaptive-reuse/existing-04.jpg",
          "/images/adaptive-reuse/existing-05.jpg",
        ],
      },

      {
        id: "conceptual-diagrams",
        title: "Conceptual Diagrams",
        description: "",
        images: [
          "/images/adaptive-reuse/concept-01.jpg",
          "/images/adaptive-reuse/concept-02.jpg",
          "/images/adaptive-reuse/concept-03.jpg",
          "/images/adaptive-reuse/concept-04.jpg",
          "/images/adaptive-reuse/concept-05.jpg",
        ],
      },

      {
        id: "details",
        title: "Details",
        description: "",
        images: [
          "/images/adaptive-reuse/detail-01.jpg",
          "/images/adaptive-reuse/detail-02.jpg",
          "/images/adaptive-reuse/detail-03.jpg",
          "/images/adaptive-reuse/detail-04.jpg",
          "/images/adaptive-reuse/detail-05.jpg",
        ],
      },

      {
        id: "plans",
        title: "Plans",
        description: "",
        images: [
          "/images/adaptive-reuse/plan-01.jpg",
          "/images/adaptive-reuse/plan-02.jpg",
          "/images/adaptive-reuse/plan-03.jpg",
          "/images/adaptive-reuse/plan-04.jpg",
          "/images/adaptive-reuse/plan-05.jpg",
        ],
      },

      {
        id: "sections",
        title: "Sections",
        description: "",
        images: [
          "/images/adaptive-reuse/section-01.jpg",
          "/images/adaptive-reuse/section-02.jpg",
          "/images/adaptive-reuse/section-03.jpg",
          "/images/adaptive-reuse/section-04.jpg",
          "/images/adaptive-reuse/section-05.jpg",
        ],
      },

      {
        id: "elevations",
        title: "Elevations",
        description: "",
        images: [
          "/images/adaptive-reuse/elevation-01.jpg",
          "/images/adaptive-reuse/elevation-02.jpg",
          "/images/adaptive-reuse/elevation-03.jpg",
          "/images/adaptive-reuse/elevation-04.jpg",
          "/images/adaptive-reuse/elevation-05.jpg",
        ],
      },

      {
        id: "renders",
        title: "Renders",
        description: "",
        images: [
          "/images/adaptive-reuse/render-01.jpg",
          "/images/adaptive-reuse/render-02.jpg",
          "/images/adaptive-reuse/render-03.jpg",
          "/images/adaptive-reuse/render-04.jpg",
          "/images/adaptive-reuse/render-05.jpg",
        ],
      },
    ],
  },

  {
    slug: "mixed-use-development",
    number: "04",

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

    heroImage: "/images/mixed-use/hero.jpg",
    hasHeroImage: false,

    category: "Architecture / Urbanism",
    sections: createEmptyCaseStudySections(),
  },

  {
    slug: "bakery-commercial",
    number: "05",

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

    heroImage: "/images/bakery/hero.jpg",
    hasHeroImage: false,

    category: "Architecture / Interior",
    sections: createEmptyCaseStudySections(),
  },

];
