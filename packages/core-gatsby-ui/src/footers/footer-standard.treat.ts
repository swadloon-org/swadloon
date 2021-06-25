import { style } from 'treat';
import { Theme } from '@newrade/core-react-ui/lib/design-system';

export const base = style(({ theme, cssTheme }: Theme) => ({
  display: 'grid',
  alignContent: 'flex-start',
  justifyContent: 'flex-start',
  columnGap: cssTheme.sizing.var.x6,
  rowGap: cssTheme.sizing.var.x5,
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateAreas: `
      "logo      logo      logo      logo  "
      "block     block     block     block "
      "social    social    social    social"
      "nav       nav       nav       nav   "
      "copy      copy      copy      copy  "
      `,
  '@media': {
    [cssTheme.layout.media.tablet]: {
      rowGap: 40,
      gridTemplateColumns: 'repeat(6, 1fr)',
      gridTemplateAreas: `
        "logo      logo      logo     nav    nav    nav"
        "block     block     block    nav    nav    nav"
        "social    social    social   nav    nav    nav"
        "copy      copy      copy     nav    nav    nav"
        `,
    },
    [cssTheme.layout.media.desktopSmall]: {
      gridTemplateAreas: `
        "logo      logo      logo      logo      nav    nav    nav    nav    nav     nav     nav     nav"
        "block     block     block     block     nav    nav    nav    nav    nav     nav     nav     nav"
        "social    social    social    social    nav    nav    nav    nav    nav     nav     nav     nav"
        "copy      copy      copy      copy      nav    nav    nav    nav    nav     nav     nav     nav"
        `,
    },
    [cssTheme.layout.media.desktopMedium]: {
      gridTemplateAreas: `
        "logo      logo      logo      nav     nav     nav     nav     nav     nav     nav     nav     nav"
        "block     block     block     nav     nav     nav     nav     nav     nav     nav     nav     nav"
        "social    social    social    nav     nav     nav     nav     nav     nav     nav     nav     nav"
        "copy      copy      copy      nav     nav     nav     nav     nav     nav     nav     nav     nav"
        `,
    },
  },
}));

export const logo = style(({ theme, cssTheme }: Theme) => ({
  gridArea: 'logo',
  height: 36,
}));

export const block = style(({ theme, cssTheme }: Theme) => ({
  gridArea: 'block',
}));

export const socialLinks = style(({ theme, cssTheme }: Theme) => ({
  gridArea: 'social',
  alignContent: 'flex-start',
  justifyContent: 'flex-start',
}));

export const navLinks = style(({ theme, cssTheme }: Theme) => ({
  gridArea: 'nav',
  display: 'grid',
  gap: cssTheme.sizing.var.x5,
  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 220px))',
  '@media': {
    [cssTheme.layout.media.tablet]: {
      gridColumnEnd: 'end',
      gridRowEnd: 'end',
    },
  },
}));

export const copyright = style(({ cssTheme, theme }: Theme) => ({
  gridArea: 'copy',
  textAlign: 'left',
  justifyContent: 'flex-start',
  color: cssTheme.colors.colors.grey[600],
}));
