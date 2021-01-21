import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    position: 'relative',
    height: `80vh`,
    width: `100%`,
    color: cssTheme.colors.colorIntents.primaryReversed,
    textShadow: cssTheme.effects.textShadows.light,
  })),
  container: style(({ theme, cssTheme }: Theme) => ({
    width: `100%`,
    height: `100%`,
    display: 'grid',
    alignContent: 'center',
    backgroundColor: '#94aec5',
  })),
  textContainer: style(({ theme, cssTheme }: Theme) => ({
    minHeight: `calc(3 * ${cssTheme.typography.titles.mobile.t1.capHeight}px + 2 * ${cssTheme.typography.titles.mobile.t1.lineGap}px)`,
    '@media': {
      [cssTheme.layout.media.tablet]: {
        minHeight: `calc(2 * ${cssTheme.typography.titles.tablet.t1.capHeight}px + ${cssTheme.typography.titles.tablet.t1.lineGap}px)`,
      },
      [cssTheme.layout.media.desktopSmall]: {
        minHeight: `calc(2 * ${cssTheme.typography.titles.desktop.t1.capHeight}px + ${cssTheme.typography.titles.desktop.t1.lineGap}px)`,
      },
    },
  })),
};
