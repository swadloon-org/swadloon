import { Theme } from '@newrade/core-react-ui/src/design-system';
import { styleMap } from 'treat';

export const styles = styleMap(({ cssTheme, theme }: Theme) => ({
  aside: {
    position: 'fixed',
    top: 0,
    right: 0,
    backgroundColor: 'transparent',
    maxHeight: '100vh',
    minHeight: '100vh',
    padding: '1em',
  },
}));
