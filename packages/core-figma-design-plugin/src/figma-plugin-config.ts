/**
 *
 * Global configuration types for the plugin
 *
 */

/**
 * Figma page configuration
 */
export type FigmaPluginPageConfig = {
  /**
   * Name of the page
   * @example 'Illustrations',
   */
  name: string;
  /**
   * Prefix for this page only, in the group, make sure to choose a prefixRegExp that matches this expression
   * @example '🖋  Brand'
   */
  prefix: string;
  /**
   * Description of the content of the page
   */
  description?: string;
  /**
   * A color set as paint style on the page
   * @default '33333'
   */
  backgroundColor?: string;
};

/**
 * Figma page group configuration
 */
export type FigmaPluginPagesGroupConfig = {
  /**
   * Prefix for pages in this group, note that this will be ignored for pages that have their own prefixes
   * @example '💎  Brand'
   */
  prefix: string;
  /**
   * Regexp used to check if pages (based on their name) should belong in this group
   * @example '/.(\s+)Brand/'
   */
  prefixRegExp: RegExp;
  /**
   * List of page configs
   */
  pages: FigmaPluginPageConfig[];
  /**
   * A color set as paint style on the page, note that this will be ignored for pages that have their own backgroundColor set
   * @default '33333'
   */
  backgroundColor?: string;
};

/**
 * Global plugin configuration
 */
export type FigmaPluginConfig = {
  pages: {
    predefinedPages: {
      ux: FigmaPluginPagesGroupConfig;
      export: FigmaPluginPagesGroupConfig;
      brand: FigmaPluginPagesGroupConfig;
      foundations: FigmaPluginPagesGroupConfig;
      prototypes: FigmaPluginPagesGroupConfig;
      templates: FigmaPluginPagesGroupConfig;
      printTemplates: FigmaPluginPagesGroupConfig;
      patterns: FigmaPluginPagesGroupConfig;
      organismComponents: FigmaPluginPagesGroupConfig;
      moleculesComponents: FigmaPluginPagesGroupConfig;
      atomsComponents: FigmaPluginPagesGroupConfig;
      utilities: FigmaPluginPagesGroupConfig;
      archive: FigmaPluginPagesGroupConfig;
    };
    /**
     * Name of separator pages
     * @default '---'
     */
    separator: string;
    /**
     * Character used to format page names
     * @default '/'
     */
    nameSeparator: string;
    /**
     * Control whether the plugin should reorder pages automatically after performing changes to pages
     */
    reorderAutomatically: boolean;
  };
};
