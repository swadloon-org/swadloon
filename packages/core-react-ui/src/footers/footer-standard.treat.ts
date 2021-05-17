import { style } from 'treat';
import { Theme } from '../design-system';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    display: 'grid',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    padding: cssTheme.sizing.var.x5,
    backgroundColor: cssTheme.colors.colorIntents.background1,
  })),
  links: style(({ theme, cssTheme }: Theme) => ({
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
  })),
  copyright: style(({ cssTheme, theme }: Theme) => ({
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    color: cssTheme.colors.colors.grey[600],
  })),
  info: style(({ theme, cssTheme }: Theme) => ({
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
  })),
};
