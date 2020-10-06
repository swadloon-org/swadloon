import { DesignSystem, createShadow } from '@newrade/core-design-system-old';
import { style, globalStyle } from 'treat';
import { theme } from '../design-system';

export const wrapper = style((theme: DesignSystem) => ({
  userSelect: `none`,
  cursor: `pointer`,
  boxShadow: theme.effects.shadows.light.css,
}));

export const candidates = style((theme: DesignSystem) => ({
  padding: `${theme.sizing.sizes.x4}`,
  borderRadius: '0px 30px 30px 30px',
  boxShadow: createShadow({
    ...theme.effects.shadows.medium,
    offsetX: 3,
    offsetY: 3,
  }).css,
}));

export const employer = style((theme: DesignSystem) => ({
  boxShadow: theme.effects.shadows.light.css,
}));

export const Default = style((theme: DesignSystem) => ({
  color: theme.colors.greyscale0Reversed,
  backgroundColor: theme.colors.primary500,
}));

export const reversed = style((theme: DesignSystem) => ({
  color: theme.colors.greyscale900,
  backgroundColor: theme.colors.greyscale0Reversed,
}));

export const none = style((theme: DesignSystem) => ({}));

export const container = style((theme: DesignSystem) => ({
  // width: '100%',
  // position: 'relative',
  // display: 'flex',
  // alignItems: 'center',
  // padding: `0 ${theme.sizing.sizes.x4}`,
  // justifyContent: 'space-between',

  selectors: {
    [` ${employer} &`]: {
      width: '100%',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      padding: `0 ${theme.sizing.sizes.x4}`,
      justifyContent: 'space-between',
    },
    [` ${candidates} &`]: {
      display: 'grid',
      gridTemplateColumns: '50px 1fr',
      gridColumnGap: '25px',
    },
  },
}));

export const heading = style((theme: DesignSystem) => ({
  // height: `calc(${theme.sizing.sizes.x2} * 5)`,
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',

  selectors: {
    [` ${employer} &`]: {
      height: `calc(${theme.sizing.sizes.x2} * 5)`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    [` ${candidates} &`]: {
      display: 'flex',
      alignItems: 'center',
    },
  },
}));
export const illustration = style((theme: DesignSystem) => ({}));

export const selected = style((theme: DesignSystem) => ({}));
export const unselected = style((theme: DesignSystem) => ({}));

globalStyle(`${Default} path`, (theme: DesignSystem) => ({
  fill: theme.colors.greyscale0Reversed,
}));
globalStyle(`${reversed} path`, (theme: DesignSystem) => ({
  fill: theme.colors.primary500,
}));

export const icon = style((theme: DesignSystem) => ({}));

globalStyle(`${Default} ${icon} path`, (theme: DesignSystem) => ({
  fill: 'currentColor',
}));
globalStyle(`${reversed} ${icon} path`, (theme: DesignSystem) => ({
  fill: theme.colors.primary500,
}));
