import { Property } from 'csstype';

/**
 * [mobile, tablet, desktop]
 */
export type GapProp =
  | [Property.Gap<any>]
  | [Property.Gap<any>, Property.Gap<any>]
  | [Property.Gap<any>, Property.Gap<any>, Property.Gap<any>];

export type VariantGrid = 'rows' | 'col';
