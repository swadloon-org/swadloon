import { styleMap } from 'treat';
import { Theme } from '../../design-system/css-design-system';

//  Todo - transform to style Map

export const styles = styleMap(({ theme, cssTheme }: Theme) => ({
  t1: {
    fontFamily: cssTheme.typography.titles.mobile.t1.fontFamily,
  },
}));
