import { kebab } from 'case';

/**
 * @param value name of the variable
 * @param fallback optional fallback
 */
export function cssVar(value: string, fallback?: string): string {
  return fallback ? `var(${kebab(value)}, ${kebab(fallback)})` : `var(${kebab(value)})`;
}

/**
 * @param value name of the variable
 */
export function cssVarName(value: string): string {
  return `--${kebab(value)}`;
}
