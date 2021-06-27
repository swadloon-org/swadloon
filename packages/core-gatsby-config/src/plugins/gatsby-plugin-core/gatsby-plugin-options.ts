export type GatsbyCorePluginOptions = {
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
   * List of modules to be parsed by babel loader
   * @example 'lodash'
   */
  modules?: string[];
  features: {
    /**
     * Enable the rendering of /design-system/ pages
     */
    renderDesignSystemPages: boolean;
    /**
     * Enable the generation of doc pages (.mdx?) in /src/docs/
     */
    renderDocsPages: boolean;
  };
};
