import Header from "@/components/header";
import CaseStudyProjects from "@/components/home/case-study-projects";
import CoreTechStack from "@/components/home/core-tech-stack";
import { Hero } from "@/components/home/hero";
import Projects from "@/components/home/projects";
import { getHomeData } from "@/lib/get-home-data";
import { AllTechStackData } from "@/lib/types/all-tech-stack";
import { CaseStudyData } from "@/lib/types/case-study";
import type { HeroData } from "@/lib/types/hero";
import { ProjectsData } from "@/lib/types/project";

interface PageProps {
  params: {
    lang?: string;
  };
}

export default async function Home({ params }: PageProps) {
  const { lang } = await params;

  // fallback jika lang bukan 'en' atau 'id'
  const language = lang === "en" || lang === "id" ? lang : "id";

  const heroData = await getHomeData<HeroData>("hero", language);

  const caseStudies = await getHomeData<CaseStudyData>(
    "case-study-projects",
    language
  );

  const coreTechStack = await getHomeData<AllTechStackData>(
    "core-tech-stack",
    language
  );

  const projects = await getHomeData<ProjectsData>("projects", language);

  return (
    <div className="mx-auto bg-background w-full flex-1  flex flex-col pb-6 lg:pb-0">
      <Header />
      <main className="mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-6xl flex-col items-center justify-between gap-2 text-center bg-background  dark:bg-zinc-950 sm:items-start sm:text-left">
        <Hero data={heroData} />
        <CoreTechStack data={coreTechStack} />
        <Projects data={projects} />
        <CaseStudyProjects data={caseStudies} />
      </main>
    </div>
  );
}
