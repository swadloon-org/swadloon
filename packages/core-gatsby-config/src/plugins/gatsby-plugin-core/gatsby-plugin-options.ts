export type GatsbyCorePluginOptions = {
  packageName: string;
  modules?: string[];
  /**
   * Enable the rendering of /design-system/ pages
   */
  enableDesignSystemPages: boolean;
  /**
   * Enable the generation of doc pages (.mdx?) in /src/docs/
   */
  enableDocsPages: boolean;
};
