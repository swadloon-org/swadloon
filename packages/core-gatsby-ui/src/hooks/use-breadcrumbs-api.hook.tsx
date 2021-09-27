import { LinkAPI } from '@newrade/core-website-api';
import { helmetJsonLdProp } from 'react-schemaorg';
import { BreadcrumbList } from 'schema-dts';

/**
 * Return a list of links (breadcrumbs) from a navigation object
 */
export function useNavigationBreadcrumbs(): LinkAPI[] {
  return [
    {
      name: 'introduction',
      page: {
        name: 'Introduction',
        slug: '/core-docs/',
      },
    },
  ];
}

/**
 * Return a BreadcrumbList fron a Navigation tree object
 *
 * @see https://developers.google.com/search/docs/advanced/structured-data/breadcrumb
 */
export function useBreadcrumbsRichData() {
  return helmetJsonLdProp<BreadcrumbList>({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Books',
        item: 'https://example.com/books',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Science Fiction',
        item: 'https://example.com/books/sciencefiction',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Award Winners',
      },
    ],
  });
}
