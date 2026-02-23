import EngineeringDecisions from "@/components/casestudy/hris/engineering-decision";
import { ProjectHeader } from "@/components/casestudy/hris/header";
import { ProjectHero } from "@/components/casestudy/hris/hero";
import { ProjectTechStack } from "@/components/casestudy/hris/tech-stack";
import { getCaseStudyData } from "@/lib/get-casestudy-data";
import { Language } from "@/lib/get-home-data";
import { CaseStudyOverviewData } from "@/lib/types/case-study-overview";
import { EngineeringDecisionData } from "@/lib/types/engineering-decisions";
import { ProjectTechStacksData } from "@/lib/types/project-tech-stack";

interface PageProps {
  params: {
    lang?: string;
    slug: string;
  };
}

export default async function HrisLanding({ params }: PageProps) {
  const { lang } = await params;
  const language: Language = lang === "en" || lang === "id" ? lang : "id";

  const overView = await getCaseStudyData<CaseStudyOverviewData>(
    "hris",
    "overview",
    language,
  );
  const engineeringDecisions = await getCaseStudyData<EngineeringDecisionData>(
    "hris",
    "engineering-decisions",
    language,
  );

  const techStack = await getCaseStudyData<ProjectTechStacksData>(
    "hris",
    "tech-stack",
    language,
  );

  return (
    // Menggunakan variabel CSS agar sinkron dengan Light & Dark mode
    <div className="min-h-screen bg-background text-foreground selection:bg-emerald-500/20">
      <ProjectHeader />

      {/* Background Decor: Subtle Ambient Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-250 h-150 opacity-20 dark:opacity-[0.15] bg-linear-to-b from-emerald-200 to-transparent blur-[120px]" />
      </div>

      {/* Main Content */}
      <main className="relative flex flex-col items-center">
        {/* Section Hero: Full Width dengan Bottom Border yang halus */}
        <section className="w-full border-b border-slate-100/80 dark:border-white/5">
          <div className="mx-auto max-w-6xl">
            <ProjectHero data={overView} />
          </div>
        </section>

        {/* Section Content: Diberi padding yang luas agar tidak sesak */}
        <div className="w-full">
          <div className="mx-auto max-w-6xl py-8 md:py-32">
            <EngineeringDecisions data={engineeringDecisions} />
          </div>
        </div>

        <div className="w-full">
          <div className="mx-auto max-w-6xl py-8 md:py-32">
            <ProjectTechStack data={techStack} />
          </div>
        </div>

        {/* Footer Placeholder atau Section Berikutnya */}
        <footer className="w-full py-8 border-t border-slate-100 dark:border-white/5">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <p className="text-sm text-slate-400 font-mono tracking-tighter">
              © {new Date().getFullYear()} — Built with Precision
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
