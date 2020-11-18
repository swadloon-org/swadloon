import { DesignSystem } from '@newrade/core-design-system';

export type CSSDesignSystem = DesignSystem<string>;

export interface Theme {
  theme: DesignSystem<string>;
  cssTheme: CSSDesignSystem;
}
