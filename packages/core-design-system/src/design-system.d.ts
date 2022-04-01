import { Buttons } from './components/buttons';
import { Animations } from './foundations/animations';
import { COLOR_SCHEME } from './foundations/color-scheme';
import { Colors } from './foundations/colors';
import { Effects } from './foundations/effects';
import { Iconography } from './foundations/iconography';
import { Layout, LayoutV2 } from './foundations/layout';
import { Sizing } from './foundations/sizing';
import { Typography, TypographyV2 } from './foundations/typography';
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
        /**
         * Molecules
         */
        buttons: Buttons<Override>;
    };
}
