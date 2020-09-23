import { RuleSetLoader, RuleSetQuery } from 'webpack/declarations/WebpackOptions';

export type RuleSetUseItemObject = {
  /**
   * Unique loader identifier
   */
  ident?: string;
  /**
   * Loader name
   */
  loader?: RuleSetLoader;
  /**
   * Loader options
   */
  options?: RuleSetQueryObject;
  /**
   * Loader query
   */
  query?: RuleSetQueryObject;
};

export type RuleSetQueryObject = {
  [k: string]: any;
};
