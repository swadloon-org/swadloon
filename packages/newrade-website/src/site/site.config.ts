import { BlockType, PageAPI, SectionLayout, SiteAPI } from '@newrade/core-gatsby-ui/src';

const homePage = {
  name: 'home',
  description: 'Home page',
  sections: [
    {
      name: 'banner',
      layout: SectionLayout.banner,
      blocks: [
        {
          type: BlockType.markdown,
        },
      ],
    },
  ],
};

const pages: PageAPI[] = [homePage];

export const site: SiteAPI = {
  navigation: [
    {
      name: 'default',
      links: [
        {
          name: 'link to home',
          label: 'Home',
          page: homePage,
        },
      ],
    },
  ],
  pages,
};
