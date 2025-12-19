export type Language = "en" | "id";

export type HomeSection =
  | "hero"
  | "core-tech-stack"
  | "projects"
  | "case-study-projects";

export async function getHomeData<
  T = unknown
>(
  section: HomeSection,
  lang: Language
): Promise<T> {
  try {
    const data = await import(
      `@/data/home/${section}-${lang}.json`
    );

    return data.default as T;
  } catch (error) {
    throw new Error(
      `Data not found: ${section}-${lang}.json`
    );
  }
}

