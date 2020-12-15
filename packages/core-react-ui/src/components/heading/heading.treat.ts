import { style } from 'treat';
import { Theme } from '../../design-system/css-design-system';

//  Todo - transform to style Map

export const styles = {
  t1: style(({ theme, cssTheme }: Theme) => ({
    fontWeight: cssTheme.typography.titles.mobile.t1.fontWeight,
    fontFamily: cssTheme.typography.titles.mobile.t1.fontFamily,
    ...cssTheme.typography.titles.mobile.t1.capsize,
  })),
};
