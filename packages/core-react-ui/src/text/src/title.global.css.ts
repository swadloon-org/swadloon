import { createStyleObject } from '@capsizecss/core';
import { globalStyle, GlobalStyleRule } from '@vanilla-extract/css';

import { typographyVars } from '../default-theme/default-theme.css';

const baseStyle: GlobalStyleRule = {};

globalStyle(`.title-t1`, {
  ...baseStyle,
  ...createStyleObject(typographyVars.titles.mobile.t1.capsize),
});
