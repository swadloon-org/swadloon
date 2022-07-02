export function log(message?: string | string[]) {
  const str = `core-figma-design-plugin: ${message}`;
  console.log(str);
}

export function logWarn(message?: string | string[]) {
  const str = `core-figma-design-plugin:warning: ${message}`;
  console.warn(str);
}

export function logError(message?: string | string[]) {
  const str = `core-figma-design-plugin:error: ${message}`;
  console.error(str);
}
