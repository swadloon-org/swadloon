import { style } from '@vanilla-extract/css';

export const base = style({
  display: 'grid',
  alignContent: 'flex-start',
  justifyContent: 'flex-start',
  columnGap: sizeVars.x6,
  rowGap: sizeVars.x5,
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateAreas: `
      "logo      logo      logo      logo  "
      "block     block     block     block "
      "social    social    social    social"
      "nav       nav       nav       nav   "
      "copy      copy      copy      copy  "
      `,
  '@media': {
    [layoutCSS.media.tablet]: {
      rowGap: 40,
      gridTemplateColumns: 'repeat(6, 1fr)',
      gridTemplateAreas: `
        "logo      logo      logo      .         .      ."
        "block     block     block     .         .      ."
        "social    social    social    .         .      ."
        "nav       nav       nav       nav       nav    nav"
        ".         .         .         .         .      ."
        "copy      copy      copy      .         .      ."
        `,
    },
    [layoutCSS.media.desktopSmall]: {
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridTemplateAreas: `
        "logo      logo      logo      logo      nav    nav    nav    nav    nav     nav     nav     nav"
        "block     block     block     block     nav    nav    nav    nav    nav     nav     nav     nav"
        "social    social    social    social    nav    nav    nav    nav    nav     nav     nav     nav"
        "copy      copy      copy      copy      nav    nav    nav    nav    nav     nav     nav     nav"
        `,
    },
    [layoutCSS.media.desktopMedium]: {
      gridTemplateAreas: `
        "logo      logo      logo      logo      nav     nav     nav     nav     nav     nav     nav     nav"
        "block     block     block     block     nav     nav     nav     nav     nav     nav     nav     nav"
        "social    social    social    social    nav     nav     nav     nav     nav     nav     nav     nav"
        "copy      copy      copy      copy      nav     nav     nav     nav     nav     nav     nav     nav"
        `,
    },
  },
});

export const logo = style({
  gridArea: 'logo',
  height: 36,
});

export const block = style({
  gridArea: 'block',
});

export const socialLinks = style({
  gridArea: 'social',
  alignContent: 'flex-start',
  justifyContent: 'flex-start',
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
      gridRowEnd: 'end',
      gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 190px))',
    },
  },
});

export const copyright = style({
  gridArea: 'copy',
  textAlign: 'left',
  justifyContent: 'flex-start',
  color: colorVars.colors.grey[600],
});
