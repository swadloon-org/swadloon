export enum PLUGIN_MESSAGE_TYPE {
  VALIDATE_USED_FONTS,
  UPDATE_TEXT_STYLES,
  DELETE_TEXT_STYLES,
}

export type PluginMessage = {
  type: PLUGIN_MESSAGE_TYPE;
  options?: any;
};
