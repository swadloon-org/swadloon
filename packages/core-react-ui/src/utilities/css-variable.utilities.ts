export function cssVar(value: string, fallback?: string): string {
  return fallback ? `var(${value}, ${fallback})` : `var(${value})`;
}
