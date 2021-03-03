import { getCSSColor, Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    width: '100%',
  })),
  error: style(({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colorIntents.dangerText,
    justifySelf: 'flex-start',
    borderRadius: `6px`,
    backgroundColor: getCSSColor({
      ...theme.colors.colorIntents.dangerAction,
      a: 5,
    }),
    padding: cssTheme.sizing.var.x3,
  })),
  errorIcon: style(({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colorIntents.dangerAction,
  })),
  success: style(({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colorIntents.successText,
    justifySelf: 'flex-start',
    borderRadius: `6px`,
    backgroundColor: getCSSColor({
      ...theme.colors.colorIntents.successAction,
      a: 5,
    }),
    padding: cssTheme.sizing.var.x3,
  })),
  successIcon: style(({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colorIntents.successAction,
  })),
};
