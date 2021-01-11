import { GapProperty } from 'csstype';

/**
 * [mobile, tablet, desktop]
 */
export type GapProp =
  | [GapProperty<any>]
  | [GapProperty<any>, GapProperty<any>]
  | [GapProperty<any>, GapProperty<any>, GapProperty<any>];
