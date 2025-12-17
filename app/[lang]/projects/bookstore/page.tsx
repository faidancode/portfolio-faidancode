import { ProjectEngineeringDecision } from "@/components/projects/bookstore/engineering-decision";
import { ProjectHeader } from "@/components/projects/bookstore/header";
import { ProjectHero } from "@/components/projects/bookstore/hero";
import ProjectScopeConstraints from "@/components/projects/bookstore/scope-constraints";
import { ProjectTechStack } from "@/components/projects/bookstore/tech-stack";
import ProjectWhatToImprove from "@/components/projects/bookstore/what-to-improve";
import { Language } from "@/lib/get-data-home";
import { getProjectData } from "@/lib/get-project-data";
import { EngineeringDecisionData } from "@/lib/types/engineering-decisions";
import { ProjectTechStackItem, ProjectTechStacksData } from "@/lib/types/project-tech-stack";
import { ScopeConstraintsData } from "@/lib/types/scope-constraints";
import { WhatToImproveData } from "@/lib/types/what-to-improve";

interface PageProps {
  params: {
    lang?: string;
  };
}

export default async function BookstoreLanding({ params }: PageProps) {
  const { lang } = await params;
  const language: Language = lang === "en" || lang === "id" ? lang : "id";

  const engineeringDecisions = await getProjectData<EngineeringDecisionData>(
    "bookstore",
    "engineering-decisions",
    language
  );

  const techStack = await getProjectData<ProjectTechStacksData>(
    "bookstore",
    "tech-stack",
    language
  );

  const scopeConstraints = await getProjectData<ScopeConstraintsData>(
    "bookstore",
    "scope-constraints",
    language
  );

  const improvements = await getProjectData<WhatToImproveData>(
    "bookstore",
    "what-to-improve",
    language
  );

  return (
    <div className="min-h-screen text-foreground dark:bg-[#0c1026]">
      <ProjectHeader />
      <main className="mx-auto flex max-w-6xl flex-col gap-6 py-8">
        <ProjectHero />
        <ProjectScopeConstraints data={scopeConstraints} />
        <ProjectEngineeringDecision data={engineeringDecisions} />
        <ProjectTechStack data={techStack} />
        <ProjectWhatToImprove data={improvements} />
      </main>
    </div>
  );
}
