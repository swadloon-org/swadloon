import { BasicCSSProperties } from '../utilities/types';

export type CSSBorder = Pick<
  BasicCSSProperties,
  'borderWidth' | 'borderStyle' | 'borderColor' | 'borderRadius'
>;
