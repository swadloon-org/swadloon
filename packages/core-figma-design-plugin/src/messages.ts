export enum PLUGIN_EVENT_TYPE {
  LOADING,
  NOT_LOADING,
  VALIDATE_USED_FONTS,
  UPDATE_TEXT_STYLES,
  DELETE_TEXT_STYLES,
}

export type PluginEvent = {
  type: PLUGIN_EVENT_TYPE;
  message?: string;
  options?: any;
};
