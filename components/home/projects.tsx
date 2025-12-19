"use client";

import Image from "next/image";

import { ProjectsData } from "@/lib/types/project";
import { Title } from "../title";
import Section from "../section";

interface ProjectsProps {
  data: ProjectsData;
}

export default function Projects({ data }: ProjectsProps) {
  return (
    <Section id="projects">
      <Title text1={data.title1} text2={data.title2} subtitle={data.subtitle} />
      <div className="bg-orange-200 text-orange-800 rounded-lg p-4 text-sm">
        {data.note}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {data.data.map((project, idx) => (
          <div
            key={idx}
            className="border rounded-lg shadow-sm p-6 bg-white dark:bg-white/5 dark:text-white hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
            <p className="text-sm mb-2 text-gray-500 dark:text-gray-400 font-semibold">
              {project.year} —{" "}
              <span className="italic">{project.industry}</span>
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-muted/20 border px-3 py-1 text-[10px] font-semibold uppercase tracking-wildest text-foreground dark:text-orange-500"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="p-4">
              <ul className="list-disc list-insidespace-y-1 text-sm space-y-1 dark:text-gray-200">
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
            {/* Bungkus seluruh bagian dengan pengecekan array dan isinya */}
            {Array.isArray(project.links) && project.links.length > 0 && (
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold">Link:</p>
                <div className="flex flex-wrap gap-2">
                  {project.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="rounded border px-3 py-1 text-[10px] font-semibold uppercase tracking-wildest bg-blue-50 hover:bg-blue-100 text-blue-500 hover:cursor-pointer">
                        {link.title}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
