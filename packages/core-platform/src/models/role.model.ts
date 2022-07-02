import { Rule } from './rule.model.js';

export type Role = {
  name: string;
  rules: Rule[];
};
