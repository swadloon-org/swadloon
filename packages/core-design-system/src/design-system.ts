import { Buttons } from './components/buttons.js';
import { Animations } from './foundations/animations.js';
import { COLOR_SCHEME } from './foundations/color-scheme.js';
import { Colors } from './foundations/colors.js';
import { Effects } from './foundations/effects.js';
import { Iconography } from './foundations/iconography.js';
import { Layout, LayoutV2 } from './foundations/layout.js';
import { Sizing } from './foundations/sizing.js';
import { Typography, TypographyV2 } from './foundations/typography.js';

export interface DesignSystem<Override extends undefined | string = undefined> {
  /**
   * Theme unique name
   * @example 'ze-light', 'ze-dark'
   */
  name: string;
  /**
   * Theme variation
   * @default 'light'
   */
  colorScheme: COLOR_SCHEME;
  /**
   * Every color defined in the system.
   */
  colors: Colors<Override>;
  /**
   * Defines every text styles.
   */
  typography: Typography<Override>;
  /**
   * Defines the system's sizing values.
   */
  sizing: Sizing<Override>;
  /**
   * TODO
   */
  iconography: Iconography<Override>;
  /**
   * TODO
   */
  // illustrations: any;
  /**
   * TODO
   */
  // photography: any;
  /**
   * Shadows, elevation, blurs and other visual effects.
   */
  effects: Effects<Override>;
  /**
   * Breakpoints, common content margins for different viewports.
   */
  layout: Layout<Override>;
  /**
   * Curves, delays and other defaults for animations.
   */
  animations: Animations;
  /**
   * Components' specific settings.
   */
  components: {
    buttons: Buttons<Override>;
  };
  /**
   * Everything dataviz
   */
  // dataviz: any;
}

export interface DesignSystemV2<Override extends undefined | string = undefined> {
  /**
   * Theme unique name
   * @example 'ze-light', 'ze-dark'
   */
  name: string;
  /**
   * Theme variation
   * @default 'light'
   */
  colorScheme: COLOR_SCHEME;
  /**
   * Every color defined in the system.
   */
  colors: Colors<Override>;
  /**
   * Defines every text styles.
   */
  typography: TypographyV2<Override>;
  /**
   * Defines the system's sizing values.
   */
  sizing: Sizing<Override>;

  /**
   * TODO
   */
  iconography: Iconography<Override>;
  /**
   * TODO
   */
  // illustrations: any;
  /**
   * Shadows, elevation, blurs and other visual effects.
   */
  effects: Effects<Override>;
  /**
   * Breakpoints, common content margins for different viewports.
   */
  layout: LayoutV2<Override>;
  /**
   * Curves, delays and other defaults for animations.
   */
  animations: Animations;
  /**
   * Components' specific settings.
   */
  components: {
    /**
     * Styles
     */

    /**
     * Atoms
     */
    // titles: {};
    // headings: {};
    // paragraphs: {};
    // labels: {};
    // logos: {};
    // links: {};
    // dividers: {};
    // images: {};
    // illustrations: {};

    /**
     * Molecules
     */
    buttons: Buttons<Override>;
    // inputs: {
    //   text: {};
    //   switch: {};
    //   number: {};
    //   dropdown: {};
    //   radio: {};
    //   checkbox: {};
    //   date: {};
    //   dateRange: {};
    //   time: {};
    //   textArea: {};
    // };
    // tags: {};
    // keyboard: {};
    // accordions: {};
    // breadcrumbs: {
    //   separatorIcon: {};
    // };
    // progressBar: {};
    // progressCircle: {};
    // statusDot: {};
    // tabs: {};
    // listItems: {
    //   info: {};
    //   dropdown: {};
    //   sidemenu: {};
    //   menu: {};
    // };
    // notifications: {};
    // backgrounds: {};
    // steppers: {};
    // tooltips: {};
    /**
     * Organisms
     */
    // avatars: {};
    // tables: {};
    // tabsGroup: {};
    // dialogs: {};
    // carousels: {};
    // plots: {
    //   axis: {};
    //   lines: {};
    //   legend: {};
    // };
    // cards: {};
    // forms: {
    //   text: {};
    //   switch: {};
    //   number: {};
    //   dropdown: {};
    //   radio: {};
    //   checkbox: {};
    //   date: {};
    //   dateRange: {};
    //   time: {};
    //   textArea: {};
    // };
    // layout: {
    //   topbar: {};
    //   sidemenu: {};
    //   main: {};
    //   aside: {};
    //   footer: {};
    // };
    // sections?: {
    //   divider: {
    //     // backgroundColor
    //     // padding
    //     leftBlockWidth: number;
    //     gap: number;
    //   };
    // };
  };
}
