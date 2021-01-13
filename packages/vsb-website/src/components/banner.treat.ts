import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    height: `800px`,
    width: `100%`,
    color: cssTheme.colors.colorIntents.primaryReversed,
    textShadow: `0px 2px 17px rgba(0, 0, 0, 0.04)`,
  })),
  container: style(({ theme, cssTheme }: Theme) => ({
    width: `100%`,
    height: `100%`,
    display: 'grid',
    alignContent: 'center',
  })),
};
