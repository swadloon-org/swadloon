import { prefab } from '@diez/engine';

/**
 * Importing prebuilt diez prefab
 */
import * as prefabs from '@diez/prefabs';

/**
 * Importing prebuilt diez prefab
 */
export interface ColorsProps {
  primary100: prefabs.Color;
  primary300: prefabs.Color;
  primary500: prefabs.Color;
  primary700: prefabs.Color;
  primary1000: prefabs.Color;
  accent100: prefabs.Color;
  accent300: prefabs.Color;
  accent500: prefabs.Color;
  accent700: prefabs.Color;
  accent1000: prefabs.Color;
  greyscaleTransparent: prefabs.Color;
  greyscaleInverted: prefabs.Color;
  greyscale0: prefabs.Color;
  greyscale100: prefabs.Color;
  greyscale100White: prefabs.Color;
  greyscale150: prefabs.Color;
  greyscale200: prefabs.Color;
  greyscale200White: prefabs.Color;
  greyscale300: prefabs.Color;
  greyscale400: prefabs.Color;
  greyscale500: prefabs.Color;
  greyscale600: prefabs.Color;
  greyscale700: prefabs.Color;
  greyscale800: prefabs.Color;
  greyscale900: prefabs.Color;
  greyscale1000: prefabs.Color;
}

/**
 * Representation of all colors used in a ColorTheme
 */
export class Colors extends prefab<ColorsProps>() {
  defaults = {
    primary100: prefabs.Color.hex('#fff'),
    primary300: prefabs.Color.hex('#fff'),
    primary500: prefabs.Color.hex('#fff'),
    primary700: prefabs.Color.hex('#fff'),
    primary1000: prefabs.Color.hex('#fff'),
    accent100: prefabs.Color.hex('#fff'),
    accent300: prefabs.Color.hex('#fff'),
    accent500: prefabs.Color.hex('#fff'),
    accent700: prefabs.Color.hex('#fff'),
    accent1000: prefabs.Color.hex('#fff'),
    greyscaleTransparent: prefabs.Color.hex('#fff'),
    greyscaleInverted: prefabs.Color.hex('#fff'),
    greyscale0: prefabs.Color.hex('#fff'),
    greyscale100: prefabs.Color.hex('#fff'),
    greyscale100White: prefabs.Color.hex('#fff'),
    greyscale150: prefabs.Color.hex('#fff'),
    greyscale200: prefabs.Color.hex('#fff'),
    greyscale200White: prefabs.Color.hex('#fff'),
    greyscale300: prefabs.Color.hex('#fff'),
    greyscale400: prefabs.Color.hex('#fff'),
    greyscale500: prefabs.Color.hex('#fff'),
    greyscale600: prefabs.Color.hex('#fff'),
    greyscale700: prefabs.Color.hex('#fff'),
    greyscale800: prefabs.Color.hex('#fff'),
    greyscale900: prefabs.Color.hex('#fff'),
    greyscale1000: prefabs.Color.hex('#fff'),
  };
}
