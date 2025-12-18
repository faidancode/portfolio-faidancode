export type TechStackGroupItem = {
  name: string;
  logo: string;
};

export type TechStackGroup = {
  group: string;
  items: TechStackGroupItem[];
};

export type AllTechStackData = {
  title1: string;
  title2: string;
  subtitle: string;
  groups: TechStackGroup[];
};
