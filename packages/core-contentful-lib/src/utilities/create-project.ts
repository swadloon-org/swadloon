import { ContentfulProject } from '../../types/contentful-types';

type Options = Pick<ContentfulProject, 'name' | 'dir'> & {
  pageTypes: object;
  sectionTypes: object;
};

export function createContentfulProject(options: Options): ContentfulProject {
  return {
    name: options.name,
    dir: 'vsb',
    pageTypes: options.pageTypes ? Object.values(options.pageTypes) : [],
    sectionTypes: options.sectionTypes ? Object.values(options.sectionTypes) : [],
  };
}
