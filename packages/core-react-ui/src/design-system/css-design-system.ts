import { DesignSystem } from '@newrade/core-design-system';

export type CSSDesignSystemAdditions = {};

export type CSSDesignSystem = Omit<DesignSystem<string>, 'iconography' | 'animations' | 'components'> &
  CSSDesignSystemAdditions;

export interface Theme {
  theme: DesignSystem;
  cssTheme: CSSDesignSystem;
}
