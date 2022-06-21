import { FigmaPluginConfig } from './figma-plugin-config.model.js';
import { User } from './user.model.js';

/**
 * Project contains a design system, a site and users
 */
export type Project = {
  /**
   * Unique name (within the org) for the project
   */
  name: string;
  /**
   * DS associated with the projet and site (if a site is created)
   */
  designSystemId: string;
  /**
   * Linked site (optional)
   */
  siteId?: string;
  /**
   * Users assigned to this project
   */
  users: User[];
  /**
   * Project-level integration options
   */
  integrations: ProjectIntegrations;
};

export type ProjectIntegrations = {
  github: {
    /**
     * Whether Github's integration is enabled at the project level
     * @default false
     */
    enabled: boolean;
  };
  /**
   * Plugin configuration options for the Figma plugin
   */
  figma: {
    /**
     * Whether Figma's integration is enabled at the project level
     * @default false
     */
    enabled: boolean;
    /**
     * Figma organization id
     */
    orgId: string;
    fileId: string;
    pluginConfig: FigmaPluginConfig;
  };
};
