import { SectionAPI } from '../sections/section.api';

export type PageAPI = {
  name: string;
  description: string;
  sections: SectionAPI[];
};
