import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    position: 'relative',
    height: `min(70vh, 550px)`,
    width: `100%`,
    color: cssTheme.colors.colorIntents.primaryReversed,
    textShadow: cssTheme.effects.textShadows.light,
  })),
  container: style(({ theme, cssTheme }: Theme) => ({
    width: `100%`,
    height: `100%`,
    display: 'grid',
    alignContent: 'center',
    backgroundColor: '#94aec5',
  })),
  textContainer: style(({ theme, cssTheme }: Theme) => ({})),
};
