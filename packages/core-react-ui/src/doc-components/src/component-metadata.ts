/**
 * Information about a component for documentation purpose
 */
export type ComponentMetadata = {
  /**
   * Indicates if the component is ready for use
   */
  status: 'wip' | 'published';
  /**
   * Version of the component
   * @example v1
   */
  version: string;
  /**
   * Keywords associated with the component
   */
  tags: Array<string>;
  /**
   * Supported elements for rendering
   */
  asElements: Array<string>;
  /**
   * Indicates if the component has tests written
   */
  tests: 'ok' | 'missing';
  /**
   * Indicates if the component has documentation
   */
  documentation: boolean;
  /**
   * Indicates if the component is meant to be used on desktop only.
   * It implies that it's optimized for a large display or mouse and keyboard interaction.
   *
   * @default false
   */
  desktopOnly: boolean;
  /**
   * Indicates if reversed color mode is supported
   */
  colorModeSupported: boolean;
  /**
   * Indicates if the component is deprecated or not
   *
   * @default false
   */
  deprecated: boolean;
  /**
   * Indicates where to go for the next version of the component
   */
  deprecatedSee?: string;
};
