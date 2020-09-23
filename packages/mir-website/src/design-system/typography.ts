import {
  createTextStyle,
  Headings,
  HEADING_LEVEL,
  LABEL,
  Labels,
  PARAGRAPH,
  Paragraphs,
  Typography,
  VIEWPORT,
} from '@newrade/core-design-system';
import { fonts } from './fonts';
import { sizing, BASE_FONT_SIZE } from './sizing';

if (!fonts.SANS) {
  throw new Error('Missing font SANS');
}

if (!fonts.SANS_ALTERNATE) {
  throw new Error('Missing font SANS');
}

const mobileHeadings: Headings = {
  [HEADING_LEVEL.h1]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 700,
    capHeight: sizing.sizingSteps.mobile.x5,
    lineGap: 28,
  }),
  [HEADING_LEVEL.h2]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 700,
    capHeight: sizing.sizingSteps.mobile.x4,
    lineGap: 19,
  }),
  [HEADING_LEVEL.h3]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 700,
    letterSpacing: '3%',
    capHeight: sizing.sizingSteps.mobile.x3,
    lineGap: 14,
  }),
  [HEADING_LEVEL.h4]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 700,
    letterSpacing: '3%',
    capHeight: sizing.sizingSteps.mobile.x2,
    lineGap: 10,
  }),
};

const mobileParagraphs: Paragraphs = {
  [PARAGRAPH.large]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS_ALTERNATE,
    fontFamily: 'Open Sans',
    fontWeight: 400,
    letterSpacing: '1%',
    capHeight: sizing.sizingSteps.mobile.x3,
    lineGap: 19,
  }),
  [PARAGRAPH.medium]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS_ALTERNATE,
    fontFamily: 'Open Sans',
    fontWeight: 400,
    letterSpacing: '2%',
    capHeight: sizing.sizingSteps.mobile.x2,
    lineGap: 16,
  }),
  [PARAGRAPH.small]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS_ALTERNATE,
    fontFamily: 'Open Sans',
    fontWeight: 400,
    letterSpacing: '3%',
    capHeight: sizing.sizingSteps.mobile.x1,
    lineGap: 12,
  }),
  [PARAGRAPH.xSmall]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS_ALTERNATE,
    fontFamily: 'Open Sans',
    fontWeight: 400,
    letterSpacing: '3%',
    capHeight: sizing.sizingSteps.mobile.x0,
    lineGap: 8,
  }),
};

const mobileLabels: Labels = {
  [LABEL.mediumBoldUppercase]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 700,
    letterSpacing: '12%',
    textTransform: 'uppercase',
    capHeight: sizing.sizingSteps.mobile.x2,
    lineGap: 12,
  }),
  [LABEL.mediumUppercase]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 400,
    letterSpacing: '12%',
    textTransform: 'uppercase',
    capHeight: sizing.sizingSteps.mobile.x2,
    lineGap: 12,
  }),
  [LABEL.mediumBold]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS,
    letterSpacing: '6%',
    fontFamily: 'Montserrat',
    fontWeight: 700,
    capHeight: sizing.sizingSteps.mobile.x2,
    lineGap: 12,
  }),
  [LABEL.mediumRegular]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS,
    letterSpacing: '6%',
    fontFamily: 'Montserrat',
    fontWeight: 400,
    capHeight: sizing.sizingSteps.mobile.x2,
    lineGap: 12,
  }),
  [LABEL.smallBoldUppercase]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 700,
    letterSpacing: '12%',
    textTransform: 'uppercase',
    capHeight: sizing.sizingSteps.mobile.x1,
    lineGap: 8,
  }),
  [LABEL.smallUppercase]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 400,
    letterSpacing: '12%',
    textTransform: 'uppercase',
    capHeight: sizing.sizingSteps.mobile.x1,
    lineGap: 8,
  }),
  [LABEL.smallBold]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 700,
    letterSpacing: '6%',
    capHeight: sizing.sizingSteps.mobile.x1,
    lineGap: 8,
  }),
  [LABEL.smallRegular]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 400,
    letterSpacing: '6%',
    capHeight: sizing.sizingSteps.mobile.x1,
    lineGap: 8,
  }),
  [LABEL.xSmallBoldUppercase]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 700,
    letterSpacing: '12%',
    textTransform: 'uppercase',
    capHeight: sizing.sizingSteps.mobile.x0,
    lineGap: 8,
  }),
  [LABEL.xSmallUppercase]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 400,
    letterSpacing: '12%',
    textTransform: 'uppercase',
    capHeight: sizing.sizingSteps.mobile.x0,
    lineGap: 8,
  }),
  [LABEL.xSmallBold]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 700,
    letterSpacing: '6%',
    capHeight: sizing.sizingSteps.mobile.x0,
    lineGap: 8,
  }),
  [LABEL.xSmallRegular]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 400,
    letterSpacing: '6%',
    capHeight: sizing.sizingSteps.mobile.x0,
    lineGap: 8,
  }),
};

