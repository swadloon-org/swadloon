import { style } from '@vanilla-extract/css';

export const base = style({});

export const content = style({
  display: 'grid',
  rowGap: sizeVars.x5,
  gridTemplateColumns: `1fr`,
  gridAutoFlow: 'row',
  alignContent: 'flex-start',
  justifyContent: 'flex-start',
  justifyItems: 'flex-start',
  alignItems: 'flex-start',
});

export const header = style({
  display: 'grid',
  width: `100%`,
  gridTemplateColumns: `1fr 40px`,
  gridAutoFlow: 'row',
  gap: sizeVars.x5,
  alignContent: 'flex-start',
  justifyContent: 'flex-start',
  justifyItems: 'flex-start',
  alignItems: 'center',
  padding: `${sizeVars.x5} ${sizeVars.x4}`,
});

export const logoWrapper = style({});

export const logo = style({
  height: `40px`,
});

export const lang = style({});

export const items = style({
  display: 'grid',
  width: `100%`,
  gap: sizeVars.x5,
  gridTemplateColumns: `1fr`,
  gridAutoFlow: 'row',
});

export const bottom = style({
  display: 'grid',
  width: `100%`,
  gap: sizeVars.x5,
  alignItems: 'center',
  padding: `${sizeVars.x5} ${sizeVars.x4} ${sizeVars.x6}`,
});
