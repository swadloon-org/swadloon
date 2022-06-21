import { Organization } from './organization.model.js';
import { User } from './user.model.js';

export enum RULE_CATEGORY {
  ORGANIZATION,
  USER,
  PROJECT,
  DESIGN_SYSTEM,
  SITE,
}

export enum API_NAMES {
  AUTH = 'auth',
}

export enum MODEL_NAMES {
  USER = 'user',
}

export type Rule = {
  /**
   * Name of the resource this rule applies to
   */
  resource: API_NAMES | MODEL_NAMES;
  /**
   * Used to group rules into category in the platform admin
   */
  category: RULE_CATEGORY;
  access: RULE_ACCESS;
};

export enum RULE_ACCESS {
  READ,
  UPDATE,
  LINK,
  DELETE,
}
