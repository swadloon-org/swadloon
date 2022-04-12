import { TypographyV2 } from '@newrade/core-design-system';
import * as DS from '@newrade/core-design-system';
import { keys } from '@newrade/core-react-ui/utilities-iso';

import { log, logWarn } from './utilities';

/**
 *
 * Fonts related utilities
 *
 */

/**
 * Find fonts in the Typography configuration and load then asynchronously in Figma
 * to verify that they are found and valid
 */
export async function loadUsedFontsInTypography(typography: TypographyV2<string>): Promise<{
  errors: string[];
}> {
  log(`Retrieving all used fonts...`);

  const figmaFontNameToLoad = findAllFontInTypography(typography);
  const errors: string[] = [];

  log(`${figmaFontNameToLoad.length} found fonts`);

  return Promise.allSettled(
    figmaFontNameToLoad.map(async (font) => {
      try {
        log(`Loaded font: ${font.family}/${font.style} ✅`);
        await figma.loadFontAsync({
          family: font.family,
          style: font.style,
        });
        return Promise.resolve({ errors: [] });
      } catch (error) {
        const errorMessage = `Could not load font: ${font.family}/${font.style} 🚫`;
        errors.push(errorMessage);
        logWarn(errorMessage);
        return Promise.resolve({ errors });
      }
    })
  ).then((results) => {
    return results.reduce(
      (previous, current) => {
        if (current.status === 'fulfilled') {
          if (current.value?.errors.length) {
            (previous.errors as string[]) = [
              ...(previous.errors as string[]),
              ...current.value.errors,
            ];
          }
        }
        if (current.status === 'rejected') {
          if (current.reason?.errors.length) {
            (previous.errors as string[]) = [...(previous.errors as string[]), 'Request failed'];
          }
        }
        return previous;
      },
      { errors: [] }
    );
  });
}

function findAllFontInTypography(typography: TypographyV2<string>): FontName[] {
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
}

function addFigmaFontToList(fontNameToAdd: FontName, fontNameList: FontName[]) {
  const alreadyAdded = !!fontNameList.find(
    (font) => getFigmaFontNameUniqueId(font) === getFigmaFontNameUniqueId(fontNameToAdd)
  );

  if (alreadyAdded) {
    return fontNameList;
  }

  fontNameList.push(fontNameToAdd);
}

export function getFigmaFontNameUniqueId(font: FontName) {
  return font.family + '/' + font.style;
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

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#common_weight_name_mapping
 */
export function getFontWeightStringForNumber(fontWeight?: string) {
  switch (fontWeight) {
    case '100': {
      return 'Thin';
    }
    case '200': {
      return 'Extra Light';
    }
    case '300': {
      return 'Light';
    }
    case '500': {
      return 'Medium';
    }
    case '600': {
      return 'Semi Bold';
    }
    case '700': {
      return 'Bold';
    }
    case '800': {
      return 'Extra Bold';
    }
    case '900': {
      return 'Black';
    }
    case '950': {
      return 'Extra Black';
    }
    default:
    case '400': {
      return 'Regular';
    }
  }
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#common_weight_name_mapping
 */
export function getFontWeightItalicStringForNumber(fontWeight?: string) {
  switch (fontWeight) {
    case '100': {
      return 'Thin Italic';
    }
    case '200': {
      return 'Extra Light Italic';
    }
    case '300': {
      return 'Light Italic';
    }
    case '500': {
      return 'Medium Italic';
    }
    case '600': {
      return 'Semi Bold Italic';
    }
    case '700': {
      return 'Bold Italic';
    }
    case '800': {
      return 'Extra Bold Italic';
    }
    case '900': {
      return 'Black Italic';
    }
    case '950': {
      return 'Extra Black Italic';
    }
    default:
    case '400': {
      return 'Italic';
    }
  }
}
