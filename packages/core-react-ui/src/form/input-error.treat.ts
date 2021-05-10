import { style } from 'treat';
import { Theme } from '../design-system';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colorIntents.dangerAction,
  })),
};
