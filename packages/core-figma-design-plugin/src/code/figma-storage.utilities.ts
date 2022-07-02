/**
 *
 * Utility functions for the ClientStorageAPI
 *
 *
 * @see https://www.figma.com/plugin-docs/api/figma-clientStorage/
 *
 */

export async function getClientStorage<Type>(key: string) {
  return (await figma.clientStorage.getAsync(key)) as Promise<Type>;

  // apiURL = await figma.clientStorage.getAsync('apiURL');
  // apiSecret = await figma.clientStorage.getAsync('apiSecret');
}

/**
 *
 * @param key
 * @param data (allows storing objects, arrays, strings, numbers, booleans, null, undefined and Uint8Array)
 */
export async function setClientStorage<Type>(key: string, data: Type) {
  return await figma.clientStorage.setAsync(key, {});
}
