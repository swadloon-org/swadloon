import { getCSSColor, Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    width: '100%',
  })),
  status: style(({ theme, cssTheme }: Theme) => ({
    justifySelf: 'flex-start',
    borderRadius: `6px`,
    backgroundColor: getCSSColor({
      ...theme.colors.colorIntents.primary,
      a: 5,
    }),
    padding: cssTheme.sizing.var.x3,
  })),
  statusOnline: style(({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colorIntents.successAction,
  })),
  statusOffline: style(({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colorIntents.warningAction,
  })),
  statusDot: style(({ theme, cssTheme }: Theme) => ({
    width: 10,
    height: 10,
    borderRadius: `50%`,
    backgroundColor: `currentColor`,
    boxShadow: `0 0 2px 0 currentColor`,
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
