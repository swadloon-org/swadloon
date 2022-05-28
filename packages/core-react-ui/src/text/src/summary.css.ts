import { globalStyle, style } from '@vanilla-extract/css';

import { colorVars, sizeVars } from '../default-theme/src/theme';

const iconSize = `32px`;

export const wrapper = style({
  display: `flex`,
  position: `relative`,
  userSelect: `none`,

  listStyleImage: `none`,
  padding: `${sizeVars.x4} 0`,
  paddingRight: `2em`,
  borderTop: `1px solid ${colorVars.colors.grey[50]}`,

  cursor: `pointer`,

  ':focus': {
    outline: `none`,
  },

  color: colorVars.colorIntents.secondaryText,

  selectors: {
    [`[open] > &`]: {
      color: colorVars.colorIntents.primaryText,
    },
  },
});

export const icon = style({
  position: `absolute`,
  right: sizeVars.x1,
  width: iconSize,
  height: iconSize,
  top: `calc(50% - ${iconSize} / 2)`,
  lineHeight: `1em`,
});

export const iconOpened = style({
  selectors: {
    [`[open] &`]: {
      visibility: 'visible',
    },
  },
});

export const iconClosed = style({
  selectors: {
    [`[open] &`]: {
      visibility: 'hidden',
    },
  },
});

export const animate = style({
  '::before': {
    transform: `rotate(90deg)`,
    transition: `transform 0.2s ease-in-out`,
  },
  selectors: {
    [`[open] > &::before`]: {
      transform: `rotate(0deg)`,
    },
  },
});

globalStyle(`${icon} svg path`, {
  stroke: 'currentColor',
  strokeWidth: 32,
});

//
// hide the default arrow html arrow
//
globalStyle(`${wrapper}::-webkit-details-marker`, {
  display: `none`,
  background: `none`,
  color: `transparent`,
});
