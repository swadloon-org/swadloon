import { style, globalStyle } from 'treat';
import { Theme } from '../../design-system/css-design-system';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    userSelect: 'text',
  })),
};

globalStyle(`${styles.wrapper} summary + *`, ({ theme, cssTheme }: Theme) => ({
  marginTop: `${cssTheme.sizing.var.x3}`,
}));

globalStyle(`${styles.wrapper} > *:last-child`, ({ theme, cssTheme }: Theme) => ({
  marginBottom: `${cssTheme.sizing.var.x5}`,
}));
