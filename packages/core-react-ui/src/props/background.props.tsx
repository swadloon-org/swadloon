import { Property } from 'csstype';

export type FilterProps = Property.Filter;

export type BackgroundPositionProps =
  | [Property.BackgroundPosition<string>]
  | [Property.BackgroundPosition<string>, Property.BackgroundPosition<string>]
  | [Property.BackgroundPosition<string>, Property.BackgroundPosition<string>, Property.BackgroundPosition<string>];
