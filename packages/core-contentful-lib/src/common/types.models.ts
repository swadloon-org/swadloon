/**
 *
 */
import { IFieldOptions } from 'contentful-migration';
import { COMMON_FIELD, COMMON_TYPE } from './types.constants';

export const commonFields: IFieldOptions = { name: COMMON_FIELD.TYPE, type: COMMON_TYPE.SYMBOL, localized: true };
export const nameFields: IFieldOptions = { name: COMMON_FIELD.NAME, type: COMMON_TYPE.SYMBOL, localized: true };
export const titleFields: IFieldOptions = { name: COMMON_FIELD.TITLE, type: COMMON_TYPE.SYMBOL, localized: true };
export const textFields: IFieldOptions = { name: COMMON_FIELD.TEXT, type: COMMON_TYPE.TEXT, localized: true };
export const labelFields: IFieldOptions = { name: COMMON_FIELD.LABEL, type: COMMON_TYPE.SYMBOL, localized: true };
