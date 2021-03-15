import { Buttons } from './components/molecules/buttons';
import { Animations } from './foundations/animations';
import { Colors } from './foundations/colors';
import { Effects } from './foundations/effects';
import { Iconography } from './foundations/iconography';
import { Layout } from './foundations/layout';
import { Sizing } from './foundations/sizing';
import { Typography } from './foundations/typography';

export interface DesignSystem<Override extends undefined | string = undefined> {
  /**
   * Name of the project or brand's name.
   */
  name: string;
  /**
   * Theme variation's name.
   * @default 'light'
   */
  variation: 'light' | 'dark';
  /**
   * Every color defined in the system.
   */
  colors: Colors<Override>;
  /**
   * Shadows, elevation, blurs and other visual effects.
   */
  effects: Effects<Override>;
  /**
   * Defines the system's sizing values.
   */
  sizing: Sizing<Override>;
  /**
   * TODO
   */
  iconography: Iconography<Override>;
  /**
   * Defines every text styles.
   */
  typography: Typography<Override>;
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
    sections?: {
      divider: {
        // backgroundColor
        // padding
        leftBlockWidth: number;
        gap: number;
      };
    };
  };
}
