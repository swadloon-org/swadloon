export type RuleSetUseItemObject = {
  /**
   * Unique loader identifier
   */
  ident?: string;
  /**
   * Loader name
   */
  loader?: string;
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
