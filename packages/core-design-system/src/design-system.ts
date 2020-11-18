import { Border, Outline } from './components/atoms/box';
import { Animations } from './foundations/animations';
import { ColorIntents } from './foundations/color-intents';
import { Colors } from './foundations/colors';
import { Components } from './foundations/components';
import { BoxShadow, Effects } from './foundations/effects';
import { Iconography } from './foundations/iconography';
import { Layout } from './foundations/layout';
import { Sizing } from './foundations/sizing';
import { TEXT_TRANSFORM } from './foundations/text';
import { Typography } from './foundations/typography';
import { Color } from './primitives/color';

export interface DesignSystemTypes<ColorType = Color> {
  variation: 'light' | 'dark';
  color: ColorType;
  shadow: BoxShadow | string;
  sizing: Sizing | number;
  typography: {
    fontWeight: number | string;
    letterSpacing: number;
    textTransform: TEXT_TRANSFORM | string;
  };
  layout: {
    breakpointType: number;
  };
  components: {
    button: {
      color: Color | string;
      padding: number | string;
      border: Border | string;
      outline: Outline | string;
    };
  };
}

export interface DesignSystem<ThemeType = undefined> {
  /**
   * Name of the project or brand's name.
   */
  name: string;
  /**
   * Theme variation's name.
   * @default 'light'
   */
  variation: ThemeType extends string ? ThemeType : 'light' | 'dark';
  /**
   * Every color defined in the system.
   */
  colors: ThemeType extends string ? Colors<ThemeType> : Colors<Color>;
  /**
   * Contextual use of certain colors (text, action, state, etc).
   */
  colorIntents: ColorIntents<Types['color']>;
  /**
   * Shadows, elevation, blurs and other visual effects.
   */
  effects: Effects<Types['shadow']>;
  /**
   * Defines the system's sizing values.
   */
  sizing: Sizing<Types['sizing']>;
  /**
   * TODO
   */
  iconography: Iconography<Types['sizing']>;
  /**
   * Defines every text styles.
   */
  typography: Typography<
    Types['typography']['fontWeight'],
    Types['typography']['letterSpacing'],
    Types['typography']['textTransform']
  >;
  /**
   * TODO
   */
  animations?: Animations;
  /**
   * Breakpoints, common content margins for different viewports.
   */
  layout: Layout<Types['layout']['breakpointType']>;
  /**
   * Components' specific settings.
   */
  components: Components<Types>;
}
