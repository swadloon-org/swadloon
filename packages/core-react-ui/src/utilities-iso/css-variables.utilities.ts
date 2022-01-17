import { kebab } from 'case';

/**
 * Create a custom property expression.
 *
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

/**
 * Remove the var(...) expression of a CSS variable expression
 */
export function getCSSVar(varExpression?: string): string {
  if (!varExpression) {
    return '';
  }
  const match = /var\((?<cssvar>--.+)\)/.exec(varExpression);
  if (!(match && match.groups?.cssvar)) {
    return '';
  }
  return match?.groups?.cssvar || '';
}
