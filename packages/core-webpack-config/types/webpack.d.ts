import { RuleSetConditions, RuleSetConditionsAbsolute } from 'webpack/declarations/WebpackOptions';

declare module 'webpack/declarations/WebpackOptions' {
  type RuleSetConditionsRecursive = RuleSetConditions[];
  type RuleSetConditionsAbsoluteRecursive = RuleSetConditionAbsolute[];
}
