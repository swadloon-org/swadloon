import { sizingVars } from '@newrade/core-react-ui/theme';
import { style } from '@vanilla-extract/css';

export const content = style({
  // see docs layout
  gridArea: 'main-docs-content',
  gridRowEnd: 'end',

  // needed for anchor to be able to scroll to links
  // that are too close to the bottom of the page
  paddingBottom: `40vh`,

  // prevent the content to overflow the parent
  overflowX: 'hidden',
});
