import { DesignSystem } from '@newrade/core-design-system';

export type CSSDesignSystem = Omit<DesignSystem<string>, 'iconography' | 'animations' | 'components'>;

export interface Theme {
  theme: DesignSystem;
  cssTheme: CSSDesignSystem;
}
