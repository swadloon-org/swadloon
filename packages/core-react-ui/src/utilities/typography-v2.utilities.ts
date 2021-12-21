import { FontMetrics, precomputeValues } from '@capsizecss/core';

import {
  CapsizeTextStyle,
  TextStyle,
  TextVariantStyles,
  TitlesV2,
  TypographyV2,
  VIEWPORT,
} from '@newrade/core-design-system';

import { defaultSansFont, defaultSerifFont } from '../default-theme';
import { CSSTypographyV2 } from '../design-system';

import { getCSSFonts, getCSSFontsObject } from './font.utilities';
import { createCSSTextStyle } from './text.utilities';
import { createCSSCapsizeTextStyleV2 } from './text-capsize.utilities';
import { keys } from './utilities';

/**
 * Create a typography object which properties that are compatible with CSS
 *
 * @version
 *  -v2: uses version 2 of text styles which don't include capsize styles
 */
export function getCSSTypographyV2({
  baseFontSize,
  fonts,
  titles,
  headings,
  paragraphs,
  labels,
}: TypographyV2 & { baseFontSize: number }): CSSTypographyV2 {
  const titlesFontMetrics = titles.font?.[0].fontMetrics
    ? titles.font[0].fontMetrics
    : defaultSerifFont.fontMetrics;
  const titlesStyles = createCSSVariantTextStylesV2({
    variant: titles,
    baseFontSize,
    fontMetrics: titlesFontMetrics,
  });

  const headingsFontMetrics = headings.font?.[0].fontMetrics
    ? headings.font[0].fontMetrics
    : defaultSansFont.fontMetrics;
  const headingsStyles = createCSSVariantTextStylesV2({
    variant: headings,
    baseFontSize,
    fontMetrics: headingsFontMetrics,
  });

  const paragraphsFontMetrics = paragraphs.font?.[0].fontMetrics
    ? paragraphs.font[0].fontMetrics
    : defaultSansFont.fontMetrics;
  const paragraphsStyles = createCSSVariantTextStylesV2({
    variant: paragraphs,
    baseFontSize,
    fontMetrics: paragraphsFontMetrics,
  });

  const labelsFontMetrics = labels.font?.[0].fontMetrics
    ? labels.font[0].fontMetrics
    : defaultSansFont.fontMetrics;
  const labelsStyles = createCSSVariantTextStylesV2({
    variant: labels,
    baseFontSize,
    fontMetrics: labelsFontMetrics,
  });

  return {
    fonts: {
      ...getCSSFontsObject(fonts),
    },
    titles: {
      font: getCSSFonts(titles.font ? titles.font : fonts.sans), // fallback to sans font
      ...(titlesStyles as TypographyV2<string>['titles']),
    },
    headings: {
      font: getCSSFonts(headings.font ? headings.font : fonts.sans), // fallback to sans font
      ...(headingsStyles as TypographyV2<string>['headings']),
    },
    paragraphs: {
      font: getCSSFonts(paragraphs.font ? paragraphs.font : fonts.sans), // fallback to sans font
      ...(paragraphsStyles as TypographyV2<string>['paragraphs']),
    },
    labels: {
      font: getCSSFonts(labels.font ? labels.font : fonts.sans), // fallback to sans font
      ...(labelsStyles as TypographyV2<string>['labels']),
    },
  };
}

function createCSSVariantTextStylesV2({
  variant,
  baseFontSize,
  fontMetrics,
}: {
  variant:
    | TypographyV2['titles']
    | TypographyV2['headings']
    | TypographyV2['paragraphs']
    | TypographyV2['labels'];
  baseFontSize: number;
  fontMetrics: FontMetrics;
}) {
  const parentTextStyles = keys(variant)
    .filter((viewport) => !Object.values(VIEWPORT).includes(viewport as VIEWPORT))
    .reduce((previous, prop) => {
      const styles = variant[prop] as Omit<TypographyV2['titles'], 'desktop' | 'tablet' | 'mobile'>;
      (previous as any)[prop] = styles;
      return previous;
    }, {} as Omit<TypographyV2['titles'], 'desktop' | 'tablet' | 'mobile'>);

  const variantStyles = keys(variant)
    .filter((viewport) => Object.values(VIEWPORT).includes(viewport as VIEWPORT))
    .reduce((previous, viewport) => {
      const styles = variant[viewport] as TitlesV2;
      const viewportStyle = keys(styles).reduce((previous, title) => {
        //
        // merge styles set on parent with specific styles
        //
        const textStyle: TextStyle & CapsizeTextStyle = {
          ...parentTextStyles,
          ...styles[title],
        };
        //
        // create the css text style
        //
        const cssTextStyle: TextStyle<string> = createCSSCapsizeTextStyleV2({
          ...textStyle,
          baseFontSize,
        });
        (previous as any)[title] = cssTextStyle;
        return previous;
      }, {} as TitlesV2<string>);
      (previous as any)[viewport] = viewportStyle;
      return previous;
    }, {} as TypographyV2<string>['titles'] | TypographyV2<string>['headings'] | TypographyV2<string>['paragraphs'] | TypographyV2<string>['labels']);

  if (parentTextStyles && (parentTextStyles as TypographyV2['paragraphs']).styles) {
    const variantStylesStyles = (parentTextStyles as TypographyV2['paragraphs']).styles;
    return {
      ...variantStyles,
      styles: keys(variantStylesStyles).reduce((previous, current) => {
        previous[current] = createCSSTextStyle({ ...variantStylesStyles[current], baseFontSize });
        return previous;
      }, {} as TextVariantStyles<string>),
    };
  }

  return variantStyles;
}
