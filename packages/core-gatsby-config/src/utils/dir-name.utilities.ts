/**
 * @param name relative path
 * @example /dir/page-name.tsx => dir
 */
export function getDirNameFromRelativePath(name?: string | null): string {
  if (!name) {
    return '';
  }

  const reg = /([A-Z-]+)\//gi;
  const match = reg.exec(name);
  return match && match?.[1] ? match[1] : '';
}
