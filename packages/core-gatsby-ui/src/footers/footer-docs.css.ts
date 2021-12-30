import { style } from '@vanilla-extract/css';

import { colorVars, layoutCSS, sizeVars } from '@newrade/core-react-ui/theme';

export const base = style({
  display: 'grid',
  alignContent: 'flex-start',
  justifyContent: 'flex-start',
  columnGap: sizeVars.x5,
  rowGap: sizeVars.x5,
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateAreas: `
      "nav        nav        nav       nav       "
      "logo       logo       logo      logo      "
      "social     social     social    social    "
      "copy       copy       copy      copy      "
      `,
  '@media': {
    [layoutCSS.media.tablet]: {
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
});

export const logoWrapper = style({
  display: 'grid',
  gridArea: 'logo',
  alignContent: 'center',
  justifyContent: 'center',
  '@media': {
    [layoutCSS.media.tablet]: {
      alignContent: 'flex-start',
      justifyContent: 'flex-start',
    },
  },
});

export const logo = style({
  height: 28,
});

export const block = style({
  gridArea: 'block',
});

// some adblockers will block classes starting with social_ so
// using profile instead
export const profileLinks = style({
  gridArea: 'social',
  alignContent: 'center',
  justifyContent: 'center',
  '@media': {
    [layoutCSS.media.tablet]: {
      display: 'none',
    },
  },
});

export const profileLinksDesktop = style({
  display: 'none',
  gridArea: 'social',
  '@media': {
    [layoutCSS.media.tablet]: {
      display: 'flex',

      alignContent: 'flex-start',
      justifyContent: 'flex-start',
    },
  },
});

export const navLinks = style({
  gridArea: 'nav',
  display: 'grid',
  gap: sizeVars.x5,
  gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 270px))',
  '@media': {
    [layoutCSS.media.desktopSmall]: {
      gap: sizeVars.x6,
      gridColumnEnd: 'end',
      gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 190px))',
    },
  },
});

export const copyright = style({
  gridArea: 'copy',
  textAlign: 'center',
  alignSelf: 'center',
  justifyContent: 'center',

  color: colorVars.colors.grey[600],

  '@media': {
    [layoutCSS.media.tablet]: {
      display: 'none',
    },
  },
});

export const copyrightDesktop = style({
  display: 'none',

  color: colorVars.colors.grey[600],

  '@media': {
    [layoutCSS.media.tablet]: {
      display: 'flex',
    },
  },
});
