export interface ProjectTechStackItem {
  component: string;
  technologies: string;
  rationale: string;
}

export interface ProjectTechStacksData {
  title1: string;
  title2: string;
  subtitle: string;
  data: ProjectTechStackItem[];
}
