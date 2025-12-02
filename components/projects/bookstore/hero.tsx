"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const stackItems = ["NestJS", "Next.js", "Drizzle", "React Native"];

export function BookstoreHero() {
  return (
    <section
      id="hero"
      className="flex flex-col gap-8 rounded-3xl p-6 dark:border-white/10 dark:bg-zinc-950/60 md:grid-cols-2"
    >
      <div className="flex flex-col gap-4 items-center text-center">
        <div>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl text-shadow-accent-foreground">
            Full-Stack Online Bookstore Platform
          </h1>
        </div>
        <p className="text-lg">
          A production-style eCommerce system built with Next.js, NestJS,
          TypeScript, and React Native.
        </p>
        <div className="flex flex-wrap gap-2 text-xs uppercase text-foreground">
          {stackItems.map((item) => (
            <span
              key={item}
              className="rounded-full border bg-white px-2 py-1 dark:border-white/10 dark:bg-white/5"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button size="lg">View Storefront</Button>
          <Button size="lg" variant="orange">
            View Dashboard
          </Button>
        </div>

        <Image
          src="/images/playstore.png"
          alt="Download on playstore"
          width={180}
          height={80}
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="relative h-72 w-full overflow-hidden rounded-3xl border border-border bg-muted/10 dark:border-white/10">
          <div className="absolute inset-0 bg-linear-to-br from-foreground/20 via-transparent to-foreground/10" />
          <p className="relative z-10 text-sm font-semibold uppercase text-muted-foreground">
            Screen preview
          </p>
        </div>
      </div>
    </section>
  );
}
