import {
  createTextStyle,
  HEADING_LEVEL,
  Typography,
  VIEWPORT,
  Headings,
  Paragraphs,
  PARAGRAPH,
  Labels,
  LABEL,
} from 'core-design-system';
import { DEFAULT_BASE_FONT_SIZE } from 'core-react-ui';
import { fonts } from './fonts';
import { sizing } from './sizing';

const mobileHeadings: Headings = {
  [HEADING_LEVEL.H1]: createTextStyle({
    baseFontSize: DEFAULT_BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 700,
    capHeight: sizing.sizingSteps.MOBILE.X5,
    lineGap: 16,
  }),
  [HEADING_LEVEL.H2]: createTextStyle({
    baseFontSize: DEFAULT_BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 700,
    capHeight: sizing.sizingSteps.MOBILE.X4,
    lineGap: 12,
  }),
  [HEADING_LEVEL.H3]: createTextStyle({
    baseFontSize: DEFAULT_BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 700,
    capHeight: sizing.sizingSteps.MOBILE.X3,
    lineGap: 10,
  }),
  [HEADING_LEVEL.H4]: createTextStyle({
    baseFontSize: DEFAULT_BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 700,
    capHeight: sizing.sizingSteps.MOBILE.X2,
    lineGap: 8,
  }),
};

const mobileParagraphs: Paragraphs = {
  [PARAGRAPH.LARGE]: createTextStyle({
    baseFontSize: DEFAULT_BASE_FONT_SIZE,
    font: fonts.SANS_ALTERNATE,
    fontFamily: 'Open Sans',
    fontWeight: 400,
    capHeight: sizing.sizingSteps.MOBILE.X3,
    lineGap: 22,
  }),
  [PARAGRAPH.MEDIUM]: createTextStyle({
    baseFontSize: DEFAULT_BASE_FONT_SIZE,
    font: fonts.SANS_ALTERNATE,
    fontFamily: 'Open Sans',
    fontWeight: 400,
    capHeight: sizing.sizingSteps.MOBILE.X2,
    lineGap: 16,
  }),
  [PARAGRAPH.SMALL]: createTextStyle({
    baseFontSize: DEFAULT_BASE_FONT_SIZE,
    font: fonts.SANS_ALTERNATE,
    fontFamily: 'Open Sans',
    fontWeight: 400,
    capHeight: sizing.sizingSteps.MOBILE.X1,
    lineGap: 12,
  }),
};

const mobileLabels: Labels = {
  [LABEL.MEDIUM_BOLD_UPPERCASE]: createTextStyle({
    baseFontSize: DEFAULT_BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 700,
    textTransform: 'uppercase',
    capHeight: sizing.sizingSteps.MOBILE.X2,
    lineGap: 12,
  }),
  [LABEL.MEDIUM_UPPERCASE]: createTextStyle({
    baseFontSize: DEFAULT_BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 400,
    textTransform: 'uppercase',
    capHeight: sizing.sizingSteps.MOBILE.X2,
    lineGap: 12,
  }),
  [LABEL.MEDIUM]: createTextStyle({
    baseFontSize: DEFAULT_BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 700,
    capHeight: sizing.sizingSteps.MOBILE.X2,
    lineGap: 12,
  }),
  [LABEL.SMALL_BOLD_UPPERCASE]: createTextStyle({
    baseFontSize: DEFAULT_BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 700,
    textTransform: 'uppercase',
    capHeight: sizing.sizingSteps.MOBILE.X1,
    lineGap: 8,
  }),
  [LABEL.SMALL_UPPERCASE]: createTextStyle({
    baseFontSize: DEFAULT_BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 400,
    textTransform: 'uppercase',
    capHeight: sizing.sizingSteps.MOBILE.X1,
    lineGap: 8,
  }),
  [LABEL.SMALL]: createTextStyle({
    baseFontSize: DEFAULT_BASE_FONT_SIZE,
    font: fonts.SANS,
    fontFamily: 'Montserrat',
    fontWeight: 700,
    capHeight: sizing.sizingSteps.MOBILE.X1,
    lineGap: 8,
  }),
};

export const typography: Typography = {
  fonts,
  headings: {
    [VIEWPORT.MOBILE]: mobileHeadings,
    [VIEWPORT.TABLET]: mobileHeadings,
    [VIEWPORT.DESKTOP]: mobileHeadings,
  },
  paragraphs: {
    [VIEWPORT.MOBILE]: mobileParagraphs,
    [VIEWPORT.TABLET]: mobileParagraphs,
    [VIEWPORT.DESKTOP]: mobileParagraphs,
  },
  labels: {
    [VIEWPORT.MOBILE]: mobileLabels,
    [VIEWPORT.TABLET]: mobileLabels,
    [VIEWPORT.DESKTOP]: mobileLabels,
  },
};
