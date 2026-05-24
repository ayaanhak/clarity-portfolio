// EDIT: replace with your real projects. Slug is the URL segment.
export type Category = "Product" | "Visual" | "Research";

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: Category;
  year: string;
  size: "large" | "small";
  cover: string; // EDIT: image URL
}

export const projects: Project[] = [
  {
    slug: "northwind",
    title: "Northwind",
    description: "Reimagining the booking flow for a regional airline.",
    category: "Product",
    year: "2025",
    size: "large",
    cover: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&q=80",
  },
  {
    slug: "atlas",
    title: "Atlas",
    description: "Type system for a public transit wayfinding project.",
    category: "Visual",
    year: "2024",
    size: "large",
    cover: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1600&q=80",
  },
  {
    slug: "field-notes",
    title: "Field Notes",
    description: "Diary studies on focus & deep work.",
    category: "Research",
    year: "2024",
    size: "small",
    cover: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80",
  },
  {
    slug: "lumen",
    title: "Lumen",
    description: "Ambient lighting controller for the home.",
    category: "Product",
    year: "2023",
    size: "small",
    cover: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1200&q=80",
  },
];
