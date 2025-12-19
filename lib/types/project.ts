export interface ProjectLink {
  title: string;
  link: string;
}

export interface Project {
  title: string;
  year: string;
  industry: string;
  tech: string[];
  description: string[];
  links?: ProjectLink[];
}

export interface ProjectsData {
  title1: string;
  title2: string;
  subtitle: string;
  note: string;
  data: Project[];
}
