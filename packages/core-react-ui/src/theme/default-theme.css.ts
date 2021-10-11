import { Colors, DesignSystem, Layout, Sizing } from '@newrade/core-design-system';
import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';
import { defaultCSSButtons } from './default-buttons';
import { defaultCSSColors } from './default-colors';
import { defaultCSSLayout } from './default-layout';
import { defaultCSSSizing } from './default-sizing';

type Buttons = Pick<DesignSystem<string>['components'], 'buttons'>;

export const colorVars = createThemeContract<Colors<string>>(defaultCSSColors);
export const sizingVars = createThemeContract<Sizing<string>>(defaultCSSSizing);
// export const layoutVars = createThemeContract<Layout<string>>(defaultCSSLayout);
export const buttonsVars = createThemeContract<Buttons>(defaultCSSButtons);

// @ts-expect-error
createGlobalTheme(':root', sizingVars, defaultCSSSizing);
// @ts-expect-error
createGlobalTheme(':root', colorVars, defaultCSSColors);
createGlobalTheme(':root', buttonsVars, defaultCSSButtons);
