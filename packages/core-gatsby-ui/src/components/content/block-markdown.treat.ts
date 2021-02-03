import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    display: 'block',
    width: '100%',
    userSelect: 'auto',
  })),
  content: style(({ theme, cssTheme }: Theme) => ({
    width: '100%',
  })),
};
