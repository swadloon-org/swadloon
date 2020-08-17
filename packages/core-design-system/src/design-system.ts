import { Color } from 'csstype';
import { ColorIntents, Colors } from './colors';
import { Buttons } from './components/buttons';
import { Effects } from './effects';
import { Layout } from './layout';
import { Typography } from './typography';
import { Sizing } from './sizing';

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
  effects?: Effects;
  /**
   * Defines the system's sizing values.
   */
  sizing: Sizing;
  /**
   * Defines every text styles.
   */
  typography: Typography;
  /**
   * TODO
   */
  animations?: any;
  /**
   * Breakpoints, common content margins for different viewports.
   */
  layout: Layout;
  /**
   * Components' specific settings.
   */
  components?: {
    buttons: Buttons;
    link: {
      color: Color;
      visited: Color;
      hover: Color;
      active: Color;
    };
  };
}
