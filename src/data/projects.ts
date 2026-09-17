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
    images: ["/images/adaptive-reuse/systems.jpg"],
  },
  {
    id: "architecture",
    title: "Architecture",
    description: "",
    images: [
      "/images/adaptive-reuse/architecture.jpg"
    ],
  },
  {
    id: "development",
    title: "Development",
    description: "",
    images: [
      "/images/adaptive-reuse/concept.jpg"
    ],
  },
  {
    id: "renders",
    title: "Renders",
    description: "",
    images: [
      "/images/adaptive-reuse/renders.jpg"
    ],
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
    hasHeroImage: false,

    category: "Architecture / Adaptive Reuse",
    sections: createEmptyCaseStudySections(),
  },

  {
    slug: "high-rise",
    number: "02",

    title: "High-Rise",

    type: "academic",

    description: "",

    hasHeroImage: false,

    sections: createEmptyCaseStudySections(),
  },

  {
    slug: "school",
    number: "03",

    title: "School of Built Environment",

    type: "academic",

    year: "2026",
    location: "Addis Ababa, Ethiopia",
    status: "Academic",

    role: "Architectural Designer",

    contribution: [
      "Architectural design",
      "Site planning",
      "Spatial organization",
      "Visualization",
    ],

    description:
      "An educational environment organized around learning, recreation, movement and community.",

    heroImage: "/images/school/hero.jpg",
    hasHeroImage: false,

    category: "Architecture / Education",
    sections: createEmptyCaseStudySections(),
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
