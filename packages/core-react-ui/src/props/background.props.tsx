import { FilterProperty, BackgroundPositionProperty } from 'csstype';

export type FilterProps =
  | [FilterProperty]
  | [FilterProperty, FilterProperty]
  | [FilterProperty, FilterProperty, FilterProperty];

export type BackgroundPositionProps =
  | [BackgroundPositionProperty<any>]
  | [BackgroundPositionProperty<any>, BackgroundPositionProperty<any>]
  | [BackgroundPositionProperty<any>, BackgroundPositionProperty<any>, BackgroundPositionProperty<any>];
