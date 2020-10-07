import { Border, Outline, Padding } from './components/atoms/box';
import { Buttons } from './components/molecules/buttons';
import { Animations } from './foundations/animations';
import { ColorIntents } from './foundations/color-intents';
import { Colors } from './foundations/colors';
import { BoxShadow, Effects } from './foundations/effects';
import { Iconography } from './foundations/iconography';
import { Layout } from './foundations/layout';
import { Sizing } from './foundations/sizing';
import { TEXT_TRANSFORM } from './foundations/text';
import { Typography } from './foundations/typography';
import { Color } from './primitives/color';

export interface DesignSystemTypes {
  themes: 'light' | 'dark';
  color: Color | string;
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
      padding: Padding | string;
      border: Border | string;
      outline: Outline | string;
    };
  };
}

export interface DesignSystem<Types extends DesignSystemTypes = DesignSystemTypes> {
  /**
   * Name of the project or brand's name.
   */
  name: string;
  /**
   * Theme variation's name.
   * @default 'light'
   */
  themes: Types['themes'];
  /**
   * Every color defined in the system.
   */
  colors: Colors<Types['color']>;
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
  components?: {
    buttons: Buttons<
      Types['components']['button']['color'],
      Types['components']['button']['padding'],
      Types['components']['button']['border'],
      Types['components']['button']['outline']
    >;
    // inputs: any;
    // // TOOD
    // links: {
    //   small: {
    //     color: Color;
    //     visited: Color;
    //     hover: Color;
    //     active: Color;
    //   };
    //   medium: {
    //     color: Color;
    //     visited: Color;
    //     hover: Color;
    //     active: Color;
    //   };
    // };
  };
}
