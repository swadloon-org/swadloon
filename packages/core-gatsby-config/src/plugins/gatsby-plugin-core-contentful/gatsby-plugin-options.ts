export type GatsbyCoreContentfulPluginOptions = {
  /**
   * Name of the package that runs this plugin
   * @example my-website
   */
  packageName: string;
  /**
   * Plugin name
   * @example gatsby-plugin-core
   */
  pluginName?: string;
  /**
   * Controls in which locales the pages get generated
   */
  locales?: ('fr-CA' | 'en-CA')[];
  /**
   * Enable or disable features
   */
  features: {
    renderPages: boolean;
    renderBlogPosts: boolean;
    renderPortfolio: boolean;
  };
};
