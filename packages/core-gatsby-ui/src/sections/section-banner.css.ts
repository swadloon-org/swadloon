import { style } from '@vanilla-extract/css';

export const wrapper = style({
  position: 'relative',
  height: `max(80vh, 500px)`,
  width: `100%`,
  color: colorVars.colorIntents.primary,
  textShadow: cssTheme.effects.textShadows.light,
});

export const callout = style({
  height: `auto`,
});

export const background = style({
  position: 'absolute',
});

export const container = style({
  width: `100%`,
  height: `100%`,
  display: 'grid',
  alignContent: 'center',
  backgroundColor: '#94aec5',
});
