import { FigmaTextStyleList } from './figma-text.model';

export enum PLUGIN_EVENT_TYPE {
  UNKNOWN = 'UNKNOWN',
  LOG = 'LOG',
  LOADING = 'LOADING',
  NOT_LOADING = 'NOT_LOADING',
  SYNC_PAGES = 'SYNC_PAGES',
  VALIDATE_USED_FONTS = 'VALIDATE_USED_FONTS',
  GET_TEXT_STYLE_FAMILY_LIST = 'GET_TEXT_STYLE_FAMILY_LIST',
  GET_TEXT_STYLE_FAMILY_LIST_RETURN = 'GET_TEXT_STYLE_FAMILY_LIST_RETURN',
  DUPLICATE_TEXT_STYLE_FAMILY = 'DUPLICATE_TEXT_STYLE_FAMILY',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  UPDATE_TEXT_STYLES = 'UPDATE_TEXT_STYLES',
  DELETE_TEXT_STYLES = 'DELETE_TEXT_STYLES',
}

export type PluginEvent<Type extends PLUGIN_EVENT_TYPE> = PluginEventOptions[Type] extends undefined
  ? {
      type: Type extends PLUGIN_EVENT_TYPE ? Type : PLUGIN_EVENT_TYPE.UNKNOWN;
      payload?: PluginEventOptions[Type] extends undefined ? undefined : PluginEventOptions[Type];
    }
  : {
      type: Type extends PLUGIN_EVENT_TYPE ? Type : PLUGIN_EVENT_TYPE.UNKNOWN;
      payload: PluginEventOptions[Type] extends undefined ? undefined : PluginEventOptions[Type];
    };

export type PluginEventOptions = {
  [PLUGIN_EVENT_TYPE.UNKNOWN]: undefined;
  [PLUGIN_EVENT_TYPE.LOG]: {
    message: string;
  };
  [PLUGIN_EVENT_TYPE.LOADING]: undefined;
  [PLUGIN_EVENT_TYPE.NOT_LOADING]: undefined;
  [PLUGIN_EVENT_TYPE.SYNC_PAGES]: undefined;
  [PLUGIN_EVENT_TYPE.VALIDATE_USED_FONTS]: undefined;
  [PLUGIN_EVENT_TYPE.GET_TEXT_STYLE_FAMILY_LIST]: undefined;
  [PLUGIN_EVENT_TYPE.GET_TEXT_STYLE_FAMILY_LIST_RETURN]: {
    textStyleFamilyList: FigmaTextStyleList;
  };
  [PLUGIN_EVENT_TYPE.DUPLICATE_TEXT_STYLE_FAMILY]: {
    textStyleFamilyToDuplicate: string;
    newTextStyleFamilyName: string;
  };
  [PLUGIN_EVENT_TYPE.SUCCESS]: {
    message: string;
  };
  [PLUGIN_EVENT_TYPE.ERROR]: {
    message: string;
    errors: Error[];
  };
  [PLUGIN_EVENT_TYPE.UPDATE_TEXT_STYLES]: undefined;
  [PLUGIN_EVENT_TYPE.DELETE_TEXT_STYLES]: undefined;
};