const desktopHeadings: Headings = {
  [HEADING_LEVEL.h1]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 700,
    letterSpacing: '3%',
    capHeight: sizing.sizingSteps.desktop.x5,
    lineGap: 21,
  }),
  [HEADING_LEVEL.h2]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 700,
    letterSpacing: '3%',
    capHeight: sizing.sizingSteps.desktop.x4,
    lineGap: 19,
  }),
  [HEADING_LEVEL.h3]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 700,
    letterSpacing: '3%',
    capHeight: sizing.sizingSteps.desktop.x3,
    lineGap: 10,
  }),
  [HEADING_LEVEL.h4]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 700,
    letterSpacing: '3%',
    capHeight: sizing.sizingSteps.desktop.x1,
    lineGap: 8,
  }),
};

const desktopParagraphs: Paragraphs = {
  [PARAGRAPH.large]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS_ALTERNATE,
    fontFamily: 'Open Sans',
    fontWeight: 400,
    letterSpacing: '1%',
    capHeight: sizing.sizingSteps.desktop.x3,
    lineGap: 25,
  }),
  [PARAGRAPH.medium]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS_ALTERNATE,
    fontFamily: 'Open Sans',
    fontWeight: 400,
    letterSpacing: '2%',
    capHeight: sizing.sizingSteps.desktop.x2,
    lineGap: 14,
  }),
  [PARAGRAPH.small]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS_ALTERNATE,
    fontFamily: 'Open Sans',
    fontWeight: 400,
    letterSpacing: '3%',
    capHeight: sizing.sizingSteps.desktop.x1,
    lineGap: 11,
  }),
  [PARAGRAPH.xSmall]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS_ALTERNATE,
    fontFamily: 'Open Sans',
    fontWeight: 400,
    letterSpacing: '3%',
    capHeight: sizing.sizingSteps.desktop.x0,
    lineGap: 8,
  }),
};

const desktopLabels: Labels = {
  [LABEL.mediumBoldUppercase]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 700,
    letterSpacing: '12%',
    textTransform: 'uppercase',
    capHeight: sizing.sizingSteps.desktop.x2,
    lineGap: 12,
  }),
  [LABEL.mediumUppercase]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 400,
    letterSpacing: '12%',
    textTransform: 'uppercase',
    capHeight: sizing.sizingSteps.desktop.x2,
    lineGap: 12,
  }),
  [LABEL.mediumBold]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 700,
    letterSpacing: '6%',
    capHeight: sizing.sizingSteps.desktop.x2,
    lineGap: 12,
  }),
  [LABEL.mediumRegular]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 400,
    letterSpacing: '6%',
    capHeight: sizing.sizingSteps.desktop.x2,
    lineGap: 12,
  }),
  [LABEL.smallBoldUppercase]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 700,
    letterSpacing: '12%',
    textTransform: 'uppercase',
    capHeight: sizing.sizingSteps.desktop.x1,
    lineGap: 8,
  }),
  [LABEL.smallUppercase]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 400,
    letterSpacing: '12%',
    textTransform: 'uppercase',
    capHeight: sizing.sizingSteps.desktop.x1,
    lineGap: 8,
  }),
  [LABEL.smallBold]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 700,
    letterSpacing: '6%',
    capHeight: sizing.sizingSteps.desktop.x1,
    lineGap: 8,
  }),
  [LABEL.smallRegular]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 400,
    letterSpacing: '6%',
    capHeight: sizing.sizingSteps.desktop.x1,
    lineGap: 8,
  }),
  [LABEL.xSmallBoldUppercase]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 700,
    letterSpacing: '12%',
    textTransform: 'uppercase',
    capHeight: sizing.sizingSteps.desktop.x0,
    lineGap: 8,
  }),
  [LABEL.xSmallUppercase]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 400,
    letterSpacing: '12%',
    textTransform: 'uppercase',
    capHeight: sizing.sizingSteps.desktop.x0,
    lineGap: 8,
  }),
  [LABEL.xSmallBold]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 700,
    letterSpacing: '6%',
    capHeight: sizing.sizingSteps.desktop.x0,
    lineGap: 8,
  }),
  [LABEL.xSmallRegular]: createTextStyle({
    baseFontSize: BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 400,
    letterSpacing: '6%',
    capHeight: sizing.sizingSteps.desktop.x0,
    lineGap: 8,
  }),
};

export const typography: Typography = {
  fonts,
  headings: {
    [VIEWPORT.mobile]: mobileHeadings,
    [VIEWPORT.tablet]: desktopHeadings,
    [VIEWPORT.desktop]: desktopHeadings,
  },
  paragraphs: {
    [VIEWPORT.mobile]: mobileParagraphs,
    [VIEWPORT.tablet]: desktopParagraphs,
    [VIEWPORT.desktop]: desktopParagraphs,
  },
  labels: {
    [VIEWPORT.mobile]: mobileLabels,
    [VIEWPORT.tablet]: desktopLabels,
    [VIEWPORT.desktop]: desktopLabels,
  },
};
