import { FilterProperty, BackgroundPositionProperty } from 'csstype';

export type FilterProps = FilterProperty;

export type BackgroundPositionProps =
  | [BackgroundPositionProperty<string>]
  | [BackgroundPositionProperty<string>, BackgroundPositionProperty<string>]
  | [BackgroundPositionProperty<string>, BackgroundPositionProperty<string>, BackgroundPositionProperty<string>];
