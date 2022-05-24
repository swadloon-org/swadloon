import { FigmaTextStyleList } from './figma-text.model';

export enum PLUGIN_EVENT_TYPE {
  /**
   * General
   */
  UNKNOWN = 'UNKNOWN',
  LOG = 'LOG',
  LOADING = 'LOADING',
  NOT_LOADING = 'NOT_LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  /**
   * Themes
   */
  CREATE_TEXT_THEME = 'CREATE_TEXT_THEME',
  UPDATE_TEXT_THEME = 'UPDATE_TEXT_THEME',
  DELETE_TEXT_THEME = 'DELETE_TEXT_THEME',
  CREATE_COLOR_THEME = 'CREATE_COLOR_THEME',
  UPDATE_COLOR_THEME = 'UPDATE_COLOR_THEME',
  DELETE_COLOR_THEME = 'DELETE_COLOR_THEME',
  CREATE_EFFECT_THEME = 'CREATE_EFFECT_THEME',
  UPDATE_EFFECT_THEME = 'UPDATE_EFFECT_THEME',
  DELETE_EFFECT_THEME = 'DELETE_EFFECT_THEME',
  /**
   * Pages
   */
  SYNC_PAGES = 'SYNC_PAGES',
  /**
   * Text and fonts
   */
  VALIDATE_USED_FONTS = 'VALIDATE_USED_FONTS',
  GET_TEXT_STYLE_FAMILY_LIST = 'GET_TEXT_STYLE_FAMILY_LIST',
  GET_TEXT_STYLE_FAMILY_LIST_RETURN = 'GET_TEXT_STYLE_FAMILY_LIST_RETURN',
  DUPLICATE_TEXT_STYLE_FAMILY = 'DUPLICATE_TEXT_STYLE_FAMILY',
  UPDATE_TEXT_STYLES = 'UPDATE_TEXT_STYLES',
  DELETE_TEXT_STYLES = 'DELETE_TEXT_STYLES',
}

/**
 * Payload types for each event
 */
export type PluginEventOptions = {
  /**
   * General
   */
  [PLUGIN_EVENT_TYPE.UNKNOWN]: undefined;
  [PLUGIN_EVENT_TYPE.LOG]: {
    message: string;
  };
  [PLUGIN_EVENT_TYPE.LOADING]: undefined;
  [PLUGIN_EVENT_TYPE.NOT_LOADING]: undefined;
  [PLUGIN_EVENT_TYPE.SUCCESS]: {
    message: string;
  };
  [PLUGIN_EVENT_TYPE.ERROR]: {
    message: string;
    errors: Error[];
  };
  /**
   * Themes
   */
  [PLUGIN_EVENT_TYPE.CREATE_TEXT_THEME]: undefined;
  [PLUGIN_EVENT_TYPE.UPDATE_TEXT_THEME]: undefined;
  [PLUGIN_EVENT_TYPE.DELETE_TEXT_THEME]: undefined;
  [PLUGIN_EVENT_TYPE.CREATE_COLOR_THEME]: undefined;
  [PLUGIN_EVENT_TYPE.UPDATE_COLOR_THEME]: undefined;
  [PLUGIN_EVENT_TYPE.DELETE_COLOR_THEME]: undefined;
  [PLUGIN_EVENT_TYPE.CREATE_EFFECT_THEME]: undefined;
  [PLUGIN_EVENT_TYPE.UPDATE_EFFECT_THEME]: undefined;
  [PLUGIN_EVENT_TYPE.DELETE_EFFECT_THEME]: undefined;
  /**
   * Pages
   */
  [PLUGIN_EVENT_TYPE.SYNC_PAGES]: undefined;
  /**
   * Text and fonts
   */
  [PLUGIN_EVENT_TYPE.VALIDATE_USED_FONTS]: undefined;
  [PLUGIN_EVENT_TYPE.GET_TEXT_STYLE_FAMILY_LIST]: undefined;
  [PLUGIN_EVENT_TYPE.GET_TEXT_STYLE_FAMILY_LIST_RETURN]: {
    textStyleFamilyList: FigmaTextStyleList;
  };
  [PLUGIN_EVENT_TYPE.DUPLICATE_TEXT_STYLE_FAMILY]: {
    textStyleFamilyToDuplicate: string;
    newTextStyleFamilyName: string;
  };

  [PLUGIN_EVENT_TYPE.UPDATE_TEXT_STYLES]: undefined;
  [PLUGIN_EVENT_TYPE.DELETE_TEXT_STYLES]: undefined;
};

/**
 * Generic event type utility to properly type the event payload
 */
export type PluginEvent<Type extends PLUGIN_EVENT_TYPE> = PluginEventOptions[Type] extends undefined
  ? {
      type: Type extends PLUGIN_EVENT_TYPE ? Type : PLUGIN_EVENT_TYPE.UNKNOWN;
      payload?: PluginEventOptions[Type] extends undefined ? undefined : PluginEventOptions[Type];
    }
  : {
      type: Type extends PLUGIN_EVENT_TYPE ? Type : PLUGIN_EVENT_TYPE.UNKNOWN;
      payload: PluginEventOptions[Type] extends undefined ? undefined : PluginEventOptions[Type];
    };
