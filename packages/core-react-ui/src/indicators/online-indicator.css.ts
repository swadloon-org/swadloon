import { style } from '@vanilla-extract/css';

import { colorVars, sizeVars } from '../theme';
import { getCSSColorVar } from '../utilities-iso';

export const wrapper = style({
  width: '100%',
});

export const status = style({
  justifySelf: 'flex-start',
  borderRadius: `6px`,
  // backgroundColor: getCSSColor({
  //   ...theme.colors.colorIntents.primary,
  //   a: 5,
  // }),
  backgroundColor: getCSSColorVar({
    h: colorVars.colors.primary.baseHue,
    s: colorVars.colors.primary.baseSat,
    l: 50,
    a: 5,
  }),
  padding: sizeVars.x3,
});

export const statusOnline = style({
  color: colorVars.colorIntents.successAction,
});

export const statusOffline = style({
  color: colorVars.colorIntents.warningAction,
});

export const statusDot = style({
  width: `10px`,
  height: `10px`,
  borderRadius: `50%`,
  backgroundColor: `currentColor`,
  boxShadow: `0 0 2px 0 currentColor`,
});
