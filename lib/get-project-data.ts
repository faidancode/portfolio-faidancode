export type Language = "en" | "id";

export type ProjectSection =
  | "scope-constraints"
  | "engineering-decisions"
  | "tech-stack"
  | "what-to-improve";

export async function getProjectData<
  T = unknown
>(
  project: string,
  section: ProjectSection,
  lang: Language
): Promise<T> {
  try {
    const data = await import(
      `@/data/projects/${project}/${section}-${lang}.json`
    );
    console.log({data});

    return data.default as T;
  } catch (error) {
    throw new Error(
      `Project data not found: ${project}/${section}-${lang}.json`
    );
  }
}

