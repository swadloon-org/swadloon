import { style } from 'treat';
import { Theme } from '@newrade/core-react-ui';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    display: 'grid',
    alignContent: 'center',
    justifyContent: 'center',
    padding: cssTheme.sizing.var.x5,

    backgroundColor: cssTheme.colors.colorIntents.background1,
  })),
  links: style(({ theme, cssTheme }: Theme) => ({
    alignContent: 'center',
    justifyContent: 'center',
  })),
  copyright: style(({ cssTheme, theme }: Theme) => ({
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    color: cssTheme.colors.colors.grey[600],
  })),
};
