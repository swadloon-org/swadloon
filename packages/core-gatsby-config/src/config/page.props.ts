export enum PageLayout {
  /**
   * Default layout of the site
   * Must be defined in /src/layout/layout.tsx
   * @default @newrade/core-gatsby-ui/src/layout/layout.tsx
   */
  default = 'default',
  /**
   * Special layout for the maint blog page
   * Must be defined in /src/layout/blog.layout.tsx
   * @default @newrade/core-gatsby-ui/src/layout/blog.layout.tsx
   */
  blog = 'blog',
  /**
   * Special layout for the blog article or blog post
   * Must be defined in /src/layout/blog-port.layout.tsx
   * @default @newrade/core-gatsby-ui/src/layout/blog-post.layout.tsx
   */
  blogPost = 'blogPost',
  /**
   * Special layout for the main portfolio page
   * Must be defined in /src/layout/blog.layout.tsx
   * @default @newrade/core-gatsby-ui/src/layout/blog.layout.tsx
   */
  portfolio = 'portfolio',
  /**
   * Special layout for the portfolio area
   * Must be defined in /src/layout/portfolio-article.layout.tsx
   * @default @newrade/core-gatsby-ui/src/layout/portfolio-project.layout.tsx
   */
  portfolioProject = 'blogProject',
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
  blogPost = 'blogPost',
  /**
   * Special page template for docs pages
   */
  markdownDoc = 'markdownDoc',
  /**
   * Special page template for pages written in .mdx?
   */
  markdownPage = 'markdownPage',
  /**
   * Special page template for design system pages
   */
  designSystem = 'designSystem',
  /**
   * Template for contentfulPages
   */
  contentfulPage = 'contentfulPage',
}

/**
 * Type only export for other packages.
 */
export type PAGE_TEMPLATE = keyof typeof PageTemplate;
