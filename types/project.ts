export type ProjectMedia = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  kicker: string;
  client: string;
  year: string;
  role: string[];
  stack: string[];
  description: string;
  cover: ProjectMedia;
  media: ProjectMedia[];
  featured: boolean;
  accent: string;
  artDirection?: "afterlight" | "field-notes" | "common-ground" | "soft-signal";
  context: string;
  engineering: string[];
  responsibilities: string[];
  outcome: string;
};
