import { prefab } from '@diez/engine';

/**
 * Importing prebuilt diez prefab
 */
import * as prefabs from '@diez/prefabs';

/**
 * Importing prebuilt diez prefab
 */
export interface ColorsProps {
  primary: prefabs.Color;
}

/**
 * Representation of all colors used in a ColorTheme
 */
export class Colors extends prefab<ColorsProps>() {
  defaults = {
    primary: prefabs.Color.hex('#4A42FB'),
  };
}
