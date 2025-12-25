export type Language = "en" | "id";

export type CaseStudySection =
  | "overview"
  | "scope-constraints"
  | "engineering-decisions"
  | "order-flow"
  | "order-status-transitions"
  | "payment-status-mapping"
  | "tech-stack"
  | "what-to-improve";

export async function getCaseStudyData<T = unknown>(
  caseStudy: string,
  section: CaseStudySection,
  lang: Language
): Promise<T> {
  try {
    const data = await import(
      `@/data/casestudy/${caseStudy}/${section}-${lang}.json`
    );

    return data.default as T;
  } catch (error) {
    throw new Error(
      `Case study data not found: ${caseStudy}/${section}-${lang}.json`
    );
  }
}
