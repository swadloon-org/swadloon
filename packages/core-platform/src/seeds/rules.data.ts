import { MODEL_NAMES, Rule, RULE_ACCESS, RULE_CATEGORY } from '../models/rule.model.js';

export const defaultRules: Rule[] = [
  {
    category: RULE_CATEGORY.ORGANIZATION,
    resource: MODEL_NAMES.USER,
    access: RULE_ACCESS.READ,
  },
];
