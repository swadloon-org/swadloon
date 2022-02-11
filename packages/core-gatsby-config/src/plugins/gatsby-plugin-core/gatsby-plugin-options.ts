export type GatsbyCorePluginOptions = {
  /**
   * Name of the package that runs this plugin
   * @example my-website
   */
  packageName: string;
  /**
   * Plugin name for logging purposes
   * @example gatsby-plugin-core
   */
  pluginName?: string;
  /**
   * List of modules to be parsed by babel loader
   * @example 'lodash'
   */
  modules?: string[];
  /**
   * Enable or disable the generation of normal pages (.tsx) in /src/pages/
   */
  renderPages?: boolean;
  /**
   * Custom path for the package's pages
   * @default path.resolve('src', 'pages')
   */
  pagesPath?: string;
  /**
   * Custom prefix to prepend to pages
   * @default: '/`
   */
  pagesPathPrefix?: string;

  /**
   * Enable or disable the generation of mdx pages (.mdx?) in /src/pages/
   */
  renderMarkdownPages?: boolean;
  /**
   * Custom path for package markdown pages
   * @default path.resolve('src', 'pages')
   */
  markdownPagesPath?: string;
  /**
   * Custom prefix to prepend to markdown pages
   * @default: '/`
   */
  markdownPagesPathPrefix?: string;

  /**
   * Enable or disable the generation of doc pages (.mdx?) in /src/docs/
   */
  renderDocsPages?: boolean;
  /**
   * Custom path for package docs files
   * @default path.resolve('src', 'docs')
   */
  docsPagesPath?: string;
  /**
   * Custom prefix to prepend to docs pages
   * @default: '/docs/`
   */
  docsPagesPathPrefix?: string;

  /**
   * Enable the rendering of /design-system/ pages (.md)
   * @default true
   */
  renderDesignSystemPages?: boolean;
  /**
   * Custom path to design system markdown files
   * @default path.resolve('..', 'core-design-system-docs', 'docs')
   */
  designSystemPagesPath?: string;
  /**
   * Custom prefix to prepend to design system pages
   * @default: '/design-system/`
   */
  designSystemPagesPathPrefix?: string;
  /**
   * Path to sources files for `gatsby-transformer-documentationjs`
   * @default
   * [
   *   path.resolve('..', 'core-gatsby-ui', 'src'),
   *   path.resolve('..', 'core-react-ui', 'src'),
   * ]
   */
  jsdocSourcePaths?: string[];

  /**
   * Enable or disable the generation of doc pages (.mdx?) in /docs
   */
  renderCoreDocsPages?: boolean;
  /**
   * Custom path for package docs files
   * @default path.resolve('..', '..', 'docs')
   */
  coreDocsPagesPath?: string;
  /**
   * Custom prefix to prepend to docs pages
   * @default: '/core-docs/`
   */
  coreDocsPagesPathPrefix?: string;

  /**
   * Render docs flagged with `published: false`
   * @default true
   */
  renderUnpublishedPages?: boolean;
};
