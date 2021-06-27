import { HEADING } from '@newrade/core-design-system';
import { style } from 'treat';
import { Theme } from '../design-system';
import { getCSSTextStyles } from '../utilities/text.utilities';

export const styles: { wrapper: string } & { [key in HEADING]: string } = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    userSelect: 'text',
  })),

  h1: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.headings.mobile.h1),
    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSTextStyles(cssTheme.typography.headings.tablet.h1),
      },
      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSTextStyles(cssTheme.typography.headings.desktop.h1),
      },
    },
  })),
  h2: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.headings.mobile.h2),

    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSTextStyles(cssTheme.typography.headings.tablet.h2),
      },
      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSTextStyles(cssTheme.typography.headings.desktop.h2),
      },
    },
  })),
  h3: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.headings.mobile.h3),

    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSTextStyles(cssTheme.typography.headings.tablet.h3),
      },
      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSTextStyles(cssTheme.typography.headings.desktop.h3),
      },
    },
  })),
  h4: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.headings.mobile.h4),

    '@media': {
      [cssTheme.layout.media.tablet]: {
        ...getCSSTextStyles(cssTheme.typography.headings.tablet.h4),
      },
      [cssTheme.layout.media.desktopSmall]: {
        ...getCSSTextStyles(cssTheme.typography.headings.desktop.h4),
      },
    },
  })),
};

// globalStyle(`${styles.wrapper}::before`, ({ theme, cssTheme }: Theme) => ({
//   content: '" "',
//   display: 'block',
//   height: cssTheme.layout.navbarHeight.mobile,
//   marginTop: `-${cssTheme.layout.navbarHeight.mobile}`,
//   visibility: 'hidden',

//   '@media': {
//     [cssTheme.layout.media.tablet]: {
//       height: cssTheme.layout.navbarHeight.tablet,
//       marginTop: `-${cssTheme.layout.navbarHeight.tablet}`,
//     },
//     [cssTheme.layout.media.desktopSmall]: {
//       height: cssTheme.layout.navbarHeight.desktop,
//       marginTop: `-${cssTheme.layout.navbarHeight.desktop}`,
//     },
//   },
// }));
