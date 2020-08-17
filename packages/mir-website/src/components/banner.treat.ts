import { DesignSystem } from 'core-design-system';
import { style } from 'treat';

const baseWidth100 = {
  width: `100%`,
};

export const containerBox = style((theme: DesignSystem) => ({
  position: `relative`,
  display: `grid`,
  gridTemplateColumns: `1fr`,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      position: `relative`,
      gridTemplateColumns: `${theme.layout.contentMargins.TABLET.valuePx} 1fr `,
      // gridTemplateAreas: `. mid .` ,
    },
  },
}));

export const wrapper = style((theme: DesignSystem) => ({
  //   padding: `$sizing-x6 $margin-content`,
  minHeight: `416px`,
  display: `flex`,
  alignItems: `center`,
  backgroundSize: `cover`,
  backgroundPositionY: `center`,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      gridArea: `mid`,
      zIndex: 1,
      minHeight: `477px`,
      margin: `0 0 0 ${theme.layout.contentMargins.TABLET.valuePx}`,
    },
  },
}));

export const subtitle = style((theme: DesignSystem) => ({
  //   marginBottom: `$sizing-x3`,
  color: theme.colors.greyscale0,
}));

export const title = style((theme: DesignSystem) => ({
  //   margin: `$sizing-x3 0`,
  color: theme.colors.greyscale0,
}));

export const bottomBar = style((theme: DesignSystem) => ({
  ...baseWidth100,
}));

export const rect = style((theme: DesignSystem) => ({
  [`${bottomBar} &`]: {
    ...baseWidth100,
  },
}));

export const content = style((theme: DesignSystem) => ({
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      width: `60%`,
    },
  },
}));

export const blackbox = style((theme: DesignSystem) => ({
  position: `absolute`,
  display: `none`,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      position: `absolute`,
      display: `block`,
      bottom: `0`,
      zIndex: -1,
      height: `55%`,
      width: `100%`,
      backgroundColor: theme.colors.greyscale100,
    },
  },
}));

export const bluebox = style((theme: DesignSystem) => ({
  position: `absolute`,
  display: `none`,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      position: `absolute`,
      display: `block`,
      top: `0`,
      zIndex: -1,
      width: `100%`,
      height: `45%`,
      backgroundColor: theme.colors.primary500,
    },
  },
}));
