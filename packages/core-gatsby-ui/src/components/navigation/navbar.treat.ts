import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ cssTheme, theme }: Theme) => ({
    display: `flex`,
    gap: cssTheme.sizing.sizes.desktop.x4,
    backgroundColor: cssTheme.colors.colorIntents.background0,
  })),
};
