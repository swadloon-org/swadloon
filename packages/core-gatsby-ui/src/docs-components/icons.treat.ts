import { Theme } from '@newrade/core-react-ui/lib/design-system';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    alignItems: 'flex-start',
    paddingTop: cssTheme.sizing.var.x3,
  })),
  inputWrapper: style(({ theme, cssTheme }: Theme) => ({
    width: 'auto',
    minWidth: '272px',
  })),
  icon: style(({ theme, cssTheme }: Theme) => ({
    marginBottom: cssTheme.sizing.var.x2,
    padding: cssTheme.sizing.var.x3,

    boxShadow: cssTheme.effects.boxShadows.light,
  })),
};
