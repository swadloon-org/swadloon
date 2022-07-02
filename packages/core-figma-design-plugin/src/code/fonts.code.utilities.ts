import * as DS from '@newrade/core-design-system';
import { keys } from '@newrade/core-react-ui/utilities-iso';

import {
  getFigmaFontSignature,
  getFontWeightItalicStringForNumber,
  getFontWeightStringForNumber,
  loadFigmaFonts,
} from './figma-fonts.code.utilities.js';
import { log } from './log.code.utilities.js';

/**
 *
 * Fonts related utilities
 *
 */

/**
 * Find fonts in the Typography DS configuration and load then asynchronously in Figma
 * to verify that they are found and valid
 */
export async function loadUsedFontsInTypography(typography: DS.TypographyV2<string>): Promise<{
  errors: string[];
}> {
  log(`Retrieving all used fonts...`);

  const figmaFontNameToLoad = findAllFontInTypography(typography);
  log(`${figmaFontNameToLoad.length} found fonts`);

  return loadFigmaFonts(figmaFontNameToLoad);
}

export function findAllFontInTypography(typography: DS.TypographyV2<string>): FontName[] {
  const figmaFontNameToLoad: FontName[] = [];

  keys(typography.titles).forEach((prop) => findFontInTextVariant(typography.titles[prop]));

  keys(typography.headings).forEach((prop) => findFontInTextVariant(typography.headings[prop]));

  keys(typography.labels).forEach((prop) =>
    findFontInTextVariant(typography.labels[prop], typography.labels)
  );
  keys(typography.labels.styles).forEach((prop) =>
    findFontInTextVariant(
      typography.labels.styles[prop] as DS.TextVariantStyles<string>,
      typography.labels
    )
  );

  keys(typography.paragraphs).forEach((prop) => findFontInTextVariant(typography.paragraphs[prop]));

  keys(typography.paragraphs.styles).forEach((prop) =>
    findFontInTextVariant(
      typography.paragraphs.styles[prop] as DS.TextVariantStyles<string>,
      typography.paragraphs
    )
  );

  function findFontInTextVariant(
    value:
      | string
      | DS.TitlesV2<string>
      | DS.HeadingsV2<string>
      | DS.LabelsV2<string>
      | DS.ParagraphsV2<string>
      | DS.TextVariantStyles<string>
      | undefined,
    parent?: DS.TextStyle<string>
  ) {
    if (!value) {
      return;
    }

    const styleValue = (value as DS.TextStyle<string>).fontFamily
      ? value
      : { ...parent, ...(value as DS.TextStyle<string>) };

    const valueAsTextStyle = styleValue as DS.TextStyle<string>;
    const valueAsVariants = styleValue as DS.TextStyle<string>;
    const valueAsTextStyleVariants = styleValue as DS.TextStyle<string>;

    const figmaFontName = getFigmaFontFromTextStyle(valueAsTextStyle);

    if (figmaFontName) {
      addFigmaFontToList(figmaFontName, figmaFontNameToLoad);
    }

    keys(valueAsVariants).forEach((variant) => {
      const variantStyle = valueAsVariants[variant];
      const figmaFontName = getFigmaFontFromTextStyle(variantStyle as DS.TextStyle<string>);
      if (figmaFontName) {
        addFigmaFontToList(figmaFontName, figmaFontNameToLoad);
      }
    });

    keys(valueAsTextStyleVariants).forEach((style) => {
      const textStyle = valueAsTextStyleVariants[style];
      const figmaFontName = getFigmaFontFromTextStyle(textStyle as DS.TextStyle<string>);
      if (figmaFontName) {
        addFigmaFontToList(figmaFontName, figmaFontNameToLoad);
      }
    });
  }

  return figmaFontNameToLoad;

  function addFigmaFontToList(fontNameToAdd: FontName, fontNameList: FontName[]) {
    const alreadyAdded = !!fontNameList.find(
      (font) => getFigmaFontSignature(font) === getFigmaFontSignature(fontNameToAdd)
    );

    if (alreadyAdded) {
      return fontNameList;
    }

    fontNameList.push(fontNameToAdd);
  }
}
/**
 * Give a TextStyle<string>, return a Figma FontName object
 */

export function getFigmaFontFromTextStyle(textStyles?: DS.TextStyle<string>): FontName | undefined {
  if (!textStyles?.fontFamily) {
    return undefined;
  }

  const firstFontFamily = textStyles.fontFamily.split(',')[0];

  if (!firstFontFamily) {
    return undefined;
  }

  if (textStyles.fontStyle === 'italic') {
    return {
      family: firstFontFamily,
      style: getFontWeightItalicStringForNumber(textStyles.fontWeight),
    };
  }

  return {
    family: firstFontFamily,
    style: getFontWeightStringForNumber(textStyles.fontWeight),
  };
}
