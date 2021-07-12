import { DesignSystem } from '@newrade/core-design-system';
import type { Contract, MapLeafNodes } from '@vanilla-extract/private';

type CSSTheme = Pick<DesignSystem<string>, 'components'>;

export declare type ThemeVars<ThemeContract extends Contract> = MapLeafNodes<ThemeContract, string>;

declare type createGlobalThemeFn<ThemeContract extends Contract> = (
  selector: string,
  themeContract: ThemeContract,
  tokens: ThemeVars<ThemeContract>
) => void;
