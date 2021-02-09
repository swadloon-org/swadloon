import { style, globalStyle } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    userSelect: 'text',
    borderBottom: `0px solid ${cssTheme.colors.colors.grey[50]}`,
  })),
};

globalStyle(`${styles.wrapper}:last-of-type`, ({ theme, cssTheme }: Theme) => ({
  borderBottomWidth: `1px`,
}));

globalStyle(`${styles.wrapper} summary + *`, ({ theme, cssTheme }: Theme) => ({
  marginTop: `${cssTheme.sizing.var.x3}`,
}));

globalStyle(`${styles.wrapper} > *:last-child`, ({ theme, cssTheme }: Theme) => ({
  marginBottom: `${cssTheme.sizing.var.x5}`,
}));
