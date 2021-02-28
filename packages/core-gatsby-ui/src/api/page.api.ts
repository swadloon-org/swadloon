import { SectionAPI } from './section.api';

export type PageAPI = {
  name: string;
  slug: string;
  description: string;
  sections: SectionAPI[];
};
