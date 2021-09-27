import { style } from 'treat';
import { Theme } from '@newrade/core-react-ui';

export const base = style(({ theme, cssTheme }: Theme) => ({
  display: 'grid',
  alignContent: 'flex-start',
  justifyContent: 'flex-start',
  columnGap: cssTheme.sizing.var.x5,
  rowGap: cssTheme.sizing.var.x5,
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateAreas: `
      "nav        nav        nav       nav       "
      "logo       logo       logo      logo      "
      "social     social     social    social    "
      "copy       copy       copy      copy      "
      `,
  '@media': {
    [cssTheme.layout.media.tablet]: {
      rowGap: 40,
      gridTemplateColumns: 'repeat(6, 1fr)',
      gridTemplateAreas: `
        "nav       nav       nav       nav       nav       nav       "
        ".         .         .         .         .         .         "
        "logo      logo      logo      .         .         .         "
        "social    social    social    social    social    social    "
        `,
    },
  },
}));

export const logoWrapper = style(({ theme, cssTheme }: Theme) => ({
  display: 'grid',
  gridArea: 'logo',
  alignContent: 'center',
  justifyContent: 'center',
  '@media': {
    [cssTheme.layout.media.tablet]: {
      alignContent: 'flex-start',
      justifyContent: 'flex-start',
    },
  },
}));

export const logo = style(({ theme, cssTheme }: Theme) => ({
  height: 28,
}));

export const block = style(({ theme, cssTheme }: Theme) => ({
  gridArea: 'block',
}));

// some adblockers will block classes starting with social_ so
// using profile instead
export const profileLinks = style(({ theme, cssTheme }: Theme) => ({
  gridArea: 'social',
  alignContent: 'center',
  justifyContent: 'center',
  '@media': {
    [cssTheme.layout.media.tablet]: {
      display: 'none',
    },
  },
}));

export const profileLinksDesktop = style(({ theme, cssTheme }: Theme) => ({
  display: 'none',
  gridArea: 'social',
  '@media': {
    [cssTheme.layout.media.tablet]: {
      display: 'flex',

      alignContent: 'flex-start',
      justifyContent: 'flex-start',
    },
  },
}));

export const navLinks = style(({ theme, cssTheme }: Theme) => ({
  gridArea: 'nav',
  display: 'grid',
  gap: cssTheme.sizing.var.x5,
  gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 270px))',
  '@media': {
    [cssTheme.layout.media.desktopSmall]: {
      gap: cssTheme.sizing.var.x6,
      gridColumnEnd: 'end',
      gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 190px))',
    },
  },
}));

export const copyright = style(({ cssTheme, theme }: Theme) => ({
  gridArea: 'copy',
  textAlign: 'center',
  alignSelf: 'center',
  justifyContent: 'center',

  color: cssTheme.colors.colors.grey[600],

  '@media': {
    [cssTheme.layout.media.tablet]: {
      display: 'none',
    },
  },
}));

export const copyrightDesktop = style(({ cssTheme, theme }: Theme) => ({
  display: 'none',

  color: cssTheme.colors.colors.grey[600],

  '@media': {
    [cssTheme.layout.media.tablet]: {
      display: 'flex',
    },
  },
}));
