import { Colors, DesignSystem, Sizing } from '@newrade/core-design-system';
import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';
import { defaultCSSButtons } from './default-buttons';
import { defaultCSSColors } from './default-colors';
import { defaultCSSSizing } from './default-sizing';
import type { Contract, MapLeafNodes } from '@vanilla-extract/private';

type CSSTheme = Pick<DesignSystem<string>, 'components'>;

export declare type ThemeVars<ThemeContract extends Contract> = MapLeafNodes<ThemeContract, string>;

declare type createGlobalThemeFn<ThemeContract extends Contract> = (
  selector: string,
  themeContract: ThemeContract,
  tokens: ThemeVars<ThemeContract>
) => void;

export const colorVars = createThemeContract<Colors<string>>(defaultCSSColors);
export const sizingVars = createThemeContract<Sizing<string>>(defaultCSSSizing);
export const buttonsVars =
  createThemeContract<Pick<DesignSystem<string>['components'], 'buttons'>>(defaultCSSButtons);

(createGlobalTheme as createGlobalThemeFn<typeof sizingVars>)(
  ':root',
  sizingVars,
  defaultCSSSizing
);
(createGlobalTheme as createGlobalThemeFn<typeof colorVars>)(':root', colorVars, defaultCSSColors);
(createGlobalTheme as createGlobalThemeFn<typeof buttonsVars>)(
  ':root',
  buttonsVars,
  defaultCSSButtons
);
