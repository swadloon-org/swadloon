import { DesignSystem } from '@newrade/core-design-system';
import { style } from 'treat';
import { Theme } from '../../design-system/css-design-system';

//  Todo - transform to style Map

export const t1 = style(({theme, cssTheme}: Theme) => ({
  fontSize: cssTheme.typography.titles.mobile.t1.sans?.,
}));

export const h1 = style((theme: DesignSystem) => ({
  fontSize: '33px',
}));
export const h2 = style((theme: DesignSystem) => ({}));
export const h3 = style((theme: DesignSystem) => ({}));
export const h4 = style((theme: DesignSystem) => ({}));
export const h5 = style((theme: DesignSystem) => ({}));
