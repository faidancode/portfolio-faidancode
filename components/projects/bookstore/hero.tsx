"use client";

import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import Image from "next/image";

const stackItems = [
  "NestJS",
  "NextJS",
  "Typesccript",
  "Drizzle",
  "Tailwind",
];

export function ProjectHero() {
  return (
    <section
      id="hero"
      className="flex flex-col gap-8 rounded-3xl p-6 dark:border-white/10 dark:bg-[#0c1026] md:grid-cols-2"
    >
      <div className="flex flex-col gap-4 items-center text-center">
        <div>
          <h1 className="mt-2 text-4xl font-bold sm:text-4xl text-shadow-accent-foreground dark:text-[#ff5b35]">
            Full-Stack Online Bookstore Platform
          </h1>
        </div>
        <p className="text-xl">
          A production-style eCommerce system built with NestJS,
          TypeScript and NextJS.
        </p>
        <div className="flex flex-wrap justify-center gap-2 text-xs uppercase text-foreground">
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
          <Button asChild size="lg">
            <a
              href="https://next-faibook.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Storefront
            </a>
          </Button>
          <Button size="lg" variant="orange">
            <a
              href="https://next-admin-faibook.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Admin Dashboarad
            </a>
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
        {/* <div className="absolute inset-0 bg-linear-to-br from-foreground/20 via-transparent to-foreground/10 rounded-3xl"/> */}
        <Image
          alt="app-screenshoot"
          width={800}
          height={500}
          src="https://res.cloudinary.com/dersjymlc/image/upload/v1765804231/faibook-web-ss_iptmwd.jpg"
          className="rounded-t-3xl border border-gray-700"
        />
      </div>
    </section>
  );
}
