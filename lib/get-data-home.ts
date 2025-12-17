import heroEn from '../data/hero-en.json';
import heroId from '../data/hero-id.json';
import caseStudyEn from '../data/case-study-projects-en.json';
import caseStudyId from '../data/case-study-projects-id.json';

export type Language = 'en' | 'id';

export interface DataMap {
  hero: typeof heroEn;
  caseStudy: typeof caseStudyEn;
}

const dataMap: Record<Language, DataMap> = {
  en: {
    hero: heroEn,
    caseStudy: caseStudyEn,
  },
  id: {
    hero: heroId,
    caseStudy: caseStudyId,
  },
};

export function getData(lang: Language): DataMap {
  return dataMap[lang];
}
