import { FontMetrics } from '@capsizecss/core';
import { MapLeafNodes } from '@vanilla-extract/private';

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
import { keys } from '../utilities-iso/utilities';

import { setVarsValuesToStyleObject } from './component.utilities';
import { getCSSFontsObject } from './font.utilities';
import { createCSSTextStyle } from './text.utilities';
import { createCSSCapsizeTextStyleV2 } from './text-capsize.utilities';

/**
 * Create a typography object which properties that are compatible with CSS
 *
 * @version
 *  -v2: uses version 2 of text styles which don't include capsize styles
 */
export function getCSSTypographyV2({
  fonts,
  titles,
  headings,
  paragraphs,
  labels,
  baseFontSize,
  vars,
}: TypographyV2 & { baseFontSize: number }): CSSTypographyV2 {
  const titlesFontMetrics = titles.fontFamily?.[0].fontMetrics
    ? titles.fontFamily[0].fontMetrics
    : defaultSerifFont.fontMetrics;
  const titlesStyles = createCSSVariantTextStylesV2({
    variant: titles,
    baseFontSize,
    fontMetrics: titlesFontMetrics,
  });

  const headingsFontMetrics = headings.fontFamily?.[0].fontMetrics
    ? headings.fontFamily[0].fontMetrics
    : defaultSansFont.fontMetrics;
  const headingsStyles = createCSSVariantTextStylesV2({
    variant: headings,
    baseFontSize,
    fontMetrics: headingsFontMetrics,
  });

  const paragraphsFontMetrics = paragraphs.fontFamily?.[0].fontMetrics
    ? paragraphs.fontFamily[0].fontMetrics
    : defaultSansFont.fontMetrics;
  const paragraphsStyles = createCSSVariantTextStylesV2({
    variant: paragraphs,
    baseFontSize,
    fontMetrics: paragraphsFontMetrics,
  });

  const labelsFontMetrics = labels.fontFamily?.[0].fontMetrics
    ? labels.fontFamily[0].fontMetrics
    : defaultSansFont.fontMetrics;
  const labelsStyles = createCSSVariantTextStylesV2({
    variant: labels,
    baseFontSize,
    fontMetrics: labelsFontMetrics,
  });

  const cssTypography = {
    fonts: {
      ...getCSSFontsObject(fonts),
    },
    titles: titlesStyles as TypographyV2<string>['titles'],
    headings: headingsStyles as TypographyV2<string>['headings'],
    paragraphs: paragraphsStyles as TypographyV2<string>['paragraphs'],
    labels: labelsStyles as TypographyV2<string>['labels'],
  };

  if (!vars) {
    return cssTypography;
  }

  //
  // if vars is passed, traverse the CSSTypography object and replace the defined values
  //
  return setVarsValuesToStyleObject<CSSTypographyV2>(
    cssTypography as MapLeafNodes<CSSTypographyV2, string>,
    vars
  ) as CSSTypographyV2;
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
  vars?: Partial<CSSTypographyV2>;
}) {
  const parentTextStyles = keys(variant)
    // remove 'desktop' | 'tablet' | 'mobile'
    .filter((viewport) => !Object.values(VIEWPORT).includes(viewport as VIEWPORT))
    .reduce((previous, prop) => {
      // extract each style prop
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
        // create css text style
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

  const variantStylesStyles = (parentTextStyles as TypographyV2['paragraphs']).styles;
  return {
    ...createCSSTextStyle({ ...parentTextStyles, baseFontSize }),
    ...variantStyles,
    styles: keys(variantStylesStyles).reduce((previous, current) => {
      previous[current] = createCSSTextStyle({ ...variantStylesStyles[current], baseFontSize });
      return previous;
    }, {} as TextVariantStyles<string>),
  };
}
