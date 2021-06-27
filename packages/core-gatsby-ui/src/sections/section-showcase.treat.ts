import { Theme } from '@newrade/core-react-ui/lib/design-system';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    width: `100%`,
  })),
  gridSwitch: style(({ theme, cssTheme }: Theme) => ({
    display: 'grid',
    gridTemplateColumns: '1fr',
    width: `100%`,

    '@media': {
      [cssTheme.layout.media.tablet]: {
        gridTemplateColumns: '1fr 1fr',
      },
      [cssTheme.layout.media.desktopSmall]: {
        gridTemplateColumns: '1fr 1fr',
      },
    },
  })),
  leftBlock: style(({ theme, cssTheme }: Theme) => ({
    position: 'relative',
  })),
  leftInnerBlock: style(({ theme, cssTheme }: Theme) => ({
    maxWidth: `calc(${cssTheme.layout.contentWidth.desktopMaxWidth} / 2)`,
    marginLeft: 'auto',
  })),
  rightBlock: style(({ theme, cssTheme }: Theme) => ({
    position: 'relative',
  })),
  rightInnerBlock: style(({ theme, cssTheme }: Theme) => ({
    maxWidth: `calc(${cssTheme.layout.contentWidth.desktopMaxWidth} / 2)`,
  })),
};
