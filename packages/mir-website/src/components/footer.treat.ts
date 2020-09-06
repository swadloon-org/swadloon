import { DesignSystem } from 'core-design-system';
import { globalStyle, style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  padding: `${theme.sizing.sizes.x6} ${theme.layout.contentMargins.mobile.px}`,

  backgroundColor: theme.colors.greyscale1000,
  color: theme.colors.greyscale0,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      padding: `${theme.sizing.sizes.x5} ${theme.layout.contentMargins.tablet.px}`,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {},
  },
}));

export const gridwrapper = style((theme: DesignSystem) => ({
  display: 'grid',
  gridRowGap: `${theme.sizing.sizes.x6}`,

  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridTemplateAreas:
        "'firm firm . . contact contact contact . location location location .''copyright copyright copyright copyright copyright copyright copyright copyright copyright copyright copyright copyright'",
      gridTemplateRows: 'auto',
      columnGap: '20px',
      margin: '0 auto',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      maxWidth: '1200px',
      gridTemplateAreas:
        "'firm firm . contact contact contact location location location . . .''copyright copyright copyright . . . . . . . . .'",
    },
  },
}));

export const title = style((theme: DesignSystem) => ({
  marginBottom: `${theme.sizing.sizes.x4}`,
}));

export const infoText = style((theme: DesignSystem) => ({
  selectors: {
    [`&:not(:last-child)`]: {
      marginBottom: '22px',
    },
  },
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {},
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {},
  },
}));

export const link = style((theme: DesignSystem) => ({
  selectors: {
    [` ${infoText} &`]: {
      marginLeft: '3px',
    },
  },
}));

export const contact = style((theme: DesignSystem) => ({
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      gridArea: 'contact',
    },
  },
}));

export const location = style((theme: DesignSystem) => ({
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      gridArea: 'location',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {},
  },
}));

export const firm = style((theme: DesignSystem) => ({
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      gridArea: 'firm',
    },
  },
}));

export const copyright = style((theme: DesignSystem) => ({
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      gridArea: 'copyright',
    },
  },
}));

globalStyle(`${firm} img`, (theme: DesignSystem) => ({
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      width: '150px',
    },
  },
}));
