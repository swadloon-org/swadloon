import { kebab } from 'case';

/**
 * @param value name of the variable
 * @param fallback optional fallback
 */
export function cssVar(value?: string, fallback?: string): string {
  if (!value) {
    return '';
  }

  return fallback ? `var(${value}, ${fallback})` : `var(${value})`;
}

/**
 * @param value name of the variable
 */
export function cssVarName(value: string): string {
  return `--${kebab(value)}`;
}
