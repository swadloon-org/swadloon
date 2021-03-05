import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({
    position: 'relative',
    height: `max(80vh, 500px)`,
    width: `100%`,
    color: cssTheme.colors.colorIntents.primaryReversed,
    textShadow: cssTheme.effects.textShadows.light,
  })),
  background: style(({ theme, cssTheme }: Theme) => ({
    position: 'absolute',
  })),
  container: style(({ theme, cssTheme }: Theme) => ({
    width: `100%`,
    height: `100%`,
    display: 'grid',
    alignContent: 'center',
    backgroundColor: '#94aec5',
  })),
  textContainer: style(({ theme, cssTheme }: Theme) => ({})),
  icon: style(({ theme, cssTheme }: Theme) => ({
    position: 'absolute',
    left: `calc(50% - (2 * ${cssTheme.sizing.var.x3} + ${cssTheme.typography.labels.mobile.medium.capHeight}px) / 2)`,
    bottom: `calc(${cssTheme.sizing.var.x3} * 1.5)`,
  })),
};
