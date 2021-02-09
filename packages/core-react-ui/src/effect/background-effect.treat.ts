import { style } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    position: 'absolute',
    zIndex: -1,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  })),
};
