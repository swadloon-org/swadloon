import { CommonComponentProps } from '@newrade/core-react-ui';

export enum PageLayout {
  /**
   * Default layout of the site
   */
  default = 'default',
  /**
   * Special layout for the blog area
   */
  blog = 'blog',
  /**
   * Layout specific to documentation pages
   */
  docs = 'docs',
  /**
   * Layout specific to design system pages
   */
  designSystem = 'designSystem',
}

export enum PageTemplate {
  /**
   * Default template for normal web pages
   */
  default = 'default',
  /**
   * Special page template for blog pages (articles)
   */
  blog = 'blog',
}

export type PageProps = CommonComponentProps & {
  /**
   * Page's layout
   * @default PageLayout.default
   */
  layout?: PageLayout;
  /**
   * Page's template
   * @default PageLayout.default
   */
  template?: PageTemplate;
};
