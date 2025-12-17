export type CaseStudyItem = {
  name: string;
  description: string;
  image: string;
  url: string;
  stack: string[];
};

export type CaseStudyData = {
  title1: string;
  title2: string;
  subtitle: string;
  data: CaseStudyItem[];
};
