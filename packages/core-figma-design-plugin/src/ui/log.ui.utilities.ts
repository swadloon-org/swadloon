export function logUI(message?: string | string[] | Error[]) {
  console.log(`core-figma-design-plugin:ui: ${message}`);
}

export function logWarnUI(message?: string | string[] | Error[]) {
  console.warn(`core-figma-design-plugin:ui:warning: ${message}`);
}

export function logErrorUI(message?: string | string[] | Error[]) {
  if (Array.isArray(message)) {
    message.forEach((error) => {
      console.error(`core-figma-design-plugin:ui:error: ${error}`);
    });
    return;
  }
  console.error(`core-figma-design-plugin:ui:error: ${message}`);
}
