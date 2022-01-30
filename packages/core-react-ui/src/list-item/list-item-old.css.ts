// import { style } from '@vanilla-extract/css';

// import { colorVars, layoutCSS } from '../theme';
// import { getCSSSizeTextStyles, getCSSTextStyles } from '../utilities-theme/text.utilities';

// const iconWidthNumber = `1.4`;
// const iconWidth = `1.4em`;
// const iconMargin = `1em`;

// /**
//  * States
//  */
// export const wrapper = style({
//   position: 'relative',
//   maxWidth: `80ch`,
//   outline: 'none',
//   width: 'fit-content',
//   userSelect: 'text',
//   flexWrap: 'nowrap',
//   display: 'flex',
// });

// export const iconWrapper = style({
//   display: 'inline-block',
// });

// export const textWrapperIcon = style({
//   display: 'flex',
//   position: 'relative',

//   left: `calc(${iconWidth} + ${iconMargin})`,
// });

// export const content = style({
//   display: 'flex',
//   flexDirection: 'column',
//   position: 'relative',
//   paddingRight: `calc((${iconWidth} + ${iconMargin}))`,
// });

// /**
//  * Variants
//  */
// export const bullet = style({
//   marginRight: '0.5em',
// });

// export const number = style({
//   marginRight: '0.5em',
// });

// /**
//  * Icon
//  */
// export const icon = style({
//   position: 'absolute',
//   left: `calc(-1 * (${iconWidth} + ${iconMargin}) / ${iconWidthNumber})`,
//   top: `-0.3em`,
//   fontSize: `${iconWidth}`,
//   display: 'inline-block',
//   verticalAlign: 'middle',
// });

// export const bulletIcon = style({
//   position: 'absolute',
//   left: `calc(-1 * (${1}em + ${iconMargin}))`,
//   top: `-0.3em`,
//   display: 'inline-block',
//   verticalAlign: 'middle',
// });

// /**
//  * Sizes (from link)
//  */
// export const large = style({
//   ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.large, {
//     stylePseudoElements: {
//       display: 'inline-block',
//     },
//   }),
//   '@media': {
//     [layoutCSS.media.tablet]: {
//       ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.large, {
//         stylePseudoElements: {
//           display: 'inline-block',
//         },
//       }),
//     },
//     [layoutCSS.media.desktopSmall]: {
//       ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.large, {
//         stylePseudoElements: {
//           display: 'inline-block',
//         },
//       }),
//     },
//   },
// });

// export const medium = style({
//   ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.medium, {
//     stylePseudoElements: {
//       display: 'inline-block',
//     },
//   }),
//   '@media': {
//     [layoutCSS.media.tablet]: {
//       ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.medium, {
//         stylePseudoElements: {
//           display: 'inline-block',
//         },
//       }),
//     },
//     [layoutCSS.media.desktopSmall]: {
//       ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.medium, {
//         stylePseudoElements: {
//           display: 'inline-block',
//         },
//       }),
//     },
//   },
// });

// export const small = style({
//   ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.small, {
//     stylePseudoElements: {
//       display: 'inline-block',
//     },
//   }),
//   '@media': {
//     [layoutCSS.media.tablet]: {
//       ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.small, {
//         stylePseudoElements: {
//           display: 'inline-block',
//         },
//       }),
//     },
//     [layoutCSS.media.desktopSmall]: {
//       ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.small, {
//         stylePseudoElements: {
//           display: 'inline-block',
//         },
//       }),
//     },
//   },
// });

// export const xSmall = style({
//   ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.xSmall, {
//     stylePseudoElements: {
//       display: 'inline-block',
//     },
//   }),
//   '@media': {
//     [layoutCSS.media.tablet]: {
//       ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.tablet.xSmall, {
//         stylePseudoElements: {
//           display: 'inline-block',
//         },
//       }),
//     },
//     [layoutCSS.media.desktopSmall]: {
//       ...getCSSSizeTextStyles(cssTheme.typography.paragraphs.desktop.xSmall, {
//         stylePseudoElements: {
//           display: 'inline-block',
//         },
//       }),
//     },
//   },
// });

// /**
//  * Text styles
//  */
// export const primary = style({
//   color: colorVars.colorIntents.primaryText,
// });

// export const secondary = style({
//   color: colorVars.colorIntents.secondaryText,
// });

// export const tertiary = style({
//   color: colorVars.colorIntents.tertiaryText,
// });
