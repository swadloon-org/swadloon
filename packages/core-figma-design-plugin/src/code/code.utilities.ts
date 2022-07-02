/// <reference types="@figma/plugin-typings" />

import { PLUGIN_EVENT_TYPE, PluginEvent } from '../common/messages.js';

/**
 *
 * Utiliy functions only for plugin code (code.ts)
 *
 */

export function postMessageToUI<TYPE extends PLUGIN_EVENT_TYPE>(
  pluginMessage: PluginEvent<TYPE>,
  options?: UIPostMessageOptions | undefined
): void {
  figma.ui.postMessage(pluginMessage, options);
}
