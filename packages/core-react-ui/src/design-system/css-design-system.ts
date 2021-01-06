import { DesignSystem } from '@newrade/core-design-system';

export type CSSDesignSystemAdditions = {
  layout: {
    zIndex: {
      chatBubble: number;
      notifications: number;
      navBar: number;
      sideBar: number;
      dialog: number;
      content: number;
    };
  };
};

export type CSSDesignSystem = Omit<DesignSystem<string>, 'iconography' | 'animations' | 'components'> &
  CSSDesignSystemAdditions;

export interface Theme {
  theme: DesignSystem;
  cssTheme: CSSDesignSystem;
}
