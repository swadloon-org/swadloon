import {
  LinkComponent,
  LinkType,
  NavComponent,
  NavigationAPI,
  PageAPI,
} from '@newrade/core-website-api';

export const homePage: PageAPI = {
  name: 'Home',
  slug: '/',
};

export const designSystemPage: PageAPI = {
  name: 'Design system',
  slug: '/design-system/',
};

export const footerNavigation: NavigationAPI = {
  name: 'Footer Navigation',
  component: NavComponent.footer,
  subNavigation: [
    {
      name: 'Links for documentation',
      label: 'Documentation',
      links: [
        {
          name: 'Link to the docs',
          label: 'Docs',
          component: LinkComponent.link,
          page: designSystemPage,
        },
        {
          name: 'Link to the docs',
          label: 'Github',
          component: LinkComponent.link,
          type: LinkType.externalUrl,
          url: 'www.github.com',
        },
      ],
    },
    {
      name: 'Links for design',
      label: 'Design',
      links: [
        {
          name: 'Link to design system page',
          label: 'Design system',
          component: LinkComponent.link,
          page: designSystemPage,
        },
        {
          name: 'Link to design system page',
          component: LinkComponent.link,
          page: designSystemPage,
        },
      ],
    },
  ],
};
