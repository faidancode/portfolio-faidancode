"use client";

import Header from "@/components/header";
import CaseStudyProjects from "@/components/home/case-study-projects";
import { CoreTechStack } from "@/components/home/core-tech-stack";
import { Hero } from "@/components/home/hero";
import { getData } from "@/lib/get-data-home";
import { useParams } from "next/navigation";

interface Params {
  lang: string;
}

export default function Home() {
  const params = useParams();
  const lang = params.lang;

  // fallback jika lang bukan 'en' atau 'id'
  const language = lang === "en" || lang === "id" ? lang : "id";
  const data = getData(language);
  return (
    <div className="mx-auto bg-background w-full flex-1  flex flex-col pb-6 lg:pb-0">
      <Header />
      <main className="mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-6xl flex-col items-center justify-between gap-10 text-center bg-background  dark:bg-zinc-950 sm:items-start sm:text-left">
        <Hero heroData={data.hero} />
        <CoreTechStack />
        <CaseStudyProjects caseStudiesData={data.caseStudy} />
      </main>
    </div>
  );
}
