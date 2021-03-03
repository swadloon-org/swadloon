import { SectionLayout, SiteAPI } from '@newrade/core-gatsby-ui/src';
import { BlockSlogan } from '../blocks/block-slogan.block';

export const siteAPI: SiteAPI = {
  name: 'Newrade Website',
  pages: [
    {
      name: 'Home',
      slug: '/',
      sections: [
        {
          name: 'Banner',
          layout: SectionLayout.stack,
          blocks: [BlockSlogan],
        },
        {
          name: 'Banner',
          layout: SectionLayout.stack,
          blocks: [BlockSlogan],
        },
        {
          name: 'Banner',
          layout: SectionLayout.stack,
          blocks: [BlockSlogan],
        },
        {
          name: 'Banner',
          layout: SectionLayout.stack,
          blocks: [BlockSlogan],
        },
        {
          name: 'Banner',
          layout: SectionLayout.stack,
          blocks: [BlockSlogan],
        },
      ],
    },
    {
      name: 'Contact',
    },
  ],
};
