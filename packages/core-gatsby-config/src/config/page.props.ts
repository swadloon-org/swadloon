export enum PageLayout {
  /**
   * Default layout of the site
   * Must be defined in /src/layout/layout.tsx
   */
  default = 'default',
  /**
   * Special layout for the blog area
   * Must be defined in /src/layout/blog-article.layout.tsx
   */
  blog = 'blog',
  /**
   * Layout specific to documentation pages
   * Can be overrided by defining a layout component in /src/layout/docs.layout.tsx
   * @default @newrade/core-gatsby-ui/src/layout/docs.layout.tsx
   */
  docs = 'docs',
  /**
   * Layout specific to design system pages
   * Can be overrided by defining a layout component in /src/layout/design-system.layout.tsx
   * @default @newrade/core-gatsby-ui/src/layout/design-system.layout.tsx
   */
  designSystem = 'designSystem',
}

/**
 * Type only export for other packages.
 */
export type PAGE_LAYOUT = keyof typeof PageLayout;

export enum PageTemplate {
  /**
   * Default template for normal web pages
   */
  default = 'default',
  /**
   * Special page template for blog pages (articles)
   */
  blog = 'blog',
  /**
   * Special page template for docs pages (usually markdown pages)
   */
  docs = 'docs',
  /**
   * Special page template for design system pages
   */
  designSystem = 'designSystem',
}

/**
 * Type only export for other packages.
 */
export type PAGE_TEMPLATE = keyof typeof PageTemplate;
