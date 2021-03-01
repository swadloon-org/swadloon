import { SectionAPI } from './section.api';

export type PageAPI = {
  name: string;
  title: string;
  slug: string;
  description: string;
  sections: SectionAPI[];
};
