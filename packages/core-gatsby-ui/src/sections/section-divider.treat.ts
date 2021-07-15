import { Theme } from '@newrade/core-react-ui/src/design-system';
import { style } from 'treat';

export const styles = {
  left: style(({ theme, cssTheme }: Theme) => ({
    width: `100%`,
    padding: `${cssTheme.sizing.var.x7} ${cssTheme.layout.var.contentMargins}`,
    maxWidth: '100%',
    justifySelf: 'flex-end',
    '@media': {
      [cssTheme.layout.media.tablet]: {
        maxWidth: '80ch',
        padding: `${cssTheme.sizing.var.x7} ${cssTheme.layout.var.contentMargins}`,
      },
    },
  })),
  right: style(({ theme, cssTheme }: Theme) => ({
    width: `100%`,
    height: `100%`,
    minHeight: `50vh`,
    maxWidth: '100%',
    '@media': {
      [cssTheme.layout.media.tablet]: {
        width: '50vw',
      },
    },
  })),
};
