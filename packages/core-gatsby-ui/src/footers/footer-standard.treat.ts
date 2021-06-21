import { style } from 'treat';
import { Theme } from '@newrade/core-react-ui/lib/design-system';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    display: 'grid',
    gap: cssTheme.sizing.var.x4,
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
  })),
  logo: style(({ theme, cssTheme }: Theme) => ({
    height: 36,
  })),
  links: style(({ theme, cssTheme }: Theme) => ({
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
  })),
  copyright: style(({ cssTheme, theme }: Theme) => ({
    textAlign: 'left',
    justifyContent: 'flex-start',
    color: cssTheme.colors.colors.grey[600],
  })),
  info: style(({ theme, cssTheme }: Theme) => ({
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
  })),
};
