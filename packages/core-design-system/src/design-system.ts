import { Border, Outline } from './components/atoms/box';
import { Buttons } from './components/molecules/buttons';
import { Animations } from './foundations/animations';
import { Colors } from './foundations/colors';
import { BoxShadow, Effects } from './foundations/effects';
import { Iconography } from './foundations/iconography';
import { Layout } from './foundations/layout';
import { MediaQueryGroup } from './foundations/media-queries';
import { Sizing, SizingStep } from './foundations/sizing';
import { TEXT_TRANSFORM } from './foundations/text';
import { Typography } from './foundations/typography';
import { Color } from './primitives/color';

export interface DesignSystem<ThemeType extends undefined | string = undefined> {
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
  colors: ThemeType extends string ? Colors<ThemeType> : Colors<Color>;
  /**
   * Shadows, elevation, blurs and other visual effects.
   */
  effects: Effects<ThemeType extends string ? ThemeType : BoxShadow, ThemeType extends string ? ThemeType : Color>;
  /**
   * Defines the system's sizing values.
   */
  sizing: Sizing<ThemeType extends string ? ThemeType : SizingStep>;
  /**
   * TODO
   */
  iconography: Iconography<ThemeType extends string ? ThemeType : SizingStep>;
  /**
   * Defines every text styles.
   */
  typography: Typography<
    ThemeType extends string ? ThemeType : number,
    ThemeType extends string ? ThemeType : number,
    ThemeType extends string ? ThemeType : TEXT_TRANSFORM
  >;
  /**
   * Breakpoints, common content margins for different viewports.
   */
  layout: Layout<ThemeType extends string ? ThemeType : number, ThemeType extends string ? ThemeType : MediaQueryGroup>;
  /**
   * Curves, delays and other defaults for animations.
   */
  animations: Animations;
  /**
   * Components' specific settings.
   */
  components: {
    buttons: Buttons<
      // Color Type
      ThemeType extends string ? ThemeType : Color,
      // Padding Type
      ThemeType extends string ? ThemeType : ThemeType extends string ? ThemeType : number,
      // Border Type
      ThemeType extends string
        ? ThemeType
        : Border<
            ThemeType extends string ? ThemeType : Color,
            ThemeType extends string ? ThemeType : number,
            ThemeType extends string ? ThemeType : number
          >,
      // Outline Type
      ThemeType extends string
        ? ThemeType
        : Outline<
            ThemeType extends string ? ThemeType : Color,
            ThemeType extends string ? ThemeType : number,
            ThemeType extends string ? ThemeType : number
          >
    >;
  };
}
