import { DesignSystemV2 } from '@newrade/core-design-system';
import { TimeStamps } from './common-props.model.js';
import { Project } from './project.model.js';
import { Role } from './role.model.js';
import { Site } from './site.model.js';
import { User } from './user.model.js';

/**
 * Top level configuration object to hold all information of an organization.
 */
export type Organization = TimeStamps & {
  /**
   * UUID
   * @example Company A
   */
  id: string;
  /**
   * Unique tenant name
   * @example Company A
   */
  name: string;
  /**
   * URL compatible and unique tenant slug
   * @example compagny-a.swadloon.com
   */
  slug: string;
  // /**
  //  * List of projects for the org
  //  */
  // projects: Project[];
  // /**
  //  * List of users for the org (users still need to be assigned to projects to access)
  //  */
  // users: User[];
  // /**
  //  * Roles available for the org and its projects
  //  */
  // roles: Role[];
  // /**
  //  * Design systems available for the org to use
  //  */
  // designSystems: DesignSystemV2[];
  // /**
  //  * Org-level integration options for other tools (e.g. configuration for the Swadloon Figma plugin, etc)
  //  */
  // integrations: OrgIntegrations;
};

/**
 * Integration config for an organization.
 * This is mainly used to enable or disable features for all projects.
 */
export type OrgIntegrations = {
  github: {
    /**
     * Whether Github's integration is enabled
     *
     * If set to false, this will disable Github integration in all projects
     *
     * @default false
     */
    enabled: boolean;
  };
  figma: {
    /**
     * Whether Figma's integration is enabled
     *
     * If set to false, this will disable Figma integration in all projects
     *
     * @default false
     */
    enabled: boolean;
  };
};
