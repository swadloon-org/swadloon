import { IFieldOptions } from 'contentful-migration';
import { COMMON_FIELD, COMMON_TYPE } from './types.constants';

export const commonFields: IFieldOptions = { name: COMMON_FIELD.TYPE, type: COMMON_TYPE.SYMBOL, localized: true };

export const nameFields: IFieldOptions = { name: COMMON_FIELD.NAME, type: COMMON_TYPE.SYMBOL, localized: true };

export const titleFields: IFieldOptions = { name: COMMON_FIELD.TITLE, type: COMMON_TYPE.SYMBOL, localized: true };

export const subTitleFields: IFieldOptions = { name: COMMON_FIELD.SUBTITLE, type: COMMON_TYPE.SYMBOL, localized: true };

export const descriptionFields: IFieldOptions = {
  name: COMMON_FIELD.DESCRIPTION,
  type: COMMON_TYPE.TEXT,
  localized: true,
};

export const markdownFields: IFieldOptions = { name: COMMON_FIELD.CONTENT, type: COMMON_TYPE.TEXT, localized: true };

export const textFields: IFieldOptions = { name: COMMON_FIELD.TEXT, type: COMMON_TYPE.TEXT, localized: true };

export const labelFields: IFieldOptions = { name: COMMON_FIELD.LABEL, type: COMMON_TYPE.SYMBOL, localized: true };

export const urlFields: IFieldOptions = { name: COMMON_FIELD.URL, type: COMMON_TYPE.SYMBOL };

export const imagesFields: IFieldOptions = {
  name: COMMON_FIELD.Images,
  type: COMMON_TYPE.ARRAY,
  items: {
    type: COMMON_TYPE.LINK,
    linkType: COMMON_TYPE.ASSET,
  },
};

export const imageFields: IFieldOptions = {
  name: COMMON_FIELD.Image,
  type: COMMON_TYPE.LINK,
  linkType: COMMON_TYPE.ASSET,
};
