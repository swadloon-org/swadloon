import { Color } from 'csstype';
import { Buttons } from './components/molecules/buttons';
import { ColorIntents, Colors } from './foundations/colors';
import { Effects } from './foundations/effects';
import { Iconography } from './foundations/iconography';
import { Layout } from './foundations/layout';
import { Sizing } from './foundations/sizing';
import { Typography } from './foundations/typography';

export interface DesignSystem {
  /**
   * Name of the project or brand's name.
   */
  name: string;
  /**
   * Theme variation's name.
   * @default 'light'
   */
  variation: 'light' | 'dark' | string;
  /**
   * Every color defined in the system.
   */
  colors: Colors;
  /**
   * Contextual use of certain colors (text, action, state, etc).
   */
  colorIntents: ColorIntents;
  /**
   * Shadows, elevation, blurs and other visual effects.
   */
  effects: Effects;
  /**
   * Defines the system's sizing values.
   */
  sizing: Sizing;
  /**
   * TODO
   */
  iconography: Iconography;
  /**
   * Defines every text styles.
   */
  typography: Typography;
  /**
   * TODO
   */
  animations?: {
    defaultDelay: number;
  };
  /**
   * Breakpoints, common content margins for different viewports.
   */
  layout: Layout;
  /**
   * Components' specific settings.
   */
  components?: {
    buttons: Buttons;
    inputs: any;
    links: {
      color: Color;
      visited: Color;
      hover: Color;
      active: Color;
    };
  };
}
