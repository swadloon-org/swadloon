/**
 *
 */
import { IFieldOptions } from 'contentful-migration';
import { COMMON_FIELD } from './types.constants';

export const commonFields: IFieldOptions = { name: COMMON_FIELD.TYPE, type: 'Symbol', required: true };
