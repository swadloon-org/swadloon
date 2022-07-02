/// <reference types="@figma/plugin-typings" />

import { PLUGIN_EVENT_TYPE, PluginEvent } from '../common/messages.js';

import { logUI } from './log.ui.utilities.js';

/**
 *
 * Utiliy functions only for plugin UI (ui.tsx)
 *
 */

export function postMessageToCode<TYPE extends PLUGIN_EVENT_TYPE>({
  type,
  payload,
}: PluginEvent<TYPE>): void {
  logUI(`sending message of type ${type}`);
  parent.postMessage({ pluginMessage: { type, payload } }, '*');
}
