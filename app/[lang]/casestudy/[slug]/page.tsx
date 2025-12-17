import { ProjectEngineeringDecision } from "@/components/casestudy/bookstore/engineering-decision";
import { ProjectHeader } from "@/components/casestudy/bookstore/header";
import { ProjectHero } from "@/components/casestudy/bookstore/hero";
import ProjectScopeConstraints from "@/components/casestudy/bookstore/scope-constraints";
import { ProjectTechStack } from "@/components/casestudy/bookstore/tech-stack";
import ProjectWhatToImprove from "@/components/casestudy/bookstore/what-to-improve";
import { Language } from "@/lib/get-home-data";
import { getCaseStudyData } from "@/lib/get-project-data";
import { CaseStudyOverviewData } from "@/lib/types/case-study-overview";
import { EngineeringDecisionData } from "@/lib/types/engineering-decisions";
import { ProjectTechStacksData } from "@/lib/types/project-tech-stack";
import { ScopeConstraintsData } from "@/lib/types/scope-constraints";
import { WhatToImproveData } from "@/lib/types/what-to-improve";

interface PageProps {
  params: {
    lang?: string;
    slug: string;
  };
}

export default async function BookstoreLanding({ params }: PageProps) {
  const { lang, slug } = await params;
  const language: Language = lang === "en" || lang === "id" ? lang : "id";
  const projectSlug: string = slug

  const overView = await getCaseStudyData<CaseStudyOverviewData>(
    projectSlug,
    "overview",
    language
  );

  const engineeringDecisions = await getCaseStudyData<EngineeringDecisionData>(
    projectSlug,
    "engineering-decisions",
    language
  );

  const techStack = await getCaseStudyData<ProjectTechStacksData>(
    projectSlug,
    "tech-stack",
    language
  );

  const scopeConstraints = await getCaseStudyData<ScopeConstraintsData>(
    projectSlug,
    "scope-constraints",
    language
  );

  const improvements = await getCaseStudyData<WhatToImproveData>(
    projectSlug,
    "what-to-improve",
    language
  );

  return (
    <div className="min-h-screen text-foreground dark:bg-[#0c1026]">
      <ProjectHeader />
      <main className="mx-auto flex max-w-6xl flex-col py-8">
        <ProjectHero data={overView} />
        <ProjectScopeConstraints data={scopeConstraints} />
        <ProjectEngineeringDecision data={engineeringDecisions} />
        <ProjectTechStack data={techStack} />
        <ProjectWhatToImprove data={improvements} />
      </main>
    </div>
  );
}
