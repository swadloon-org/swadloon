import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    backgroundColor: '#FFFFFF',
    width: '100%',
  })),
  grid: style(({ theme, cssTheme }: Theme) => ({
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridAutoFlow: 'dense',

    '@media': {
      [cssTheme.layout.media.tablet]: {
        gridTemplateColumns: '375px 1fr',
      },
      [cssTheme.layout.media.desktopSmall]: {
        display: 'grid',
        gridAutoFlow: 'dense',
        gridTemplateColumns: '375px 1fr',
        gridColumnGap: cssTheme.sizing.var.x7,
      },
    },
  })),
  imagePreview: style(({ theme, cssTheme }: Theme) => ({
    width: '375px',
    height: '488px',
  })),
  containerInfo: style(({ theme, cssTheme }: Theme) => ({})),
  contentMarkdown: style(({ theme, cssTheme }: Theme) => ({})),
};
