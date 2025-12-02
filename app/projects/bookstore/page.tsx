"use client";

import { BookstoreBrief } from "@/components/projects/bookstore/project-brief";
import { BookstoreHero } from "@/components/projects/bookstore/hero";
import { BookstoreWorkflow } from "@/components/projects/bookstore/workflow";
import { BookstoreTechStack } from "@/components/projects/bookstore/tech-stack";
import { BookstoreLessonLearned } from "@/components/projects/bookstore/lesson-learned";
import { BookstoreHeader } from "@/components/projects/bookstore/header";

export default function BookstoreLanding() {
  return (
    <div className="min-h-screen px-4 py-6 text-foreground dark:bg-zinc-950 sm:px-6">
      <BookstoreHeader />
      <main className="mx-auto flex max-w-6xl flex-col gap-6 py-8">
        <BookstoreHero />
        {/* <BookstoreBrief />
        <BookstoreTechStack />
        <BookstoreWorkflow />
        <BookstoreLessonLearned /> */}
      </main>
    </div>
  );
}
