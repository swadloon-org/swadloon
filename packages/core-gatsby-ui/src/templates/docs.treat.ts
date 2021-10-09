import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

export const content = style(({ cssTheme, theme }: Theme) => ({
  // needed for anchor to be able to scroll to links
  // that are too close to the bottom of the page
  paddingBottom: `40vh`,

  paddingTop: cssTheme.sizing.var.x4,

  // prevent the content to overflow the parent
  overflowX: 'hidden',
}));
