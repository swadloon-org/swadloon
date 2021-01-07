import { style } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    marginTop: `120px`,
    marginBottom: `50vh`,
  })),
};
