// lib/case-studies.ts (Server Component)
import projectsEn from "@/data/case-study-projects-en.json";
import projectsId from "@/data/case-study-projects-id.json";

type CaseStudy = {
  name: string;
  description: string;
  image: string;
  url: string;
  stack: string[];
};
export const getProjects = (locale: string): CaseStudy[] => {
  if (locale === "id") {
    console.log({ projectsId });
    return projectsId;
  }
  console.log({ projectsEn });
  return projectsEn; // default
};

// export const getProjectByUrl = (locale: string, url: string) => {
//   const projects = getProjects(locale);
//   return projects.find(project => project.url === url);
// }
