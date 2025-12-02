import Header from "@/components/header";
import CaseStudyProjects from "@/components/home/case-study-projects";
import { CoreTechStack } from "@/components/home/core-tech-stack";
import { Experience } from "@/components/home/experience";
import { Hero } from "@/components/home/hero";

export default function Home() {
  return (
    <div className="mx-auto bg-background w-full flex-1 flex flex-col pb-6 lg:pb-0">
      <Header />
      <main className="mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-6xl flex-col items-center justify-between gap-10 p-4 text-center bg-background  dark:bg-zinc-950 sm:items-start sm:text-left sm:px-10 lg:px-16">
        <Hero />
        <CoreTechStack />
        <CaseStudyProjects />
      </main>
    </div>
  );
}
