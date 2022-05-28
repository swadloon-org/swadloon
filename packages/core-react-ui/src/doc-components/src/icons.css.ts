import { style } from '@vanilla-extract/css';

import { colorVars, effectsVars, sizeVars } from '../theme';

export const wrapper = style({
  alignItems: 'flex-start',
  paddingTop: sizeVars.x3,
});

export const inputWrapper = style({
  width: 'auto',
  minWidth: '272px',
  flex: 1,
});

export const icon = style({
  marginBottom: sizeVars.x2,
  padding: sizeVars.x3,

  boxShadow: effectsVars.boxShadows.light,
});

export const download = style({
  display: 'grid',
  gap: sizeVars.x3,
  padding: sizeVars.x3,

  gridTemplateColumns: 'auto auto auto',
  justifyContent: 'flex-start',
  alignItems: 'center',

  backgroundColor: colorVars.colorIntents.background1,
  border: `1px solid ${colorVars.colors.grey[100]}`,
  borderRadius: 4,
});

export const usage = style({
  display: 'grid',
  gap: sizeVars.x3,
  padding: sizeVars.x3,

  backgroundColor: colorVars.colorIntents.background1,
  border: `1px solid ${colorVars.colors.grey[100]}`,
  borderRadius: 4,
  overflow: 'hidden',
});

export const usageHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  margin: `calc(-1 * ${sizeVars.x3})`,
  marginBottom: sizeVars.x1,
  padding: sizeVars.x3,

  color: colorVars.colorIntents.primary,
  backgroundColor: colorVars.colors.grey[800],
});

export const usageRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: sizeVars.x2,
  justifyContent: 'flex-start',
  alignItems: 'center',
});

export const iconsGrid = style({
  display: 'grid',
  gap: sizeVars.x2,
  gridTemplateColumns: `repeat(auto-fit, 96px)`,
  gridAutoRows: '94px',
  alignContent: 'center',
  alignItems: 'stretch',
});
