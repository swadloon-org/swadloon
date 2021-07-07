import { Sizing } from '@newrade/core-design-system';
import { createThemeContract } from '@vanilla-extract/css';
import { defaultSizing } from '../default-theme';
import { getCSSSizingV2 } from '../utilities/sizing.utilities';

export const defaultCSSSizing = getCSSSizingV2(defaultSizing);

export const sizingVars = createThemeContract<Sizing<string>>(defaultCSSSizing);
